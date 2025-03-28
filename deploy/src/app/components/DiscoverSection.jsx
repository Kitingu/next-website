import Image from "next/image";
import Link from "next/link";

function DiscoverSection({ scrollToSection }) {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[100vh] flex items-center"
      style={{
        backgroundImage: `url(/images/kabati_plant-DsSHOlgx.jpg)`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-protopink opacity-60"></div>

      <div className="container mx-auto p-6 bg-opacity-80 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
          {/* Text Section */}
          <div className="max-w-lg bg-opacity-90 p-4 rounded-lg mb-6 lg:mb-0">
            <h2 className="text-lg lg:text-5xl text-white font-bold">
              DISCOVER OUR BUSINESS UNITS..
            </h2>
            <p className="mt-2 text-base text-white font-medium lg:text-lg text-justify">
              LPG is fast becoming a fuel of choice in the thriving business
              sector in the country because of several advantages that it brings
              to businesses, such as being environmentally friendly, with a
              higher calorific value which enables our customers to get more
              from less.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex mt-6 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {/* Manufacturing Link using Next.js Link */}
              <div className="flex flex-col justify-center items-center px-6 py-12 border-2 border-white bg-transparent rounded shadow-lg cursor-pointer transition hover:bg-white/10">
                <Link href="/manufacturing">
                  <p className="text-center text-white font-bold text-2xl lg:text-4xl leading-tight break-words">
                    MANUFACTURING
                  </p>
                </Link>
              </div>

              {/* Cylinders Section */}
              <div
                onClick={() => scrollToSection("domestic")}
                className="flex flex-col px-6 py-12 border-2 border-white bg-transparent rounded overflow-hidden shadow-lg cursor-pointer"
              >
                <p className="text-lg text-white text-center font-bold lg:text-4xl">
                  CYLINDERS
                </p>
              </div>

              {/* Bulk Section */}
              <div
                onClick={() => scrollToSection("bulk")}
                className="flex flex-col px-6 py-12 border-2 border-white bg-transparent rounded overflow-hidden shadow-lg cursor-pointer"
              >
                <p className="text-lg text-white text-center font-bold lg:text-4xl">
                  BULK
                </p>
              </div>

              {/* Otogas Section */}
              <div
                onClick={() => scrollToSection("otogas")}
                className="flex flex-col px-6 py-12 border-2 border-white bg-transparent rounded overflow-hidden shadow-lg cursor-pointer"
              >
                <p className="text-lg text-white text-center font-bold lg:text-4xl">
                  OTOGAS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
