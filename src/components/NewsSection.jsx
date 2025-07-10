"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons
import Joy from "./Joy";

const NewsSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Example: Dynamically fetching image filenames
  const images = [
    { src: '/images/gallery/image_1.jpg', alt: 'Gallery Image 1' },
    { src: '/images/gallery/image_2.jpg', alt: 'Gallery Image 2' },
    { src: '/images/gallery/image_3.jpg', alt: 'Gallery Image 3' },
    { src: '/images/gallery/image_4.jpg', alt: 'Gallery Image 4' },
    { src: '/images/gallery/image_5.jpg', alt: 'Gallery Image 5' },
    { src: '/images/gallery/image_6.jpg', alt: 'Gallery Image 6' },
    { src: '/images/gallery/image_7.jpeg', alt: 'Gallery Image 7' },
    { src: '/images/gallery/image_8.jpeg', alt: 'Gallery Image 8' },
    { src: '/images/gallery/image_9.png', alt: 'Gallery Image 9' },
    { src: '/images/gallery/image_10.jpg', alt: 'Gallery Image 10' },
    { src: '/images/gallery/image_11.jpg', alt: 'Gallery Image 11' },
    { src: '/images/gallery/image_12.jpeg', alt: 'Gallery Image 12' },
    { src: '/images/gallery/image_13.jpg', alt: 'Gallery Image 13' },
    { src: '/images/gallery/image_14.jpg', alt: 'Gallery Image 14' },
    { src: '/images/gallery/image_15.jpeg', alt: 'Gallery Image 15' },
    { src: '/images/gallery/image_16.jpeg', alt: 'Gallery Image 16' },
    { src: '/images/gallery/image_17.jpeg', alt: 'Gallery Image 17' },
    { src: '/images/gallery/image_18.jpeg', alt: 'Gallery Image 18' },
   
    
    // Add as many images as you want here, you could fetch this dynamically from an API if needed
  ];

  const videos = [
    { src: "https://www.youtube.com/embed/EpX1OerLt9c", title: "Bailey Zimmerman - Rock and A Hard Place" },
    // More video links can be added here
  ];

  const openPreview = (index) => {
    setSelectedImageIndex(index);
  };

  const closePreview = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-protoblue min-h-[100vh]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Gallery Section */}
        <div className="col-span-full lg:col-span-5">
          <div className="container mx-auto p-2 flex flex-col h-full">
            <h3 className="text-lg text-gray-100 font-semibold lg:text-3xl">Gallery</h3>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4 flex-grow">
              {images.map((image, index) => (
                <div key={index} className="col-span-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={150}
                    className="h-28 w-full object-cover cursor-pointer"
                    onClick={() => openPreview(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="col-span-full lg:col-span-7">
          <div className="container mx-auto p-2 flex h-full">
            {videos.map((video, index) => (
              <iframe
                key={index}
                className="w-full"
                style={{ minHeight: "400px" }}
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePreview}
          role="dialog"
          aria-label="Image Preview"
        >
          <div
            className="relative bg-white p-4 rounded shadow-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closePreview} className="absolute top-4 right-4 text-red-500 text-lg">
              Close
            </button>

            <div className="flex items-center justify-between">
              {/* Left Scroll Icon */}
              <button
                onClick={showPreviousImage}
                className="absolute left-4 text-gray-500 hover:text-gray-700"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Previous Image"
              >
                <FaChevronLeft size={36} />
              </button>

              {/* Image Viewer */}
              <div className="flex justify-center w-full h-[500px] max-h-[500px] overflow-hidden">
                <Image
                  src={images[selectedImageIndex]?.src}
                  alt={images[selectedImageIndex]?.alt || "Selected Image"}
                  width={600}
                  height={500}
                  className="object-contain"
                />
              </div>

              {/* Right Scroll Icon */}
              <button
                onClick={showNextImage}
                className="absolute right-4 text-gray-500 hover:text-gray-700"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                aria-label="Next Image"
              >
                <FaChevronRight size={36} />
              </button>
            </div>
          </div>
        </div>
      )}
      <Joy />
    </div>
  );
};

export default NewsSection;
