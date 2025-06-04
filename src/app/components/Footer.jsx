"use client"; // Explicitly mark this as a client-side component

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Footer = () => {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
		department: "contact", // Set department to 'contact'
	});

	const [errors, setErrors] = useState({});
	const [isSending, setIsSending] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	// Form validation
	const validateForm = () => {
		const newErrors = {};

		if (!formData.email) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.subject) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle Input Change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Submit Form
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validateForm()) {
			setIsSending(true);
			setResponseMessage("");

			try {
				const response = await axios.post("/api/mailer", formData);
				console.log("Response:", response.data);
				//
				// {message: 'Feedback submitted successfully'}

				if (response.status === 200) {
					setResponseMessage("Email sent successfully!");
					setFormData({
						email: "",
						subject: "",
						message: "",
						department: "contact", // Reset department to "contact" after submission
					});
				} else {
					setResponseMessage(response.data.error || "Failed to send email.");
				}
			} catch (error) {
				console.error("Error sending email:", error);
				setResponseMessage("An error occurred. Please try again later.");
			} finally {
				setIsSending(false);
			}
		}
	};

	return (
		<footer className="bg-protoblue" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="xl:grid xl:grid-cols-4 xl:gap-8">
					{/* Logo and Description */}
					<div className="space-y-8 xl:col-span-2">
						<Image
							src="/images/proto_logo.png"
							alt="Proto Energy"
							width={150}
							height={50}
						/>
						<p className="text-sm leading-6 text-gray-300 max-w-sm">
							We care deeply about what we do and the impact we have with our
							partners and communities.
						</p>
						<div className="flex space-x-6">{/* Social Media Icons */}</div>
					</div>

					{/* Contact Info */}
					<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="col-span-1">
							<h3 className="text-base font-semibold leading-6 text-white">
								Head Office
							</h3>
							<ul
								role="list"
								className="mt-6 space-y-2 *:text-base *:text-white"
							>
								<li>Almary Business park,</li>
								<li>Off USIU Rd, Nairobi, Kenya</li>
								<li>P.O. BOX 50384 - 00100</li>
								<li>Nairobi, Kenya</li>
								<li>
									<a href="tel:0800723666" className="text-white">
										0800723666
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Form */}
						<div className="col-span-1">
							<div className="bg-white">
								<div className="bg-protopink px-4 py-1">
									<h2 className="text-lg text-white font-semibold">
										Contact Us
									</h2>
								</div>
								<form
									onSubmit={handleSubmit}
									className="grid grid-cols-6 gap-2 p-4"
								>
									<div className="col-span-full">
										<input
											type="email"
											name="email"
											className="user_dialog_input"
											placeholder="Email"
											value={formData.email}
											onChange={handleChange}
										/>
										{errors.email && (
											<p className="text-red-500">{errors.email}</p>
										)}
									</div>
									<div className="col-span-full">
										<input
											type="text"
											name="subject"
											className="user_dialog_input"
											placeholder="Subject"
											value={formData.subject}
											onChange={handleChange}
										/>
										{errors.subject && (
											<p className="text-red-500">{errors.subject}</p>
										)}
									</div>
									<div className="col-span-full">
										<textarea
											name="message"
											className="user_dialog_input"
											placeholder="Your message"
											rows="4"
											value={formData.message}
											onChange={handleChange}
										/>
										{errors.message && (
											<p className="text-red-500">{errors.message}</p>
										)}
									</div>
									<div className="col-span-full">
										<button
											type="submit"
											className="w-full btn btn-primary"
											disabled={isSending}
										>
											{isSending ? "Sending..." : "Send Mail"}
										</button>
									</div>
									{responseMessage && (
										<p className="col-span-full text-center mt-2 text-red-500">
											{responseMessage}
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Links */}
				<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
					<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
						<ul className="flex items-center flex-wrap space-x-4 lg:divide-x lg:divide-white">
							<li className="px-2">
								<Link href="/privacy-statement">
									<span className="text-base text-white">
										Privacy Statement
									</span>
								</Link>
							</li>
							<li className="px-2">
								<Link href="/terms-and-conditions">
									<span className="text-base text-white">
										Terms & Conditions
									</span>
								</Link>
							</li>
						</ul>
						<p className="text-xs text-center leading-5 text-gray-100 mt-4 lg:mt-0">
							&copy; {new Date().getFullYear()} Powered by Proto Energy Limited
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
