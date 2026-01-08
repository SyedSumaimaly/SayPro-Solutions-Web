"use client";
import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00AEEF] tracking-tight">
            About
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            <p>
              <span className="font-bold text-white">SayPro Solutions</span> is a leading technology 
              company specializing in innovative software development, digital transformation, 
              and comprehensive business solutions. With years of experience in the industry, 
              we help businesses of all sizes leverage technology to achieve their goals 
              and stay competitive in today's digital landscape.
            </p>
            
            <p>
              Our team of expert developers, consultants, and digital strategists work 
              collaboratively to deliver custom solutions that drive growth, improve 
              efficiency, and create lasting value for our clients across various industries.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Image with Rounded Corners */}
        <div className="flex-1 relative w-full aspect-square max-w-[550px]">
          <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/code-laptop.jpg" // Replace with your actual image path
              alt="Programming code on a laptop screen"
              fill
              className="object-cover object-center grayscale-[20%] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}