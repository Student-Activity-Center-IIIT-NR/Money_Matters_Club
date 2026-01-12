import React from 'react';

function Sponsors() {
  return (
    <section className="py-20 bg-finance-dark-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Our Partners</h2>

        <div className="space-y-12">
            
            {/* Title Sponsor */}
            <div>
                <p className="text-finance-green text-sm uppercase tracking-widest mb-6">Title Sponsor</p>
                <div className="flex justify-center">
                    <div className="w-64 h-32 bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 rounded-lg hover:border-finance-green/50 transition-colors">
                        [Logo Placeholder]
                    </div>
                </div>
            </div>

            {/* Other Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {['Platinum', 'Gold', 'Silver'].map((tier) => (
                     <div key={tier} className="flex flex-col items-center">
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">{tier} Sponsor</p>
                        <div className="w-48 h-24 bg-white/5 border border-white/10 flex items-center justify-center text-gray-600 rounded-lg hover:border-finance-green/30 transition-colors">
                            [Logo]
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
}

export default Sponsors;
