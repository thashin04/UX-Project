import React, { useState, useEffect } from 'react';
import '../index.css';
import landvid from '../images/landvid.mp4';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";

const Landing = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set your breakpoint here (768px for tablets and smaller)
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for resize events

    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup listener on unmount
  }, []);

  return (
    <div className="flex flex-col pt-12 pb-12 items-center lg:flex-row lg:w-3/4 mx-auto mt-8 gap-8">
      <div className="rounded-lg relative w-1/2 sm:w-5/12 lg:w-5/12">
        <video className='rounded-[20px]' controls autoPlay loop muted>
          <source src={landvid} type="video/mp4" />
        </video>
      </div>

      <div className="text-[#E0C9AC] lg:px-12 sm:px-8 space-y-8 flex flex-col items-center lg:items-start pt-0">
        {isSmallScreen ? (
          <>
            <h1 className="pb-8 gabarito-header text-center lg:text-left text-5xl font-bold">OUR STORY</h1>
            <p className="dongle-regular max-w-md text-center lg:text-left">
              Capistrano Distillery has been crafting Lambanog, a traditional Filipino distilled palm liquor, since 1983. Founded by Ireneo A. Capistrano, a chemical engineer, the distillery grew under the guidance of his family and gained recognition in the industry. Today, Capistrano Distillery continues to uphold its legacy, and in 2024, Quezon lambanog was named the 2nd best spirit in the world by TasteAtlas.com, bringing pride to the Philippines.
            </p>
          </>
        ) : (
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="pb-8 gabarito-header text-center lg:text-left text-5xl font-bold">OUR STORY</h1>
            <p className="dongle-regular max-w-md text-center lg:text-left">
              Capistrano Distillery has been crafting Lambanog, a traditional Filipino distilled palm liquor, since 1983. Founded by Ireneo A. Capistrano, a chemical engineer, the distillery grew under the guidance of his family and gained recognition in the industry. Today, Capistrano Distillery continues to uphold its legacy, and in 2024, Quezon lambanog was named the 2nd best spirit in the world by TasteAtlas.com, bringing pride to the Philippines.
            </p>
          </ScrollAnimation>
        )}
        <button className="duration-300 text-[#E0C9AC] gabarito-regular border border-[#E0C9AC] py-2 px-4 rounded-md hover:bg-[#E0C9AC] hover:text-[#3F3D35]">
          LEARN MORE →
        </button>
      </div>
    </div>
  );
};

export default Landing;
