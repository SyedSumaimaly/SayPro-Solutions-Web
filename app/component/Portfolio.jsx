"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "BLUE RIBBON TAXI",
        description:
            "A professional taxi service operating in the Chicago area. The website highlights reliable and safe transportation, including airport and business travel.",
        tags: ["React", "SQL"],
        type: "Dashboard",
        primary: true,
    },
    {
        title: "XFIRM",
        description:
            "A comprehensive financial management dashboard designed for tracking firm-wide performance metrics and client billing.",
        tags: ["React", "SQL"],
        type: "Dashboard",
        primary: false,
    },
    {
        title: "XFIRM",
        description:
            "An internal resource planning tool built to streamline project allocation and real-time team collaboration.",
        tags: ["React", "SQL"],
        type: "Dashboard",
        primary: false,
    },
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Portfolio</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* LEFT: Main Large Project Card */}
                    <div className="bg-[#005596] cursor-pointer rounded-[40px] overflow-hidden flex flex-col h-full border border-white/5 transition-transform hover:scale-[1.01] relative group">
                        <div className="h-64 bg-[#d1d5db] relative m-4 rounded-[30px] overflow-hidden">
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">React</span>
                                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">SQL</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Dashboard</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-8 pt-4 pb-12"> 
                            <h3 className="text-3xl font-extrabold mb-4 uppercase tracking-tighter">
                                {projects[0].title}
                            </h3>
                            <p className="text-blue-50/80 leading-relaxed text-base max-w-md">
                                {projects[0].description}
                            </p>
                        </div>

                        {/* Bottom Action Area */}
                        <div className="absolute bottom-6 right-8">
                            <div className="p-3 border border-white/20 rounded-full transition-all duration-300 group-hover:bg-white group-hover:border-white">
                                <ArrowUpRight className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-[#005596]" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Column with Small Project Cards */}
                    <div className="flex flex-col gap-4">
                        {projects.slice(1).map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-[#007acc] rounded-[40px] p-8 flex flex-col justify-between relative min-h-[280px] group transition-all hover:bg-[#008ae6] border border-white/5"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-extrabold uppercase tracking-tighter">
                                            {project.title}
                                        </h3>
                                        <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {project.type}
                                        </span>
                                    </div>

                                    <p className="text-blue-50/80 text-md leading-relaxed max-w-full mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Action Area */}
                                <div className="flex justify-end mt-4">
                                    <button className="p-3 border border-black/20 cursor-pointer rounded-full group-hover:bg-white/10 transition-all hover:scale-110">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}