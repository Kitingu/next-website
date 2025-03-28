"use client";
import { useState } from "react";
import Image from "next/image";

function DomesticLPG() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="relative grid h-[100vh] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 overflow-hidden">
				<Image
					src="/images/bg_domestic_lpg.jpeg"
					alt="Background - Domestic LPG"
					layout="fill"
					objectFit="cover"
					className="scale-105"
					priority
				/>
			</div>

			{/* Content Section */}
			<div className="relative z-10 col-start-1 row-start-1 place-content-center container mx-auto p-6">
				<div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-6">
					{/* Text Section */}
					<div className="col-span-full lg:col-span-6">
						<h2 className="text-lg text-protopink font-bold uppercase lg:text-5xl">
							CYLINDERS
						</h2>
						<div className="mt-8 text-base text-gray-600 font-medium lg:text-lg max-w-lg text-justify">
							<p>
								Proto Energy is committed to bringing one of the cleanest fuel,
								LPG to millions of homes in Kenya with utmost safety and
								assurance. Regulatory compliance is a top priority for us at
								Proto. Led by leading professionals, each and every department
								of the company has worked in unison to bring about a green
								revolution in the industry.
							</p>
							{isExpanded && (
								<>
									<p className="mt-4 text-justify">
										We can confidently say that our road map in compliance is
										enviable. Our list of major and minor permissions and
										licenses obtained from concerned bodies are a testament to
										our compliance.
									</p>
								</>
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

					{/* Image Section */}
					<div className="col-span-full lg:col-span-6">
						<Image
							src="/images/domestic_lpg_1.png"
							alt="Domestic LPG"
							width={500}
							height={400}
							className="w-full h-auto max-h-[400px] lg:max-h-none object-cover lg:object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DomesticLPG;
