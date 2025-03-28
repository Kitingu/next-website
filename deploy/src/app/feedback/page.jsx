"use client";
import { useState } from "react";
import Header from "../components/Header";

const FeedbackForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		rating: null,
	});

	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [status, setStatus] = useState(""); // State to manage the status message

	const ratingOptions = [
		{ value: 1, label: "😞 Very Dissatisfied" },
		{ value: 2, label: "😐 Dissatisfied" },
		{ value: 3, label: "😶 Neutral" },
		{ value: 4, label: "😊 Satisfied" },
		{ value: 5, label: "😍 Very Satisfied" },
	];

	const validate = () => {
		let tempErrors = {};

		if (!formData.name.trim()) tempErrors.name = "Name is required.";
		if (!formData.email.trim()) {
			tempErrors.email = "Email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			tempErrors.email = "Invalid email format.";
		}
		if (!formData.rating) {
			tempErrors.rating = "Please select your satisfaction level.";
		}

		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validate()) return; // Only proceed if validation passes

		// Sending feedback to the API route
		const res = await fetch("/api/feedback", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		if (res.ok) {
			setStatus("Feedback submitted successfully!");
			setSubmitted(true);
			setFormData({
				name: "",
				email: "",
				message: "",
				rating: null,
			}); // Reset form data after submission
		} else {
			const { error } = await res.json();
			setStatus(error || "Something went wrong, please try again later");
		}
	};

	return (
		<>
			<Header />
			<div className="pt-36 flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
				<div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg transition-all">
					{submitted && (
						<div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg text-center font-semibold">
							🎉 Thank you for your feedback!
						</div>
					)}

					{status && (
						<div
							className={`mb-4 p-3 ${
								status.includes("success")
									? "text-green-700 bg-green-100"
									: "text-red-700 bg-red-100"
							} rounded-lg text-center font-semibold`}
						>
							{status}
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
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name}</p>
							)}
						</div>

						{/* Email */}
						<div>
							<label className="block text-gray-700 font-medium">Email</label>
							<input
								type="email"
								className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
								placeholder="Enter your email"
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

						{/* Satisfaction Rating (Radio Buttons) */}
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

export default FeedbackForm;
