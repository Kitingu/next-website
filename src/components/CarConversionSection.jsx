"use client";
import { useState } from "react";
import Image from "next/image";

function CarConversionSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    department: "otogas",
    subject: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.message || !formData.subject) {
      setStatus("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({
          email: "",
          message: "",
          department: "otogas",
          subject: "",
        });
      } else {
        const { error } = await res.json();
        setStatus(error || "Something went wrong, please try again later.");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      setStatus("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Section */}
      {/* Left Section */}
<div className="relative col-span-full lg:col-span-6 h-80 lg:h-[300px]">
  <Image
    src="/images/pink_pattern.png"
    alt="Background Pattern"
    fill
    className="object-cover bg-protoblue"
    priority
  />
  <div className="absolute inset-0 bg-protoblue/20 flex flex-col justify-center items-center text-center p-6 z-10">
    <h2 className="text-lg text-protopink font-bold lg:text-2xl">
      Car Conversion
    </h2>
    <p className="text-base text-white mt-2 max-w-xl">
      Please provide your details and our experts will get back to you
      regarding OtoGas solutions.
    </p>
  </div>
</div>


        {/* Contact Us Label */}
        <div className="lg:w-12 bg-protopink px-2 py-2 lg:[writing-mode:vertical-rl] flex items-center justify-center">
          <p className="text-2xl text-white font-bold uppercase lg:rotate-180">
            Contact us
          </p>
        </div>

        {/* Form Section */}
        <div className="col-span-full lg:col-span-5 flex items-center justify-center px-4 py-6">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-4">
            <form className="grid grid-cols-6 gap-2" onSubmit={handleSubmit}>
              {/* Email (Optional) */}
              <div className="col-span-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  className="user_dialog_input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Hidden Department */}
              <div className="col-span-full hidden">
                <select
                  name="department"
                  className="user_dialog_input"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                >
                  <option value="otogas">OtoGas</option>
                  <option value="bulk">Bulk</option>
                  <option value="cylinders">Cylinders</option>
                </select>
              </div>

              {/* Subject Select */}
              {formData.department === "otogas" && (
                <div className="col-span-full">
                  <select
                    name="subject"
                    className="user_dialog_input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Car Conversion">Car Conversion</option>
                    <option value="Fueling Stations">Fueling Stations</option>
                    <option value="Fueling Prices">Fueling Prices</option>
                    <option value="Customer Experience">
                      Customer Experience
                    </option>
                  </select>
                </div>
              )}

              {/* Message Field */}
              <div className="col-span-full">
                <textarea
                  name="message"
                  className="user_dialog_input"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full animate-spin mx-auto" />
                  ) : (
                    "Send Mail"
                  )}
                </button>
              </div>
            </form>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center text-sm text-red-500">{status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarConversionSection;
