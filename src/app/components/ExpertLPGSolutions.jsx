"use client"; // Explicitly mark this as a client-side component

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
  const [status, setStatus] = useState(""); // For success or error messages
  const [loading, setLoading] = useState(false); // Loader state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [reviews.length]);

  // Form Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.subject || !formData.message) {
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
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          department: "cylinders", // This is the department for the Cylinders form
        }),
      });

      if (res.ok) {
        setStatus("Feedback submitted successfully!");
        setFormData({
          email: "",
          subject: "",
          message: "",
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
              {reviews[currentReview].title}
            </h2>
            <p className="text-base text-white mt-2">
              {reviews[currentReview].content}
            </p>
            <p className="mt-2 text-sm text-gray-400">
              - {reviews[currentReview].author}
            </p>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="col-span-1 lg:w-12 bg-protopink px-2 py-2 lg:[writing-mode:vertical-rl] flex items-center justify-center">
          <p className="text-2xl text-white text-center font-bold uppercase lg:rotate-180">
            Contact us
          </p>
        </div>

        {/* Form Section */}
        <div className="self-start col-span-full lg:col-span-5 h-full flex items-center justify-center">
          <div className="max-w-lg w-full h-full flex flex-col justify-center">
            <form
              className="grid grid-cols-6 gap-2 p-2 h-auto"
              onSubmit={handleSubmit}
            >
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={loading} // Disable the button during submission
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
              <p className="mt-4 text-center text-red-500">{status}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertLPGSolutions;
