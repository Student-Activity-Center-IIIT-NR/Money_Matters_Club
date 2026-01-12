import React from 'react';
import OP_PORTRAIT from "../../Gallery/PORTRAIT.webp";
import OP_CROWD from "../../Gallery/CROWD.webp";
import OP_CEREMONIAL from "../../Gallery/CEREMONIAL.jpg";

function ChiefGuest() {
  return (
    <section className="py-24 bg-finance-black relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-finance-green/5 skew-x-12 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-finance-green/5 -skew-x-12 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
             <span className="inline-block px-3 py-1 border border-finance-green text-finance-green text-xs uppercase tracking-[0.2em] mb-4">
                Keynote Speaker
             </span>
             <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none">
                Honoring <br/>
                <span className="text-finance-green">Excellence</span>
             </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Photos Grid (Left Side - Swap for visual balance) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            {/* Main Portrait - Large */}
            <div className="col-span-2 md:col-span-1 row-span-2 relative group overflow-hidden border border-white/10 rounded-sm h-[500px]">
                 <img 
                    src={OP_PORTRAIT} 
                    alt="Shri O.P. Choudhary Portrait" 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-finance-black via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-4 left-4 border-l-2 border-finance-green pl-3 z-10">
                    <p className="text-white font-bold text-lg">Shri O.P. Choudhary</p>
                    <p className="text-gray-400 text-xs uppercase">Finance Minister</p>
                 </div>
            </div>

            {/* Action Shot 1 */}
             <div className="relative group overflow-hidden border border-white/10 rounded-sm h-[240px]">
                 <img 
                    src={OP_CROWD} 
                    alt="Addressing the Crowd" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-finance-green/10 group-hover:bg-transparent transition-colors"></div>
            </div>

             {/* Action Shot 2 */}
             <div className="relative group overflow-hidden border border-white/10 rounded-sm h-[240px]">
                 <img 
                    src={OP_CEREMONIAL} 
                    alt="Ceremonial Event" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                  <div className="absolute inset-0 bg-finance-green/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-8">
            <h3 className="text-3xl font-bold text-white mb-2">Shri O.P. Choudhary</h3>
            <p className="text-xl text-finance-green mb-8">Hon'ble Finance Minister, Govt. of Chhattisgarh</p>
            
            <div className="space-y-6 text-gray-400 leading-relaxed font-light">
                <p>
                    A visionary leader and administrator, Shri O.P. Choudhary brings a wealth of experience in governance and public policy. His presence at Xcelerate 2.0 underscores the event's commitment to bridging the gap between academic discourse and real-world financial administration.
                </p>
                <p>
                    As the Chief Guest, he will inaugurate the conclave and share insights on the economic roadmap of Chhattisgarh, inspiring the next generation of financial leaders.
                </p>
            </div>

            {/* Quote or Highlight */}
            <div className="mt-10 p-6 border border-finance-green/20 bg-finance-green/5 relative">
                <span className="absolute -top-3 left-4 text-4xl text-finance-green font-serif">"</span>
                <p className="text-gray-300 italic">
                    Policies are the bedrock of economic growth. Understanding them is the first step towards mastering finance.
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ChiefGuest;
