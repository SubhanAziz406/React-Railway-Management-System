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
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? texts[index].substring(0, prev.length - 1) : texts[index].substring(0, prev.length + 1)
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
    <div className="relative h-[600px] bg-hero bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{displayText}|</h1>
        <p className="mt-4 text-lg">Plan your trips, book tickets, and discover new destinations with us.</p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105">
            Start Booking
          </button>
          <button className="px-6 py-2 rounded bg-transparent border-2 border-white hover:bg-white hover:text-black transition transform hover:scale-105">
            Learn More
          </button>
        </div>
        <div className="mt-12">
          <a href="#features" className="text-white animate-bounce">
            ↓ Scroll Down ↓
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
