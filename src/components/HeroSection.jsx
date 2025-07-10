"use client"; // Explicitly mark this as a client-side component

import { useState, useEffect } from "react";
import Image from "next/image";

// Slide data (use paths from public directory)
const slides = [
	{
		src: "/images/hero_img.jpg",
		alt: "Hero image 1",
		title: "IDEAS THAT ",
		subtitle: "MAKE AN IMPACT",
		description:
			"We care deeply about what we do and the impact we have with our partners and communities.",
	},
	{
		src: "/images/slide_2_1.jpg",
		alt: "Hero image 2",
		title: "OUR MISSION",
		subtitle: "",
		description:
			"We are Kenya's most trusted LPG solution company, consistently and efficiently providing safe, clean quality and accessible LPG energy. We strive for innovation and community impact, driving Kenya's sustainable energy solutions for all.",
	},
	{
		src: "/images/seagas_optimized.jpg",
		alt: "Hero image 3",
		title: "OUR VISION",
		subtitle: "",
		description:
			"Changing lives through affordable and sustainable LPG energy solutions.",
	},
	{
		src: "/images/44_optimized.jpg",
		alt: "Hero image 4",
		title: "OUR VALUES",
		subtitle: "",
		description:
			"We are committed to providing the best quality LPG products and services to our customers.",
	},
];

const HeroSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Auto slide effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, [currentIndex]);

	return (
		<div className="relative w-full h-[90vh] overflow-hidden mt-28">
			{/* Slides */}
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
					}`}
				>
					{/* Image */}
					<Image
						src={slide.src}
						alt={slide.alt}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						priority={index === 0}
						className="w-full h-full"
					/>
					{/* Overlay */}
					<div className="absolute inset-0 bg-black/50 z-10"></div>

					{/* Text Content */}
					<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-left text-white p-4 sm:p-6 md:p-8 lg:p-12 pl-6 sm:pl-10 md:pl-16 lg:pl-40 z-20">
						<div className="bg-black/70 p-6 rounded-lg">
							<h1 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight text-protopink drop-shadow-lg">
								{slide.title}
							</h1>
							{slide.subtitle && (
								<h1 className="text-3xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight text-protopink drop-shadow-lg">
									{slide.subtitle}
								</h1>
							)}
							<p className="mt-4 text-sm sm:text-lg lg:text-2xl font-light max-w-lg text-gray-200 drop-shadow-md leading-relaxed">
								{slide.description}
							</p>
						</div>
					</div>
				</div>
			))}

			{/* Dots navigation */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => setCurrentIndex(index)}
						className={`w-3 h-3 rounded-full border-2 border-white ${
							index === currentIndex ? "bg-white" : "bg-gray-500"
						} transition-opacity`}
						aria-label={`Go to slide ${index + 1}`}
					></button>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
