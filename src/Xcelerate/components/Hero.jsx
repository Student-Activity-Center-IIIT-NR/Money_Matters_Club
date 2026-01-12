import React from 'react';
import HEROIMAGE from "../../Gallery/WHOLETEAM.jpg"
function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-all duration-700"
        style={{ backgroundImage: `url(${HEROIMAGE})` }}
      ></div>
      
      {/* Overlay Gradient - Darker for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-finance-black/90 via-finance-black/70 to-finance-black"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h2 className="text-finance-green uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fade-in-up font-bold drop-shadow-md">
          IIIT Naya Raipur Presents
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up delay-100 font-sans tracking-tight drop-shadow-xl">
          Xcelerate <span className="text-finance-green">2.0</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 italic animate-fade-in-up delay-200">
          "Practical Finance for Real-World Impact"
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 text-gray-400 font-mono text-sm uppercase tracking-widest animate-fade-in-up delay-300">
          <div className="flex items-center gap-2">
            <span className="text-finance-green">📅</span> 13-14 February 2026
          </div>
          <div className="flex items-center gap-2">
            <span className="text-finance-green">📍</span> Hybrid Mode
          </div>
        </div>

        <button className="px-8 py-3 bg-finance-green text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-fade-in-up delay-400">
          Register Now
        </button>
      </div>
      
      {/* Scroll Indicator */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-finance-green to-transparent"></div>
      </div>
    </div>
  );
}

export default Hero;
