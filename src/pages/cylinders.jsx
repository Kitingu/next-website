"use client";

import Image from "next/image";

const CylindersSection = () => {
  return (
    <div className="bg-white pt-20">
      {/* Banner */}
      <div className="relative w-full h-72 lg:h-[400px]">
        <Image
          src="/images/cylinder-banner.png"
          alt="Cylinders Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl lg:text-5xl text-white font-bold text-center">
            CYLINDER MANUFACTURING
          </h1>
        </div>
      </div>

      {/* Manufacturing Overview */}
      <section className="max-w-5xl mx-auto px-4 py-10 text-justify">
        <p className="text-gray-800 mb-4">
          Our plant, located in Kabati, Muranga County, is a Diamond Mark certified manufacturing location – a testament to our commitment to deliver best-in-class products. We maintain a robust international supply chain to ensure raw materials meet the highest global standards.
        </p>
        <p className="text-gray-800 mb-4">
          Our highly automated process includes a press shop, submerged arc welding, heat treatment, and finishing stages like shot blasting, zinc coating, painting, and valving. We currently produce 6kg, 13kg, and 50kg cylinders, along with specialized forklift cylinders.
        </p>
        <p className="text-gray-800">
          Each cylinder passes through multiple inspection stages including hydrotesting, pneumatic testing, and visual quality checks. We produce up to 160,000 cylinders monthly and are expanding to meet growing demand.
        </p>
      </section>

      {/* Maintenance Importance */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl lg:text-2xl font-bold text-protoblue mb-4">
          Why Cylinder Maintenance Matters
        </h2>
        <p className="text-gray-700 mb-4 text-justify">
          LPG cylinders can deteriorate with poor handling, use of inappropriate distribution equipment, and continued exposure to the elements.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          Regular maintenance, repair, and requalification are necessary to ensure that they remain fit for service. Cylinders with defects and damage are segregated for appropriate action when brought into the filling plant.
        </p>
        <p className="text-gray-700 text-justify">
          Skipping maintenance increases safety risks. Cylinder maintenance and repair entail costs and should be done efficiently and properly.
        </p>
      </section>

      {/* Cylinder Range */}
      <section className="bg-gray-50 py-12 px-4 lg:px-8">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-protoblue mb-10">
          Our Cylinder Range
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 6kg */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <Image
              src="/images/cylinders/6kg.png"
              alt="6kg Cylinder"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">6kg Cylinder</h3>
            <p className="text-sm text-gray-600 mt-1">Brand: Progas / Seagas</p>
            <p className="mt-2 text-gray-700">
              Ideal for small families and students. Perfect for light cooking needs.
            </p>
          </div>

          {/* 13kg */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <Image
              src="/images/cylinders/13kg.png"
              alt="13kg Cylinder"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">13kg Cylinder</h3>
            <p className="text-sm text-gray-600 mt-1">Brand: Progas / Seagas</p>
            <p className="mt-2 text-gray-700">
              Best for medium to large households. Offers extended cooking time.
            </p>
          </div>

          {/* 50kg */}
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <Image
              src="/images/cylinders/50kg.png"
              alt="50kg Cylinder"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">50kg Cylinder</h3>
            <p className="text-sm text-gray-600 mt-1">Brand: Progas / Seagas</p>
            <p className="mt-2 text-gray-700">
              Designed for restaurants, hotels, and industrial kitchens requiring high capacity.
            </p>
          </div>
        </div>
      </section>

      {/* QR Code & Seal */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-protopink mb-6">
          Verified Safety & Authenticity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-justify">
          Every Proto Energy cylinder comes equipped with a unique QR code for digital verification and a branded Proto printed seal to ensure authenticity and tamper-proof assurance.
        </p>
        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <Image
            src="/images/qr-code.png"
            alt="QR Code on Cylinder"
            width={120}
            height={120}
          />
          <Image
            src="/images/proto-seal.png"
            alt="Proto Seal"
            width={120}
            height={120}
          />
        </div>
      </section>
    </div>
  );
};

export default CylindersSection;
