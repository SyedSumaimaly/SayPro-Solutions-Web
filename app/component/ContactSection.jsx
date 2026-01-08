"use client";
import React from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden">
      {/* ANGLED BACKGROUND SHAPE 
         Matches the perspective look in image_2181c0.png
      */}
      <div 
        className="absolute inset-0 z-0 opacity-100"
        style={{
          background: "linear-gradient(94.52deg, #0A8AD9 5.6%, #043E62 85.06%)",
          clipPath: "polygon(0 0%, 100% 30%, 100% 85%, 0% 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT: Contact Form Card */}
          <div className="flex-1 w-full max-w-xl bg-black rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-center text-white mb-10">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-4">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#d1d5db] rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-4">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#d1d5db] rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-4">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-[#d1d5db] rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-4">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-[#d1d5db] rounded-[30px] px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex justify-center pt-4">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r cursor-pointer from-[#0A8AD9] to-[#043E62] text-white font-bold py-3 px-12 rounded-full transition-transform hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: Text and Contact Grid */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight leading-tight">
              Don't Hesitate To Contact Us
            </h2>
            <p className="text-blue-50/80 mb-12 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Ready to transform your business with innovative technology solutions? 
              Let's discuss your project and explore how we can help you achieve your goals.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-full py-4 px-6 flex items-center gap-4 border border-white/10">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Mail className="w-4 h-4 text-[#0A8AD9]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Email Us</p>
                    <p className="text-xs text-black font-semibold">info@sayprosolutions.com</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}