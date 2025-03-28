"use client"; // Explicitly mark this as a client-side component

import { useState } from "react";
import Image from "next/image";

function CarConversionSection() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    department: "otogas", // Pre-set the department to OtoGas
    subject: "", // This will hold the selected subject
  });
  const [status, setStatus] = useState(""); // For success or error messages
  const [loading, setLoading] = useState(false); // Loader state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.message || !formData.subject) {
      setStatus("All fields are required.");
      return;
    }

    setLoading(true); // Set loading to true when form is submitted

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email, // Email is optional
          subject: formData.subject, // Use dynamic subject selected by user
          message: formData.message,
          department: formData.department, // Send the department info
        }),
      });

      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({
          email: "",
          message: "",
          department: "otogas", // Reset department to "otogas" after submission
          subject: "", // Reset subject
        }); // Reset form after successful submission
      } else {
        const { error } = await res.json();
        setStatus(error || "Something went wrong, please try again later.");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      setStatus("Something went wrong, please try again later.");
    } finally {
      setLoading(false); // Stop loading spinner after process completes
    }
  };

  return (
    <div className="h-[250px] md:h-[300px] lg:h-[300px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden h-full relative">
        {/* Left Section with Background Image and Overlay */}
        <div className="self-start col-span-full lg:col-span-6 grid h-full relative">
          <div className="col-start-1 row-start-1 h-full">
            <Image
              className="w-full h-full object-cover bg-protoblue"
              src="/images/pink_pattern.png"
              alt="Background Pattern"
              width={600}
              height={400}
            />
          </div>

          {/* Content Section */}
          <div className="py-6 col-start-1 row-start-1 max-w-2xl mx-auto w-full place-content-center h-full flex flex-col justify-center z-20">
            <h2 className="text-lg text-protopink font-bold lg:text-2xl">
              Car Conversion
            </h2>
            <p className="text-base text-white mt-2">
              Please provide your details and our experts will get back to you
              regarding OtoGas solutions.
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="col-span-1 lg:w-12 bg-protopink px-2 py-2 lg:[writing-mode:vertical-rl] flex items-center justify-center">
          <p className="text-2xl text-white font-bold uppercase lg:rotate-180">
            Contact us
          </p>
        </div>

        {/* Form Section */}
        <div className="self-start col-span-full lg:col-span-5 h-full flex items-center justify-center">
          <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md overflow-hidden">
            <form
              className="grid grid-cols-6 gap-2 p-2 h-auto"
              onSubmit={handleSubmit}
            >
              {/* Email Input (Optional) */}
              <div className="col-span-full">
                <input
                  type="email"
                  name="email"
                  className="user_dialog_input"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Department Select */}
              <div className="col-span-full">
                <select
                  name="department"
                  className="user_dialog_input"
                  hidden
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

              {/* Subject Select for OtoGas */}
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
                    <option value="Customer Experience">Customer Experience</option>
                  </select>
                </div>
              )}

              {/* Message Textarea */}
              <div className="col-span-full">
                <textarea
                  name="your_msg"
                  className="user_dialog_input"
                  placeholder="Your message"
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
                  disabled={loading} // Disable the button while sending
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full animate-spin mx-auto" />
                  ) : (
                    "Send Mail"
                  )}
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-red-500">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarConversionSection;
