"use client";

import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact Us | Masjid E Khazra";
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 mt-4">
      <div className="w-full max-w-xl text-center mb-8 animate-fadeInUp">
        <h1 className="text-lg font-semibold text-gray-700">Masjid-E-Khazra</h1>
        <h2 className="font-bold text-4xl text-gray-900 mt-2">Contact Us</h2>
      </div>

      <div className="flex flex-col w-full max-w-lg justify-center text-center animate-fadeInUp">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Location</h2>
          <p className="text-gray-600">23-38 81st St, Flushing, NY 11370, United States</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Call Us</h2>
          <p className="text-gray-600">1718-737-1574</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg animate-fadeInUp">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Email</h2>
          <p className="text-gray-600">masjidkhazrany@gmail.com</p>
        </div>
      </div>

      <div className="w-full max-w-[900px] mx-auto mt-8 animate-fadeInUp">
        <div className="relative w-full h-[500px]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8341661250342!2d-73.88866279999999!3d40.765671999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f9e1cbec483%3A0x3cce00ac2b7019a8!2s23-38%2081st%20St%2C%20Flushing%2C%20NY%2011370!5e0!3m2!1sen!2sus!4v1722889423645!5m2!1sen!2sus"
            loading="lazy"
            title="Map of Masjid E Khazra"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
