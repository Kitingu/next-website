"use client";
import { useState } from "react";
import Header from "./Header";

const StaffFeedback = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		rating: null,
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const ratingOptions = [
		{ value: 1, label: "😞 Very Dissatisfied" },
		{ value: 2, label: "😐 Dissatisfied" },
		{ value: 3, label: "😶 Neutral" },
		{ value: 4, label: "😊 Satisfied" },
		{ value: 5, label: "😍 Very Satisfied" },
	];

	// Validation
	const validate = () => {
		let tempErrors = {};

		// Optional: Only validate email if provided
		if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			tempErrors.email = "Invalid email format.";
		}

		if (!formData.rating) {
			tempErrors.rating = "Please select your satisfaction level.";
		}

		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	// Handle Submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validate()) {
			try {
				const response = await fetch("/api/staff-feedback", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formData),
				});

				const result = await response.json();
				if (!response.ok) {
					throw new Error(result.error || "Something went wrong");
				}

				setResponseMessage("✅ Thank you for your feedback!");
				setSubmitted(true);
				setTimeout(() => setSubmitted(false), 5000);

				// Reset form
				setFormData({ name: "", email: "", message: "", rating: null });
				setErrors({});
			} catch (error) {
				setResponseMessage(`❗ ${error.message}`);
			}
		}
	};

	return (
		<>
			<Header />
			<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
				<div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg transition-all">
					{submitted && (
						<div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg text-center font-semibold">
							{responseMessage}
						</div>
					)}

					<h1 className="text-3xl font-bold text-center text-protoblue-600 mb-4">
						We Value Your Feedback
					</h1>
					<p className="text-gray-600 text-center mb-6">
						Help us improve by sharing your thoughts. 💡
					</p>

					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Name */}
						<div>
							<label className="block text-gray-700 font-medium">Name</label>
							<input
								type="text"
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
								placeholder="Enter your name"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
						</div>

						{/* Email */}
						<div>
							<label className="block text-gray-700 font-medium">Email</label>
							<input
								type="email"
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
								placeholder="Enter your email (Optional)"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email}</p>
							)}
						</div>

						{/* Message */}
						<div>
							<label className="block text-gray-700 font-medium">
								Message (Optional)
							</label>
							<textarea
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none transition-all"
								rows="4"
								placeholder="Share your experience..."
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
							></textarea>
						</div>

						{/* Satisfaction Rating */}
						<div>
							<label className="block text-gray-700 font-medium mb-2">
								How was your experience?
							</label>
							<div className="flex justify-between">
								{ratingOptions.map((option) => (
									<label
										key={option.value}
										className="flex flex-col items-center cursor-pointer"
									>
										<input
											type="radio"
											name="rating"
											value={option.value}
											checked={formData.rating === option.value}
											onChange={() =>
												setFormData({ ...formData, rating: option.value })
											}
											className="hidden"
										/>
										<span
											className={`text-2xl p-2 rounded-full transition-all ${
												formData.rating === option.value
													? "bg-blue-500 text-white"
													: "bg-gray-200"
											}`}
										>
											{option.label.split(" ")[0]}
										</span>
										<span className="text-xs mt-1 text-gray-600">
											{option.label.split(" ").slice(1).join(" ")}
										</span>
									</label>
								))}
							</div>
							{errors.rating && (
								<p className="text-red-500 text-sm mt-1">{errors.rating}</p>
							)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-protopink text-white font-semibold py-3 rounded-lg hover:bg-protoblue-700 transition-all"
						>
							Submit Feedback
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default StaffFeedback;
