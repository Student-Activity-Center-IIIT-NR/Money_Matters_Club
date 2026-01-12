import React from 'react';

function Footer() {
  return (
    <footer className="bg-finance-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
                Xcelerate <span className="text-finance-green">2.0</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
                The flagship financial conclave of IIIT Naya Raipur. Fostering financial literacy and leadership for the future.
            </p>
            <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                    <a key={social} href="#" className="w-10 h-10 rounded-full bg-finance-dark-gray flex items-center justify-center text-gray-400 hover:bg-finance-green hover:text-black transition-all">
                        {social[0]}
                    </a>
                ))}
            </div>
        </div>

        {/* Contact */}
        <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                    <strong className="text-white block">Utsav Garg</strong>
                    <span className="hover:text-finance-green">+91 99999 99999</span>
                </li>
                <li>
                    <strong className="text-white block">Gaurav Singh</strong>
                     <span className="hover:text-finance-green">+91 88888 88888</span>
                </li>
            </ul>
        </div>

        {/* Address */}
        <div>
            <h4 className="text-white font-bold mb-6">Location</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
                IIIT Naya Raipur,<br/>
                Plot No. 7, Sector 24,<br/>
                Near Purkhoti Muktangan,<br/>
                Atal Nagar – 493661,<br/>
                Chhattisgarh
            </p>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
        <p>&copy; 2026 Money Matters Club, IIIT Naya Raipur. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
