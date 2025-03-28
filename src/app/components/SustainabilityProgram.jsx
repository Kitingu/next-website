"use client";
import  { useState } from "react";

function SustainabilityProgram() {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [downloaded, setDownloaded] = useState(false);

	// Email Validation
	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	// Handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}
		setError("");
		alert(`Thank you for subscribing with email: ${email}`);
		setEmail("");
	};

	// Handle Download
	const handleDownload = () => {
		// Assuming you have a PDF or file to download (provide URL here)
		const fileUrl = "/files/sustainability-report.pdf";
		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = "sustainability-report.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		setDownloaded(true);
		setTimeout(() => setDownloaded(false), 3000);
	};

	return (
		<div className="bg-protoblue">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
					{/* Text Section */}
					<div className="col-span-1 lg:col-span-7">
						<h2 className="text-lg text-protopink font-bold uppercase lg:text-5xl">
							SUSTAINABILITY PROGRAM
						</h2>
						<div className="mt-4">
							<p className="text-gray-100">
								Over the past 3 years, the brand Progas® has developed into a
								house-hold name for LPG in Kenya. We have over 10,000 retailer
								channel partners that stock our products in every corner of the
								country. We run the most comprehensive fleet of trucks ranging
								from the 15MT to the smallest 300kgs payload vehicles to ensure
								our products are available on demand.
							</p>
						</div>
					</div>

					{/* Form and Download Section */}
					<div className="lg:mt-8 col-span-1 lg:col-span-5">
						{/* Email Form */}
						<form onSubmit={handleSubmit}>
							<label htmlFor="email" className="flex">
								<div className="relative flex flex-grow items-stretch focus-within:z-10">
									<input
										type="email"
										name="email"
										id="email"
										className="rounded-tr-none rounded-br-none user_dialog_input"
										placeholder="Your Mail"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<button
									type="submit"
									className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-4 py-2 bg-protopink text-sm font-semibold text-white"
								>
									Submit
								</button>
							</label>
							{error && <p className="text-red-500 mt-2">{error}</p>}
						</form>

						{/* Download Button */}
						<div className="mt-4">
							<button
								type="button"
								className="w-full btn btn-primary"
								onClick={handleDownload}
							>
								Download Report
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="ml-2 size-5 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
									/>
								</svg>
							</button>
							{downloaded && (
								<p className="text-green-500 mt-2">
									Report downloaded successfully!
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SustainabilityProgram;
