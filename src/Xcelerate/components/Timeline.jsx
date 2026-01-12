import React from 'react';

const events = [
  {
    title: "Internal Hackathon",
    time: "FEB 13 | 10:00 - 18:00",
    desc: "Solve real-world fintech problems in this intense coding marathon. Build scalable solutions for the next gen.",
    icon: "💻",
    status: "LIVE",
    grid: "col-span-1 md:col-span-2 row-span-2", // Main feature
    type: "COMPETITION"
  },
  {
    title: "Case Study",
    time: "FEB 13 | 14:00",
    desc: "Analyze complex business scenarios.",
    icon: "📊",
    status: "OPEN",
    grid: "col-span-1",
    type: "ANALYSIS"
  },
  {
    title: "Wealth Sim",
    time: "FEB 14 | 11:00",
    desc: "Economic distribution dynamics.",
    icon: "🎲",
    status: "UPCOMING",
    grid: "col-span-1",
    type: "SIMULATION"
  },
  {
    title: "Finance Quiz",
    time: "FEB 14 | 15:00",
    desc: "Test your financial IQ nearby.",
    icon: "🧠",
    status: "REGISTRATION",
    grid: "col-span-1 md:col-span-2", // Wide bar
    type: "CHALLENGE"
  },
  {
    title: "Cultural Night",
    time: "FEB 14 | 19:00",
    desc: "Unwind and network.",
    icon: "🎭",
    status: "FUN",
    grid: "col-span-1 md:col-span-2",
    type: "SOCIAL"
  }
];

function Timeline() {
  return (
    <section className="py-24 bg-finance-dark-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-finance-green/30 pb-4">
            <div>
                 <span className="text-finance-green font-mono text-xs uppercase tracking-widest">
                    System Monitor
                 </span>
                <h2 className="text-4xl font-bold text-white mt-1">Event Log</h2>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-finance-green font-mono text-sm">STATUS: OPTIMAL</p>
                <p className="text-gray-500 text-xs">Uptime: 99.9%</p>
            </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {events.map((event, index) => (
                <div 
                    key={index} 
                    className={`${event.grid} bg-finance-black border border-white/10 p-6 relative group overflow-hidden hover:border-finance-green transitions-colors duration-300`}
                >
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-finance-green opacity-50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-finance-green opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-finance-green opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-finance-green opacity-50"></div>

                    {/* Content */}
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{event.icon}</span>
                        <span className="text-[10px] font-mono text-finance-green border border-finance-green px-2 py-0.5 rounded-sm bg-finance-green/10">
                            {event.status}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-finance-green transition-colors font-mono">
                        {event.title}
                    </h3>
                    
                    <p className="text-finance-green/70 font-mono text-xs mb-4 border-l border-finance-green/30 pl-2">
                        {event.time}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        {event.desc}
                    </p>

                    {/* Decorative Background Data */}
                    <div className="absolute -bottom-4 -right-4 text-[100px] font-bold text-white/5 font-mono select-none pointer-events-none">
                        0{index + 1}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
