import React from 'react';

// Using consistent placeholders with varied sizes for masonry effect
const photos = [
    { id: 1, size: 'large', type: 'vertical' },
    { id: 2, size: 'small', type: 'horizontal' },
    { id: 3, size: 'medium', type: 'horizontal' },
    { id: 4, size: 'large', type: 'vertical' },
    { id: 5, size: 'small', type: 'horizontal' },
    { id: 6, size: 'medium', type: 'square' },
    { id: 7, size: 'small', type: 'horizontal' }
];

function Gallery() {
  return (
    <section className="py-24 bg-finance-dark-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
            <span className="inline-block px-3 py-1 border border-finance-green text-finance-green text-xs uppercase tracking-[0.2em] mb-4">
                Memories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-none">
                Past <span className="text-finance-green">Highlights</span>
            </h2>
        </div>
        <p className="text-gray-400 max-w-md text-right md:text-left">
            Glimpses from previous years featuring industry leaders, intense competitions, and the vibrant campus energy.
        </p>
      </div>

      {/* Masonry Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
             <div 
                key={photo.id} 
                className="relative group overflow-hidden break-inside-avoid rounded-sm border border-white/5 hover:border-finance-green/50 transition-all duration-300 transform hover:-translate-y-2"
                style={{ 
                    // Simulating aspect ratios
                     aspectRatio: photo.type === 'vertical' ? '3/4' : photo.type === 'square' ? '1/1' : '16/9'
                }}
             >
                {/* Image Placeholder */}
                <div 
                    className="absolute inset-0 bg-gray-800 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop&sig=${photo.id}')` }}
                ></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-finance-green/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-black font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2 transform scale-90 group-hover:scale-100 transition-transform">
                        View Focus
                    </span>
                </div>
             </div>
          ))}
      </div>
    </section>
  );
}

export default Gallery;
