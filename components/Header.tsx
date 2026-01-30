import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center py-12 px-4 text-center select-none">
      <div className="mb-4 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold to-neon-cyan rounded-lg blur opacity-25 animate-pulse"></div>
        <span className="relative px-4 py-1 bg-cyber-black rounded-full border border-royal-gold/30 text-royal-gold text-xs font-bold tracking-[0.3em] uppercase">
          Thien Master AI • Education Core
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 mb-6 drop-shadow-2xl">
        HỆ THỐNG TRA CỨU<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-white to-royal-gold">
          MÔN HỌC TOÀN DIỆN
        </span>
      </h1>
      
      <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light tracking-wide">
        Phân tích lộ trình từ Lớp 1 đến Tiến sĩ • Tối ưu hóa kiến thức đa ngành
      </p>
      
      <div className="w-32 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent mt-8 opacity-50"></div>
    </header>
  );
};

export default Header;