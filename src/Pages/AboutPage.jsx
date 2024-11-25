import React from "react";
import aboutBanner from "../assets/About-banner.png"; // Import the local image

function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-[#F8C8DC] to-white py-16">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="flex-1">
          <img
            src={aboutBanner} // Use the imported image
            alt="About Us"
            className="rounded-xl shadow-2xl w-full object-cover"
          />
        </div>
        {/* Right Text Section */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <span className="text-sm font-semibold text-[#6A0DAD] uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl font-extrabold text-[#6A0DAD] mt-3 leading-tight">
              Empowering Your Shopping Experience
            </h2>
          </div>
          <p className="text-[#6A0DAD]/80 text-lg leading-relaxed mb-6">
            Welcome to our e-commerce platform, where we combine innovation and
            convenience. Our mission is to deliver a seamless and enjoyable shopping
            experience tailored to your needs. With a diverse range of products and
            exceptional customer service, we aim to be your trusted destination for
            everything you need.
          </p>
          <p className="text-[#6A0DAD]/80 text-lg leading-relaxed">
            Whether you're exploring the latest trends or looking for everyday essentials,
            we have you covered. Our commitment to quality, sustainability, and community
            is at the heart of our operations. Join us in shaping the future of online
            shopping.
          </p>
          <button className="mt-8 bg-[#6A0DAD] text-white px-6 py-3 rounded-lg hover:bg-[#8E44AD] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
