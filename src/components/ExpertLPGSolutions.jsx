"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function ExpertLPGSolutions() {
  const reviews = [
    {
      title: "Significant savings",
      content:
        "Proto Energy Ltd did the boiler conversion, installation of the LPG tank and all associated equipment. We also purchase LPG from Proto Energy. As a result of this conversion, our company is experiencing significant savings in fuel use, far cleaner stack emissions, and other savings associated with the change to LPG.",
      author: "Rolf Campbell - Managing Director Insta Products",
    },
    {
      title: "25% reduction in fuel consumption",
      content:
        "An LPG solution was provided by Proto Energy Ltd. From burner & procurement to installation and commissioning. We have observed a 25% reduction in fuel consumption, reduced heating time from 50 minutes to 20 minutes, lower stack temperature, no instances of pilferage, and many more benefits.",
      author: "Mr Arjun - Head of Maintenance Basco Products",
    },
    {
      title: "Reliable LPG supply",
      content:
        "Proto Energy carried out the project to our satisfaction within the agreed timelines. So far, we continue tapping technical support and reliable gas supply from them. We highly recommend them for a similar service to any interested party.",
      author: "Chairman – Blue Nile Rolling Mills",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.subject || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          department: "cylinders",
        }),
      });

      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({ email: "", subject: "", message: "" });
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
        {/* Review Section with Background */}
        <div className="relative col-span-full lg:col-span-6 h-64 lg:h-auto">
          <Image
            src="/images/pink_pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover bg-protoblue"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 py-8 z-10 text-white">
            <h2 className="text-lg text-protopink font-bold lg:text-2xl">
              {reviews[currentReview].title}
            </h2>
            <p className="mt-2 text-sm lg:text-base">{reviews[currentReview].content}</p>
            <p className="mt-3 text-sm text-gray-200">
              - {reviews[currentReview].author}
            </p>
          </div>
        </div>

        {/* Contact Us Label */}
        <div className="lg:w-12 bg-protopink px-2 py-2 lg:[writing-mode:vertical-rl] flex items-center justify-center">
          <p className="text-2xl text-white text-center font-bold uppercase lg:rotate-180">
            Contact us
          </p>
        </div>

        {/* Form Section */}
        <div className="col-span-full lg:col-span-5 flex items-center justify-center px-4 py-6">
          <div className="w-full max-w-lg bg-white shadow-md rounded-md p-4">
            <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-3">
              {/* Email */}
              <div className="col-span-full">
                <input
                  type="email"
                  name="email"
                  className="user_dialog_input"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject */}
              <div className="col-span-full">
                <select
                  name="subject"
                  className="user_dialog_input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="Car Conversion">Car Conversion</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div className="col-span-full">
                <textarea
                  name="message"
                  className="user_dialog_input"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit */}
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

              {/* Status */}
              {status && (
                <div className="col-span-full text-center text-sm text-red-500 mt-2">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertLPGSolutions;
