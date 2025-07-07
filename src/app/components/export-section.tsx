'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ExportSection() {
  const [countriesCount, setCountriesCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Country dots data with positions (percentage-based for responsiveness)
  // To adjust dot positions: modify the left (0%-100%) and top (0%-100%) values
  // left: horizontal position (0% = far left, 100% = far right)
  // top: vertical position (0% = top, 100% = bottom)
  const countryDots = [
    { name: 'UK', left: '48%', top: '27%' },
    { name: 'Belgium', left: '50%', top: '31%' },
    { name: 'Spain', left: '46%', top: '44%' },
    { name: 'New Zealand', left: '81%', top: '75%' },
    { name: 'USA', left: '30%', top: '42%' },
    { name: 'Gabon', left: '49%', top: '65%' },
    { name: 'Tigana', left: '45%', top: '58%' },
    { name: 'Somalia', left: '54%', top: '59%' },
  ];

  // Animation function for counting up
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    setValue: (value: number) => void
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      setValue(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counting animations
          animateValue(0, 8, 2000, setCountriesCount);
          animateValue(0, 1000, 2500, setClientsCount);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Responsive spacing variables
  const spacing = {
    sectionPadding: 'px-8 py-16 sm:px-6 lg:px-8 lg:py-16',
    containerSpacing: 'max-w-7xl mx-auto relative',
    contentSpacing: 'space-y-8 sm:space-y-12',
  };

  // Typography variables
  const typography = {
    mainHeading: 'text-2xl sm:text-3xl lg:text-3xl font-semibold text-black text-center lg:text-left',
    statNumber: 'text-4xl sm:text-5xl lg:text-7xl font-bold italic text-[#ED1B2F]',
    statLabel: 'text-xl sm:text-2xl lg:text-5xl font-semibold text-black text-right',
    buttonText: 'text-sm sm:text-base font-medium',
  };

  // Layout variables
  const layout = {
    mapContainer: 'relative w-full h-64 sm:h-80 lg:h-160 mb-8 bg-gray-100',
    statItem: 'text-center',
    statNumber: 'w-24 sm:w-32 lg:w-48 mx-auto', // Fixed width to prevent layout shift
    buttonContainer: 'flex justify-center mt-8',
  };

  // Color variables
  const colors = {
    background: 'bg-white',
    button: 'bg-[#ED1B2F] hover:bg-[#d1172a]',
    buttonText: 'text-white',
    dot: 'bg-[#ED1B2F]',
    dotHover: 'hover:bg-[#d1172a]',
  };

  // Dot styling variables
  const dotStyles = {
    container: 'absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-30',
    solidDot: 'w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-[#ED1B2F] relative z-10',
    pulseRing: 'absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[#ED1B2F] transform -translate-x-1/2 -translate-y-1/2 animate-ping opacity-35',
    tooltip: 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-md rounded whitespace-nowrap opacity-0 transition-opacity duration-200',
    tooltipVisible: 'opacity-100',
  };

  // Animation variables
  const animations = {
    title: `transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
    stats: `transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'}`,
    button: `transition-all duration-700 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
    map: `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
  };

  return (
    <section ref={sectionRef} className={`${colors.background} ${spacing.sectionPadding}`}>
      <div className={spacing.containerSpacing}>
        {/* Main Heading */}
        <h2 className={`${typography.mainHeading} mb-8 ${animations.title}`}>
          We export to
        </h2>

        {/* Map Background with Overlay Content */}
        <div className={`${layout.mapContainer} ${animations.map}`}>
          {/* World Map Background */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/assets/map.png"
              alt="World Map"
              fill
              className="object-contain opacity-90"
              priority
              quality={75}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ID"
              onError={(e) => {
                console.log('Image failed to load:', e);
              }}
              onLoad={() => {
                console.log('Image loaded successfully');
              }}
            />
            {/* Fallback pattern if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-green-100 to-blue-100 opacity-30"></div>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 z-20">
            {/* Countries Stat - Top Right */}
            <div className={`absolute top-8 right-8 sm:top-6 sm:right-6 lg:top-10 lg:right-2 ${animations.stats}`}>
              <div className={layout.statItem}>
                <div className={`${typography.statNumber} ${layout.statNumber}`}>
                  {countriesCount}
                </div>
                <div className={typography.statLabel}>
                  Countries
                </div>
              </div>
            </div>

            {/* Clients Stat - Bottom Left */}
            <div className={`absolute bottom-4 left-8 sm:bottom-6 sm:left-6 lg:bottom-36 lg:left-11 ${animations.stats}`}>
              <div className={layout.statItem}>
                <div className={`${typography.statNumber} ${layout.statNumber}`}>
                  {clientsCount}+
                </div>
                <div className={typography.statLabel}>
                  Clients
                </div>
              </div>
            </div>

            {/* Country Dots */}
            {countryDots
              .map((country, originalIndex) => ({ ...country, originalIndex }))
              .sort((a, b) => parseFloat(a.left) - parseFloat(b.left)) // Sort by left position
              .map((country, sortedIndex) => (
              <div
                key={country.name}
                className={dotStyles.container}
                style={{ 
                  left: country.left, 
                  top: country.top,
                }}
                onMouseEnter={() => setHoveredDot(country.name)}
                onMouseLeave={() => setHoveredDot(null)}
              >
                {/* Pulsing Ring */}
                <div 
                  className={dotStyles.pulseRing}
                  style={{ animationDelay: `${sortedIndex * 1}s` }}
                ></div>
                
                {/* Solid Center Dot */}
                <div className={dotStyles.solidDot}></div>
                
                {/* Tooltip */}
                <div 
                  className={`${dotStyles.tooltip} ${hoveredDot === country.name ? dotStyles.tooltipVisible : ''}`}
                >
                  {country.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className={`${layout.buttonContainer} ${animations.button}`}>
          <button className={`${colors.button} hover:bg-white ${colors.buttonText} hover:text-[#ED1B2F] border-2 border-[#ED1B2F] hover:border-[#ED1B2F] px-8 py-3 rounded-full ${typography.buttonText} transition-all duration-300 hover:shadow-lg hover:scale-105`}>
            See our exports
          </button>
        </div>
      </div>
    </section>
  );
}
