"use client";
import { useState } from "react";
import Image from "next/image";

function OtogasSection() {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className="grid grid-cols-1 items-center lg:grid-cols-12 gap-0 min-h-[100vh] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: 'url("/images/bg_domestic_lpg.jpeg")' }}
		>
			{/* Left Section - Text Content */}
			<div className="col-span-full lg:col-span-6 flex items-center p-6">
				<div className="max-w-xl lg:mx-auto">
					<h2 className="text-lg text-protopink font-bold uppercase lg:text-5xl">
						OTOGAS
					</h2>
					<div className="mt-8 text-base text-gray-700 font-medium lg:text-lg max-w-lg">
						<p className="text-justify">
							LPG is the most accessible alternative fuel available to petrol
							and diesel—making it one of the most sought after sources of green
							energy globally. Additionally, switching to LPG could also spell a
							lot of advantages and benefits through prolonged usage—going green
							and being Eco-friendly is just secondary.
						</p>

						{isExpanded && (
							<>
								<p className="mt-4 text-justify">
									LPG autogas conversion works in exactly the same way as a
									normal petrol or diesel engine, only the conventional fuel is
									replaced with autogas LPG. Everything about the vehicle
									remains the same, but a separate autogas fuel system and tank
									are added. Converted vehicles become “dual-fuel” - you can
									switch between petrol (diesel) or LPG autogas, even while on
									the move.
								</p>

								<p className="mt-4 text-justify">
									LPG autogas tanks are constructed from steel and fitted in the
									boot. Each tank is equipped with a multivalve, which includes
									a fuel gauge, pressure relief valve, excess flow valve, and
									shut-off valves. Tanks are typically filled via a filling
									valve located at the rear of the vehicle.
								</p>
							</>
						)}
					</div>

					{/* Toggle Read More / Read Less */}
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

			{/* Right Section - Image */}
			<div className="col-span-full lg:col-span-6 flex justify-center">
				<Image
					src="/images/otogas.jpg"
					alt="Otogas LPG Solution"
					width={600}
					height={400}
					className="h-full w-auto mix-blend-multiply opacity-75"
				/>
			</div>
		</div>
	);
}

export default OtogasSection;
