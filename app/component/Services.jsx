"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we deliver scalable and robust solutions.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop", 
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we deliver scalable and robust solutions.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop", 
  },
];

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
   <section className="bg-black text-white py-8 md:py-4  px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16">
          Services
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div 
                  className="flex-[0_0_100%] min-w-0 px-2 md:px-4" 
                  key={index}
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-[550px] md:h-[500px] lg:h-[550px]">
                    
                    {/* LEFT COLUMN: Text Content */}
                    <div className="flex-1 bg-gradient-to-b from-blue-600 to-blue-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl flex flex-col justify-center">
                      <Code2 className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-white" />
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                        {service.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-100 mb-6 md:mb-8 max-w-sm">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-sm text-blue-50">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT COLUMN: Image Content */}
                    <div 
                      className="flex-1 rounded-3xl bg-cover bg-center relative overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-full"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 md:bg-[#0a1128]/60" />
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative z-10 leading-tight px-6 drop-shadow-2xl">
                        {service.title.split(' ').map((word, i) => (
                          <span key={i} className="block">{word}</span>
                        ))}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8 md:mt-12 px-4">
            <button 
              onClick={scrollPrev} 
              className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full md:bg-transparent"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
            </button>
            <button 
              onClick={scrollNext} 
              className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full md:bg-transparent"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}