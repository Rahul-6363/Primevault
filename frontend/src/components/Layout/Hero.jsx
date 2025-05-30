import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImg8 from "../../assets/hero image 1.png";
import heroImg6 from "../../assets/hero image 2.png";
import heroImg3 from "../../assets/hero image 3.png";
import heroImg4 from "../../assets/mug hero.png";


const heroImages = [heroImg8,heroImg6, heroImg3, heroImg4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); // Auto slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: currentIndex * window.innerWidth, behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <section className='relative overflow-hidden w-full' >
      <div
        ref={sliderRef}
        className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-[500px] md:h-[700px] lg:h-[850px]'
        style={{ scrollbarWidth: 'none' }}
      >
        {heroImages.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Hero ${index + 1}`} 
            className='w-full h-full object-cover flex-shrink-0 snap-center' 
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>
      {/* <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
            Vacation <br /> Ready
          </h1>
          <p className='text-sm tracking-tighter md:text-lg mb-6'>
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
            Shop Now
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
