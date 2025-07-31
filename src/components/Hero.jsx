import React, { useEffect, useState } from 'react';
import '../assents/css/main.css';

const texts = [
  "Explore the Railway Journey 🚂",
  "Book Your Tickets Easily 🎟️",
  "Discover New Destinations 🌍",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? texts[index].substring(0, prev.length - 1)
          : texts[index].substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === texts[index]) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="relative h-screen bg-hero bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Animated Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {displayText}
          <span className="blinking-cursor">|</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl">
          Plan your trips, book tickets, and discover new destinations with us.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 text-lg rounded bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105">
            Start Booking
          </button>
          <button className="px-6 py-3 text-lg rounded bg-transparent border-2 border-white hover:bg-white hover:text-black transition transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Scroll Down Link */}
        <div className="mt-12">
          <a href="#features" className="text-white text-lg animate-bounce">
            ↓ Scroll Down ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
