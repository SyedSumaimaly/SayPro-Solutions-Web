"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Service', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/space-earth.jpg"
          alt="Earth from space"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      </div>

      {/* Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-12 lg:px-20 ${
        scrolled ? 'bg-black border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-[110]">
          <button onClick={() => scrollToSection('home')} className="text-xl font-bold tracking-tight md:text-2xl">
            SayPro Solutions
          </button>

          {/* Desktop Links */}
          <div className="hidden space-x-8 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="group block lg:hidden focus:outline-none p-2 relative z-[120]"
            aria-label="Toggle Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-[90] flex flex-col items-center justify-center bg-black transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-10 text-center text-3xl font-bold">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => scrollToSection(link.id)} 
                className="hover:text-blue-400 transition-transform active:scale-95"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content Area */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center pt-32 pb-12">
        <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl md:text-7xl">
          Innovative Technology <br className="hidden sm:block" /> 
          Solutions for Your Business
        </h1>
        
        <p className="mt-8 max-w-2xl text-lg text-gray-300 md:text-xl lg:leading-relaxed">
          Empowering businesses with cutting-edge software development, 
          digital transformation, and comprehensive technology solutions 
          that drive growth and success.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="rounded-full bg-[#007acc] px-10 py-4 text-lg font-bold transition-all hover:bg-blue-500 hover:scale-105 active:scale-95"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}