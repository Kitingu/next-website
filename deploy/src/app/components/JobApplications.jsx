"use client";
import  { useState } from "react";
import axios from "axios";

const JobApplications = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    email: "",
    phoneNumber: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const jobPositions = [
    "Security Guard",
    "Filling Supervisor",
    "Head of Payroll",
    "Janitor",
    "Driver",
    "Receptionist",
  ];

  // Handle form changes
  const handleChange = (e) => {
    if (e.target.name === "cv") {
      setFormData({ ...formData, cv: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Form validation
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full name is required.";
    if (!formData.position) tempErrors.position = "Please select a job position.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone number is required.";
    if (!formData.cv) tempErrors.cv = "CV upload is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("position", formData.position);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("cv", formData.cv);

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post("/api/submit-job-application", formDataToSend);
      setResponseMessage("Application submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMessage("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-8 bg-protoblue sm:pt-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Job List Section */}
        <div className="col-span-full lg:col-span-4">
          <div className="sm:max-w-xs sm:mx-auto w-full p-6 lg:px-14 lg:py-16">
            <dl>
              {jobPositions.map((position, index) => (
                <div key={index} className="py-3 border-t border-white first:pt-0 first:border-transparent">
                  <dt className="text-lg text-white font-semibold">{position.toUpperCase()}</dt>
                  <dd className="text-base text-white font-semibold">
                    <p>Nairobi | Full Time</p>
                    <p>{position === "Driver" ? "Logistics Department" : "Relevant Department"}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Job Application Form Section */}
        <div className="col-span-full bg-white lg:col-span-8">
          <div className="container mx-auto p-6">
            <div className="mt-6 max-w-2xl mx-auto">
              <h2 className="text-lg text-gray-700 font-bold text-center lg:text-4xl">
                Job Application
              </h2>

              {responseMessage && (
                <p className={`text-center mt-4 ${responseMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {responseMessage}
                </p>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                
                {/* Full Name */}
                <div className="col-span-full">
                  <label className="font-semibold">NAME*</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your Full Name"
                    className="py-2 user_dialog_input w-full"
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                {/* Position */}
                <div className="col-span-full">
                  <label className="font-semibold">POSITION*</label>
                  <select
                    name="position"
                    className="py-2 user_dialog_input w-full"
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      SELECT POSITION
                    </option>
                    {jobPositions.map((position, index) => (
                      <option key={index} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                  {errors.position && <p className="text-red-500">{errors.position}</p>}
                </div>

                {/* Email */}
                <div className="col-span-full">
                  <label className="font-semibold">EMAIL*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Valid Email"
                    className="py-2 user_dialog_input w-full"
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div className="col-span-full">
                  <label className="font-semibold">PHONE NUMBER*</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Valid Phone Number"
                    className="py-2 user_dialog_input w-full"
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                </div>

                {/* Upload CV */}
                <div className="col-span-full">
                  <label className="font-semibold">UPLOAD CV (PDF)*</label>
                  <input
                    type="file"
                    name="cv"
                    accept="application/pdf"
                    className="py-2 user_dialog_input w-full"
                    onChange={handleChange}
                  />
                  {errors.cv && <p className="text-red-500">{errors.cv}</p>}
                </div>

                {/* Submit Button */}
                <div className="col-span-full">
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplications;
