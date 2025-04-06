import { useState, useEffect } from "react";

export default function Header() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <img
          src="/sketches/sketch1.png"
          alt="Campus Sketch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Updated Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-100 tracking-tight font-sans">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500 font-serif"
          >
            Sudo Stories
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
          Exploring Stories and Insights from the
          <span className="font-semibold text-blue-300"> BITS Goa </span>
          Community
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <a
            href="#latest"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full
                     hover:bg-white/20 transition-colors duration-300
                     border border-white/20 font-medium shadow-lg hover:shadow-xl"
          >
            Read Latest Stories
          </a>
        </div>
      </div>
    </header>
  );
}
