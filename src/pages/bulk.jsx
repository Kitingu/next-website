"use client"; // Explicitly mark this as a client-side component

import { useState, useEffect } from "react";
import Image from "next/image";

function Reviews() {
  const reviews = [
    {
      title: "Significant savings",
      content:
        "Proto Energy Ltd did the boiler conversion, installation of the LPG tank, and all associated equipment. As a result of this conversion, our company is experiencing significant savings in fuel use, cleaner stack emissions, and other operational savings.",
      author: "Rolf Campbell - Managing Director Insta Products",
    },
    {
      title: "25% reduction in fuel consumption",
      content:
        "An LPG solution was provided by Proto Energy Ltd. From burner procurement to installation and commissioning, we observed a 25% reduction in fuel consumption, reduced heating time, lower stack temperature, and reduced pilferage.",
      author: "Mr. Arjun - Head of Maintenance Basco Products",
    },
    {
      title: "Reliable LPG supply",
      content:
        "Proto Energy carried out the project to our satisfaction within the agreed timelines. We continue to benefit from reliable gas supply and technical support. We highly recommend them for similar projects.",
      author: "Chairman – Blue Nile Rolling Mills",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({ email: "", subject: "", your_msg: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject || !formData.your_msg) {
      setStatus("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.your_msg,
          department: "bulk",
        }),
      });

      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({ email: "", subject: "", your_msg: "" });
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
    <div className="min-h-[270px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Section */}
        <div className="relative h-64 lg:h-auto col-span-full lg:col-span-6">
          <Image
            src="/images/pink_pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover bg-protoblue"
          />
          <div className="absolute inset-0 bg-protoblue/60 flex flex-col justify-center items-center text-center p-6 z-10">
            <h2 className="text-lg text-protopink font-bold lg:text-2xl">
              {reviews[currentReview].title}
            </h2>
            <p className="text-base text-white mt-2 text-justify">
              {reviews[currentReview].content}
            </p>
            <p className="mt-2 text-sm text-gray-300">
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

        {/* Right Section - Form */}
        <div className="col-span-full lg:col-span-5 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-4">
            <form className="grid grid-cols-6 gap-2" onSubmit={handleSubmit}>
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
                  name="your_msg"
                  className="user_dialog_input"
                  placeholder="Your message"
                  rows={4}
                  value={formData.your_msg}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-full">
                <button type="submit" className="w-full btn btn-primary" disabled={loading}>
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full animate-spin mx-auto" />
                  ) : (
                    "Send Mail"
                  )}
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <p className="col-span-full text-center mt-2 text-red-500">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
