"use client";

import { useState } from "react";

export default function QRCodeSearch() {
  const [qrcode, setQrcode] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchQRCode = async () => {
    if (!qrcode) return;
    setLoading(true);
    setData(null);

    try {
      const res = await fetch(`https://os.protoenergy.com/api/CylinderInfo/${qrcode}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setData({ error: "Failed to fetch QR code data" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-[180px] pb-10 px-4 bg-gray-100 flex items-start justify-center">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        
        {/* Left: Form and Results */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-protopink">QR Code Lookup</h1>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={qrcode}
              onChange={(e) => setQrcode(e.target.value)}
              placeholder="Enter QR Code"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-protopink"
            />
            <button
              onClick={searchQRCode}
              className="bg-protopink hover:bg-pink-700 text-white px-6 py-2 rounded-lg transition"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {data && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              {data.error ? (
                <p className="text-red-600 font-medium">{data.error}</p>
              ) : (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
                  <div>
                    <dt className="font-semibold">QR Code</dt>
                    <dd>{data.qrCode}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Visible Code</dt>
                    <dd>{data.visibleCode}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Movement</dt>
                    <dd>{data.movementTypeDescription}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Production Order</dt>
                    <dd>{data.productionOrder}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Serial Number</dt>
                    <dd>{data.serialNumber}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Cylinder Code</dt>
                    <dd>{data.cylinderCode}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Empty Weight (kg)</dt>
                    <dd>{data.emptyWeight}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Manufacture Date</dt>
                    <dd>{new Date(data.manufactureDate).toLocaleDateString()}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Last Refill Date</dt>
                    <dd>{new Date(data.dateAdded).toLocaleDateString()}</dd>
                  </div>
                </dl>
              )}
            </div>
          )}
        </div>

        {/* Right: Image Panel */}
        <div className="hidden lg:block lg:w-1/2 bg-gray-200">
          <img
            src="/images/domestic_lpg_1.png"
            alt="Cylinder Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
