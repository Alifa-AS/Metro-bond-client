import React from 'react';

const Services = () => {
    return (
        <div className="relative w-80 h-48 overflow-hidden rounded-xl shadow-lg group">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Sample"
          className="w-full h-full object-cover"
        />
      
        {/* Glass effect content appears on hover */}
        <div className="absolute bottom-0 left-0 w-full bg-black/10 backdrop-blur-md text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-xl">
          <h3 className="text-lg font-bold">Card Title</h3>
          <p className="text-sm">This text appears on hover from bottom.</p>
        </div>
      </div>
      


    );
};

export default Services;