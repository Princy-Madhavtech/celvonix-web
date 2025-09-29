import React from 'react';
import HeaderBg from '../../images/headerbg3.png';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div
      className="relative text-white flex items-center justify-center bg-cover bg-center min-h-[50vh]"
      style={{ backgroundImage: `url(${HeaderBg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Bottom gradient shadow */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h1>
        <div className="mt-2 text-sm md:text-base flex items-center justify-center gap-2 text-gray-200">
          <span>Home</span>
          <span>&gt;</span>
          <span className="font-semibold">{breadcrumb || title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
