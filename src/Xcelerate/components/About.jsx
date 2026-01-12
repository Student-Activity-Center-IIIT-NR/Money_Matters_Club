import React from 'react';

function About() {
  return (
    <section className="py-24 bg-finance-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mission Control Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-finance-green/30">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-finance-green rounded-full animate-pulse"></div>
                <span className="text-finance-green font-mono text-xs uppercase tracking-widest">
                    Mission Control
                </span>
             </div>
             <span className="text-gray-500 font-mono text-xs">
                ID: XC-2026 // MMC-IIITNR
             </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Module 1: Identity (Large Header) */}
            <div className="lg:col-span-8 bg-finance-dark-gray border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-finance-green/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                    <span className="text-[10px] text-finance-green font-mono border border-finance-green px-2 py-1">SYS.MAIN</span>
                </div>
                
                <h2 className="text-5xl md:text-8xl font-bold text-white mb-2 tracking-tighter">
                    Xcelerate
                </h2>
                <div className="flex items-baseline gap-4">
                     <span className="text-4xl md:text-6xl font-light text-gray-500">2.0</span>
                     <span className="h-px flex-grow bg-finance-green/30"></span>
                     <span className="text-finance-green font-mono text-sm uppercase">Flagship Conclave</span>
                </div>
            </div>

            {/* Module 2: Status Panel (Stats) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <div className="bg-finance-black border border-finance-green/30 p-6 flex flex-col justify-between hover:bg-finance-green/5 transition-colors">
                    <span className="text-xs text-gray-400 font-mono uppercase">Prize Pool</span>
                    <span className="text-3xl font-bold text-white">₹50k<span className="text-finance-green">+</span></span>
                </div>
                 <div className="bg-finance-black border border-white/10 p-6 flex flex-col justify-between hover:border-finance-green/30 transition-colors">
                    <span className="text-xs text-gray-400 font-mono uppercase">Footfall</span>
                    <span className="text-3xl font-bold text-white">500<span className="text-finance-green">+</span></span>
                </div>
                 <div className="bg-finance-black border border-white/10 p-6 flex flex-col justify-between hover:border-finance-green/30 transition-colors">
                    <span className="text-xs text-gray-400 font-mono uppercase">Speakers</span>
                    <span className="text-3xl font-bold text-white">10<span className="text-finance-green">+</span></span>
                </div>
                 <div className="bg-finance-black border border-white/10 p-6 flex flex-col justify-between hover:border-finance-green/30 transition-colors">
                    <span className="text-xs text-gray-400 font-mono uppercase">Events</span>
                    <span className="text-3xl font-bold text-white">05</span>
                </div>
            </div>

            {/* Module 3: Data Bank (Description) */}
            <div className="lg:col-span-12 bg-finance-black border-t border-b border-white/10 py-12 md:px-12 relative flex flex-col md:flex-row gap-12 items-center">
                 {/* Decorative Binary/Code Background */}
                 <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden font-mono text-[10px] leading-tight text-finance-green p-4">
                    {Array(20).fill("01001000 01000101 01001100 01001100 01001111 ").join(" ")}
                 </div>

                 <div className="relative z-10 md:w-1/3">
                    <h3 className="text-2xl font-bold text-white mb-2">About The Event</h3>
                    <p className="text-finance-green font-mono text-sm">/// ACCESSING ARCHIVES...</p>
                 </div>
                 
                 <div className="relative z-10 md:w-2/3 border-l-2 border-finance-green pl-6 md:pl-12">
                     <p className="text-lg text-gray-300 leading-relaxed font-light">
                        Xcelerate is the premier financial conclave of the <strong className="text-white">Money Matters Club</strong> at IIIT Naya Raipur. 
                        Designed to bridge the gap between academic theory and market reality, it simulates high-stakes financial environments 
                        through intense competitions, trading simulations, and policy debates.
                     </p>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default About;
