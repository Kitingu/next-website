"use client"
import { useState, useRef } from "react";
import Head from "next/head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { FaFire, FaUser, FaPhone, FaEnvelope, FaCar, FaMapMarkerAlt, FaCommentDots, FaMoneyBillWave, FaGlobe, FaWallet, FaCheckCircle, FaCog } from 'react-icons/fa';

// import image1 from "../../../public";
// import image2 from "../../img/oto_1.jpg";

const Benefits = () => {
    // Refs for scrolling to sections
    const benefitsRef = useRef(null);
    const refillRef = useRef(null);
    const convertRef = useRef(null);
    const consumptionRef = useRef(null);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSending, setIsSending] = useState(false);

    // Scroll to section function
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        carDetails: "",
        location: "",
        comments: "",
    });


    const locations = [
        {
            name: "Otogas Northern Bypass",
            description: "Conveniently located near Astrol Petrol Station for easy access.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9403518860972!2d36.88980457548535!3d-1.202011135540879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3ff74d0a2da9%3A0xea51468a1e8fd04c!2sCENTS%20(OtoGas%20Pump%20Station)%20marurui!5e0!3m2!1sen!2ske!4v1743284948042!5m2!1sen!2ske"
        },
        {
            name: "Otogas Kayole",
            description: "Serving Kayole and surrounding areas with reliable LPG refills.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8238326552055!2d36.90223598227505!3d-1.2792923322688954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13d505b7b3af%3A0x8da65d5aded10070!2sOto%20Gas%20Kayole!5e0!3m2!1sen!2ske!4v1743284988645!5m2!1sen!2ske"
        },
        {
            name: "Otogas 44 (Githurai 44)",
            description: "Find us near Naivas Githurai 44 for quick and efficient service.",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9453324867054!2d36.8981636754855!3d-1.1985967355376428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3ff536d9f14d%3A0xa97523ca4a32df6!2sOtogas%20Conversion%20Githurai%2044!5e0!3m2!1sen!2ske!4v1743284704292!5m2!1sen!2ske"
        }
    ];

    // LPG Savings Calculator States
    const [inputType, setInputType] = useState("money");
    const [amount, setAmount] = useState("");
    const [distance, setDistance] = useState("");
    const [fuelLitres, setFuelLitres] = useState("");
    const [fuelPrice, setFuelPrice] = useState(175);
    const [lpgPrice, setLpgPrice] = useState(115);
    const [efficiency, setEfficiency] = useState(12);
    const [savings, setSavings] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);




    // Calculate LPG Savings
    const calculateSavings = () => {
        let fuelCost = 0,
            lpgCost = 0,
            savingsAmount = 0;
        let litresUsed = 0;

        if (inputType === "money") {
            litresUsed = amount / fuelPrice;
        } else if (inputType === "distance") {
            litresUsed = distance / efficiency;
        } else if (inputType === "fuel") {
            litresUsed = fuelLitres;
        }

        fuelCost = litresUsed * fuelPrice;
        lpgCost = litresUsed * lpgPrice;
        savingsAmount = fuelCost - lpgCost;

        setSavings({
            fuelCost: fuelCost.toFixed(2),
            lpgCost: lpgCost.toFixed(2),
            savingsAmount: savingsAmount.toFixed(2),
        });
    };

    // Calculate Conversion Cost
    const calculateConversionCost = () => {
        let baseCost = carType === "private" ? 50000 : 80000;
        let tankAdjustment = tankSize > 60 ? (tankSize - 60) * 500 : 0;
        let totalCost = baseCost + tankAdjustment;

        setConversionCost(totalCost);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        if (!formData.fullName || !formData.phone || !formData.carDetails || !formData.location) {
            setError("Please fill in all required fields.");
            return;
        }
        setIsSending(true);

        try {
            const response = await axios.post("/api/convert", formData);
            setMessage(response.data.message);
            setFormData({ fullName: "", phone: "", email: "", carDetails: "", location: "", comments: "" });
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.error || "Failed to send request. Please try again.");
        }
        finally {
            setIsSending(false);
        }
    };

    return (
        < div className="pt-36">
            <Head>
                <title>Otogas - Benefits of LPG Conversion</title>
                <meta name="description" content="Discover the benefits of converting your vehicle to LPG - save money, reduce emissions, and extend engine life" />

            </Head>

            {/* Navigation Bar */}


            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column - Main Content */}
                    <div className="md:w-2/3">
                        {/* Hero Image */}
                        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/images/otogas.jpg"
                                alt="LPG Vehicle Conversion"
                                className="w-full h-auto"
                                width={800}
                                height={450}
                                priority
                            />
                        </div>

                        {/* Benefits Section */}
                        <section ref={benefitsRef} className="bg-white p-8 rounded-lg shadow-md">
                            {/* Header Section */}
                            <h2 className="text-protopink text-3xl font-bold mb-6 flex items-center">
                                <FaFire className="mr-3 text-4xl" /> Why More Drivers Are Switching to LPG
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                With fuel prices constantly rising, many Kenyan motorists, including taxi and PSV operators,
                                are embracing <span className="font-semibold">Liquefied Petroleum Gas (LPG)</span> as a
                                <span className="font-semibold"> cost-effective, eco-friendly, and efficient</span> alternative.
                                Switching to LPG can help you <span className="font-semibold">save money, extend engine life, and reduce harmful emissions.</span>
                            </p>

                            {/* Section: Lower Fuel Costs */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
                                    <FaMoneyBillWave className="mr-3 text-3xl" /> Drastically Lower Fuel Costs
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <span className="font-semibold">LPG is up to 50% cheaper per litre</span> compared to petrol or diesel.
                                    Many vehicle owners <span className="font-semibold">report savings of up to 40%</span>, making it an excellent choice for reducing fuel expenses.
                                    The predictable pricing of LPG also shields you from market volatility.
                                </p>
                                <ul className="list-none text-gray-600 space-y-2">
                                    <li><FaCheckCircle className="text-green-500 mr-2 inline" /> Cheaper refueling costs compared to petrol or diesel.</li>
                                    <li><FaCheckCircle className="text-green-500 mr-2 inline" /> More predictable pricing with lower market volatility.</li>
                                </ul>
                            </div>

                            {/* Section: Longer Engine Life */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-protopink mb-4 flex items-center">
                                    <FaCog className="mr-3 text-3xl" /> Longer Engine Life & Reduced Maintenance
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    LPG burns <span className="font-semibold">cleaner</span> than conventional fuels, producing
                                    <span className="font-semibold"> fewer carbon deposits</span>. This leads to reduced
                                    <span className="font-semibold"> engine wear</span> and fewer maintenance issues,
                                    significantly extending your engine’s lifespan.
                                </p>
                                <ul className="list-none text-gray-600 space-y-2">
                                    <li><FaCheckCircle className="text-blue-500 mr-2 inline" /> Lower engine wear and tear, leading to longer vehicle lifespan.</li>
                                    <li><FaCheckCircle className="text-blue-500 mr-2 inline" /> Reduced carbon buildup, resulting in fewer maintenance requirements.</li>
                                </ul>
                            </div>

                            {/* Section: Environmental Benefits */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-yellow-600 mb-4 flex items-center">
                                    <FaGlobe className="mr-3 text-3xl" /> Eco-Friendly & Lower Carbon Footprint
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    By using LPG, you are significantly reducing your carbon footprint.
                                    LPG emits <span className="font-semibold">80% fewer nitrogen oxides</span> compared to diesel,
                                    contributing to cleaner air and reduced environmental impact.
                                </p>
                                <ul className="list-none text-gray-600 space-y-2">
                                    <li><FaCheckCircle className="text-yellow-500 mr-2 inline" /> Lower carbon dioxide emissions than traditional fuels.</li>
                                    <li><FaCheckCircle className="text-yellow-500 mr-2 inline" /> No harmful particulates, improving air quality.</li>
                                </ul>
                            </div>

                            {/* Section: Government Incentives */}
                            <div>
                                <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center">
                                    <FaWallet className="mr-3 text-3xl" /> Tax Benefits & Government Incentives
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Many governments, including Kenya, are encouraging the adoption of LPG through
                                    <span className="font-semibold"> tax reductions and financial incentives</span>.
                                    Vehicle owners converting to LPG may qualify for rebates and subsidies.
                                </p>
                                <ul className="list-none text-gray-600 space-y-2">
                                    <li><FaCheckCircle className="text-purple-500 mr-2 inline" /> Reduced excise duty on LPG fuel.</li>

                                </ul>
                            </div>

                            {/* Conclusion Section */}
                            <p className="mt-8 text-gray-700 leading-relaxed">
                                Switching to LPG is not just a financial decision; it's an investment in a cleaner environment and
                                the longevity of your vehicle. Join the growing number of Kenyan drivers making the switch today!
                            </p>
                        </section>

                        {/* Where to Refill Section */}
                        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
                            <h2 className="text-2xl font-bold mb-4 text-protopink">Where to Refuel</h2>
                            <p className="mb-4">
                                Looking for a convenient place to refill your gas? We've got you covered! Visit any of our refill stations for fast, safe, and affordable service.
                            </p>

                            {/* Tabs for Station Selection */}
                            <Tabs
                                selectedIndex={locations.findIndex(loc => loc.name === selectedLocation.name)}
                                onSelect={(index) => setSelectedLocation(locations[index])}
                            >
                                <TabList>
                                    {locations.map((location, index) => (
                                        <Tab key={index}>{location.name}</Tab>
                                    ))}
                                </TabList>

                                {locations.map((location, index) => (
                                    <TabPanel key={index}>
                                        <div className="mb-4">
                                            <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                                            <p>{location.description}</p>
                                        </div>

                                        {/* Embedded Map */}
                                        <div className="overflow-hidden rounded-lg shadow-md">
                                            <iframe
                                                src={location.mapUrl}
                                                width="100%"
                                                height="300"
                                                style={{ border: "none" }}
                                                allowFullScreen=""
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </section>

                        {/* Want to Convert Section */}
                        <section className="bg-white p-8 rounded-lg shadow-md mt-8">
                            <h2 className="text-3xl font-bold mb-6">Want to Convert Your Car to LPG?</h2>
                            <p className="text-gray-700 mb-8">
                                Convert your car to LPG and enjoy lower fuel costs, reduced emissions, and a smoother driving experience.
                                Fill in your details below, and our team will get in touch with you!
                            </p>

                            {/* Success/Error Messages */}
                            {message && <p className="text-green-600 mb-4">{message}</p>}
                            {error && <p className="text-red-600 mb-4">{error}</p>}

                            {/* Form Section */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label htmlFor="fullName" className="block font-medium mb-2">Customer Details</label>
                                    <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                        <FaUser className="text-gray-500 mr-3" />
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full border-none focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block font-medium mb-2">Phone Number</label>
                                    <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                        <FaPhone className="text-gray-500 mr-3" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="Enter your phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border-none focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-2">Email Address (Optional)</label>
                                    <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                        <FaEnvelope className="text-gray-500 mr-3" />
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Car Details */}
                                <div>
                                    <label htmlFor="carDetails" className="block font-medium mb-2">Car Details</label>
                                    <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                        <FaCar className="text-gray-500 mr-3" />
                                        <input
                                            type="text"
                                            id="carDetails"
                                            placeholder="Enter car make and model (e.g., Toyota Corolla 2018)"
                                            value={formData.carDetails}
                                            onChange={handleChange}
                                            className="w-full border-none focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Location Selection */}
                                <div>
                                    <label htmlFor="location" className="block font-medium mb-2">Preferred Conversion Location</label>
                                    <select
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="user_dialog_input"
                                        required
                                    >
                                        <option value="">Select a location</option>
                                        <option>Otogas Northern Bypass</option>
                                        <option>Otogas Kayole</option>
                                        <option>Otogas 44 (Githurai 44)</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full btn btn-primary"
                                    disabled={isSending}
                                >
                                    {isSending ? "Sending..." : "Send Mail"}
                                </button>
                            </form>

                            <p className="mt-6 text-gray-600">
                                Our team will contact you within 24 hours to discuss the next steps. Join the LPG revolution today and drive smarter!
                            </p>
                        </section>

                    </div>

                    {/* Right Column - Calculators */}
                    <div className="md:w-1/3 space-y-6 sticky top-24 self-start">
                        {/* LPG Savings Calculator */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-green-600 text-lg font-semibold mb-3">
                                <i className="fas fa-calculator mr-2"></i> LPG Savings Calculator
                            </h3>
                            <p className="text-gray-600 mb-4">Calculate savings based on Money, Distance, or Fuel used.</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Input Type</label>
                                    <select
                                        value={inputType}
                                        onChange={(e) => setInputType(e.target.value)}
                                        className="user_dialog_input"
                                    >
                                        <option value="money">Money Spent on Fuel</option>
                                        <option value="distance">Distance to Travel (km)</option>
                                        <option value="fuel">Litres of Fuel Used</option>
                                    </select>
                                </div>

                                {inputType === "money" && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount Spent on Fuel (KES)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter amount spent"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="user_dialog_input"
                                        />
                                    </div>
                                )}

                                {inputType === "distance" && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Distance to Travel (km)</label>
                                        <input
                                            type="number"
                                            placeholder="Enter distance in km"
                                            value={distance}
                                            onChange={(e) => setDistance(e.target.value)}
                                            className="user_dialog_input"
                                        />
                                    </div>
                                )}

                                {inputType === "fuel" && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Litres of Fuel Used</label>
                                        <input
                                            type="number"
                                            placeholder="Enter litres of fuel"
                                            value={fuelLitres}
                                            onChange={(e) => setFuelLitres(e.target.value)}
                                            className="user_dialog_input"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fuel & LPG Efficiency (km per litre)</label>
                                    <input
                                        type="number"
                                        placeholder="Enter efficiency"
                                        value={efficiency}
                                        onChange={(e) => setEfficiency(e.target.value)}
                                        className="user_dialog_input"
                                    />
                                </div>

                                <button
                                    onClick={calculateSavings}
                                    className="w-full bg-protoblue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                                >
                                    Calculate Savings
                                </button>

                                {savings && (
                                    <div className="mt-4 p-4 bg-blue-50 rounded-md">
                                        <h4 className="font-medium mb-2">Savings Summary</h4>
                                        <p><span className="font-medium">Fuel Cost:</span> KES {savings.fuelCost}</p>
                                        <p><span className="font-medium">LPG Cost:</span> KES {savings.lpgCost}</p>
                                        <p><span className="font-medium">Total Savings:</span> KES {savings.savingsAmount}</p>
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    );
};

export default Benefits;