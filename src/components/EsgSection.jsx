"use client";
import { useState } from "react";
import Image from "next/image";

function EsgSection() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className="grid grid-cols-1 items-center lg:grid-cols-12 gap-0 min-h-[100vh] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url('/images/bg_domestic_lpg.jpeg')` }} // Apply background image
		>
			{/* Text Section */}
			<div className="col-span-full lg:col-span-6 flex items-center p-6">
				<div className="max-w-xl lg:mx-auto">
					<h2 className="text-lg text-protopink font-bold uppercase lg:text-5xl">
						Environment, Social and Governance (ESG)
					</h2>
					<div className="mt-8 text-base text-gray-600 font-medium lg:text-lg max-w-lg">
						<p className="text-justify">
							ESG is a core enabler to business excellence. Excelling businesses
							do so by doing good to the workers, the environment, the
							community, and other stakeholders who are impacted by its
							operations. We believe in sustainable production and endeavour to
							replicate this in sustainable reporting and actions. At Proto; ESG
							houses Health, Safety and Environment, Integrated Management
							System (IMS) and Quality Control as key components that build up
							to the bigger inherent concept of ESG.
						</p>

						<p className="mt-4 text-justify">
							We prioritize Health, Safety, and Environment (HSE) as an integral
							part of our operations and values. Our commitment to safety goes
							beyond compliance—it’s a promise to protect our people, our
							communities, and the environment in every step of our journey. We
							believe that a safe workplace fosters innovation and excellence.
						</p>

						{isExpanded && (
							<p className="mt-4 text-justify">
								By embedding robust safety protocols and maintaining
								environmental stewardship, we aim to create lasting value for
								our stakeholders while contributing to a sustainable future. At
								Proto Energy, safety isn’t just a policy—it’s our culture and
								our commitment.
							</p>
						)}
					</div>

					{/* Read More / Read Less Button */}
					<div className="mt-6">
						<button
							onClick={toggleExpand}
							className="text-sm lg:text-lg text-protopink font-medium underline underline-offset-4"
						>
							{isExpanded ? "Read Less" : "Read More"}
						</button>
					</div>
				</div>
			</div>

			{/* Image Section */}
			<div className="col-span-full lg:col-span-6 flex justify-center">
				<Image
					src="/images/esg.webp"
					alt="Bulk LPG"
					width={500}
					height={500}
					className="h-full w-auto mix-blend-multiply opacity-75"
				/>
			</div>
		</div>
	);
}

export default EsgSection;
