"use client";
import  { useEffect } from "react";

const PeopleHumJobs = () => {
  
  useEffect(() => {
    // Ensure this runs only on client-side
    if (typeof window !== "undefined") {
      // Cleanup existing script if any
      const existingScript = document.getElementById("peoplehum-jobs-script");
      if (existingScript) {
        existingScript.remove();
      }

      // Create a new script tag
      const script = document.createElement("script");
      script.id = "peoplehum-jobs-script";
      script.src = "https://jobs.peoplehum.com/widget.js"; // Example URL - update with actual URL
      script.async = true;

      // Append script to body or a specific container
      document.body.appendChild(script);

      // Optional Cleanup to prevent duplicate scripts
      return () => {
        script.remove();
      };
    }
  }, []);

  return (
    <div className="p-6 bg-gray-50 rounded-lg m-4">
      <h2 className="text-lg font-semibold text-protopink uppercase mb-4">
        Current Job Openings
      </h2>
      <div id="peoplehum-jobs-container"></div>
    </div>
  );
};

export default PeopleHumJobs;
