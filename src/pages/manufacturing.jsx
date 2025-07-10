import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ManufacturingPage = () => {
	return (
		<>
			<Header />
			<div
				className="pt-36 px-6 pb-20 bg-cover bg-center bg-no-repeat text-gray-800 space-y-20"
				style={{ backgroundImage: `url(/images/bg_domestic_lpg.jpeg)` }}
			>
				{/* Hero Intro Section */}
				<section className="max-w-6xl mx-auto text-left space-y-6">
					<h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-protopink leading-tight">
						Manufacturing & Maintenance of LPG Cylinders
					</h1>
					<p className="text-lg text-gray-700">
						At{" "}
						<span className="font-semibold text-protopink">Proto Energy</span>,
						we are the largest bulk, cylinder manufacturing and LPG re-filling
						company in Kenya initially founded to address the unmet demand for
						LPG in both the domestic and industrial sector. With the global push
						for industries to engage new avenues of energy optimization, we have
						since focused our expertise to provide industries with cleaner
						sources of energy and power while achieving higher efficiency. We
						deliver on quality, affordability, and reliability while adhering to
						the highest safety standards.
					</p>
				</section>

				{/* Commitment Section */}
				<section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-protopink">
							Commitment to Safety & Quality
						</h2>
						<p className="text-gray-700 text-justify">
							Over time, the physical condition of LPG cylinders can deteriorate
							with poor handling, use of inappropriate distribution equipment,
							and continued exposure to the elements.
						</p>
						<p className="text-gray-700 text-justify">
							Regular maintenance, repair, and requalification are necessary to
							ensure that they remain fit for service. Cylinders with defects
							and damage are segregated for appropriate action when brought into
							the filling plant.
						</p>
						<p className="text-gray-700 text-justify">
							Skipping maintenance increases safety risks. Cylinder maintenance
							and repair entail costs and should be done efficiently and
							properly.
						</p>
					</div>
					<Image
						src="/images/slide_3b.jpg"
						alt="Manufacturing Inspection"
						className="rounded-xl shadow-xl w-full object-cover"
						width={600}
						height={400}
					/>
				</section>

				{/* Inspection Checklist */}
				<section className="max-w-6xl mx-auto space-y-6">
					<h2 className="text-2xl font-semibold text-protopink">
						Cylinder Inspection Checklist
					</h2>
					<ul className="list-disc pl-6 space-y-2 text-gray-700">
						<li>Worn-out markings or faded paint/finish</li>
						<li>
							Leaking valves, missing rubber seals, or damaged valve parts
						</li>
						<li>Severe dents, bulges, gouges, and intersecting cuts</li>
						<li>Cracks, laminations, or weakened shell areas</li>
						<li>Fire damage, melted components, or heat distortion</li>
						<li>
							Corrosion (general, crevice, chain pitting, or isolated pits)
						</li>
						<li>Depressed valve boss or signs of arc/torch burns</li>
						<li>Pinhole weld leaks or deformation in collar/foot ring area</li>
						<li>Overdue for requalification or pressure testing</li>
					</ul>
				</section>

				{/* Defects Section */}
				<section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-protopink">
							Common Cylinder Defects
						</h3>
						<ul className="space-y-3 text-gray-700 text-justify text-sm">
							<li>
								<strong>Bulge:</strong> Visible swelling on the shell.
							</li>
							<li>
								<strong>Dent:</strong> A depression that exceeds 2% of the
								diameter.
							</li>
							<li>
								<strong>Gouge:</strong> Material removed or reshaped due to
								impact.
							</li>
							<li>
								<strong>Crack:</strong> Splitting or rifting of the shell.
							</li>
							<li>
								<strong>Corrosion:</strong> Pitting, scaling, or general surface
								reduction.
							</li>
							<li>
								<strong>Fire Damage:</strong> Charring, distortion, or melted
								components.
							</li>
						</ul>
					</div>

					{/* Uncomment to display image if needed */}
					{/* <Image
            src="/images/slide_3b.jpg"
            alt="Cylinder Defects"
            className="rounded-xl shadow-xl w-full object-cover"
            width={600}
            height={400}
          /> */}
				</section>

				{/* Repair Process Section */}
				<section className="max-w-6xl mx-auto space-y-6">
					<h2 className="text-2xl font-semibold text-protopink">
						Our Repair & Requalification Process
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								title: "Minor Defect Repairs",
								description:
									"Bent foot rings and collars are straightened using mandrills and hydraulic presses. This avoids costly welding and retains cylinder integrity.",
							},
							{
								title: "Hot Work Repairs",
								description:
									"For deeper damage, cylinders are gas-freed, cut with precision, and new parts welded on. Repaired units undergo heat treatment and hydro-testing.",
							},
							{
								title: "Valve Handling",
								description:
									"Damaged valves are removed, inspected, and replaced with ISO-compliant parts. Repaired valves are tested rigorously or scrapped if compromised.",
							},
						].map((item, index) => (
							<div
								key={index}
								className="bg-white/90 p-5 rounded-xl shadow hover:shadow-lg border space-y-3 transition duration-200"
							>
								<h4 className="font-semibold text-lg text-gray-800">
									{item.title}
								</h4>
								<p className="text-gray-600 text-sm">{item.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Requalification Standards */}
				<section className="max-w-6xl mx-auto space-y-6">
					<h2 className="text-2xl font-semibold text-protopink">
						Requalification Standards
					</h2>
					<p className="text-gray-700 text-justify">
						Our requalification process follows ISO 10464 and national
						regulations. Each cylinder is pressure tested, documented, and
						certified before returning to service.
					</p>
					<p className="text-gray-700 text-justify">
						Properly maintained cylinders can exceed expected service life,
						contributing to both safety and sustainability.
					</p>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ManufacturingPage;
