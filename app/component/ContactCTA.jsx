"use client";
import React from "react";

export default function ContactCTA() {
  // Your specific requested color code
  const mainGradient = {
    background: "linear-gradient(94.52deg, #0A8AD9 5.6%, #043E62 85.06%)",
  };

  return (
    <section className="bg-black py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Pill-Shaped Container */}
        <div 
          style={mainGradient}
          className="rounded-[200px] md:rounded-[350px] py-12 px-8 md:px-20 text-center flex flex-col items-center justify-center border border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Start Your Project?
          </h2>
          
          <p className="text-blue-50/90 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Let's discuss your ideas and create something amazing together. 
            Our team is ready to turn your vision into reality.
          </p>

          <button className="bg-black cursor-pointer text-white px-10 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 border border-white/20">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}