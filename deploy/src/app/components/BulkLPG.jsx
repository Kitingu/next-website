"use client";

import { useState } from "react";
import Image from "next/image";

function BulkLPG() {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="relative grid h-[100vh]">
			{/* Background Image */}
			<div className="absolute inset-0 overflow-hidden">
				<Image
					className="w-full h-full object-cover scale-105"
					src="/images/bg_domestic_lpg.jpeg"
					alt="Domestic LPG"
					layout="fill"
					priority
				/>
			</div>

			{/* Content Section */}
			<div className="relative z-10 col-start-1 row-start-1 place-content-center container mx-auto p-6">
				<div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-6">
					<div className="col-span-full lg:col-span-6">
						<h2 className="text-lg text-protopink font-bold uppercase lg:text-5xl">
							BULK LPG
						</h2>
						<div className="mt-8 text-base text-gray-600 font-medium lg:text-lg max-w-lg text-justify">
							<p>
								With strategic LPG storage and distribution facilities in Kenya,
								Proto Energy delivers value to our end user commercial bulk
								customers through reliability, affordability, and innovation.
								Continuous assessment of our customer requirements has been the
								focal point of our customers’ success stories.
							</p>
							{isExpanded && (
								<>
									<p className="mt-4 text-justify">
										We supply bulk LPG to businesses in manufacturing,
										processing, production, hospitality, and institutions. Our
										dedicated team ensures safe LPG installations and reliable
										systems.
									</p>
									<p className="mt-4 text-justify">
										Through fuel energy conversions, we contribute to the
										reduction of carbon emissions.
									</p>
									<p className="mt-4 text-justify">
										Our metered trucks of up to 10 tons and large-haul trucks of
										up to 24 tons deliver LPG across the country.
									</p>
								</>
							)}
						</div>
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
							className="h-full w-auto mix-blend-multiply max-h-[300px]"
							src="/images/bulk_tank.png"
							alt="Bulk LPG"
							width={500}
							height={300}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BulkLPG;
