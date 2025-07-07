'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LandingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  // Responsive spacing variables
  const spacing = {
    sectionPadding: 'px-4 py-16 sm:px-6 lg:px-8 lg:py-18',
    containerSpacing: 'max-w-7xl mx-auto',
    gridGap: 'gap-8 lg:gap-10',
    textSpacing: 'space-y-6',
    buttonMargin: 'mt-8',
  };

  // Typography variables
  const typography = {
    mainHeading: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black',
    subHeading: 'text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed',
    buttonText: 'text-sm sm:text-base font-medium',
  };

  // Layout variables
  const layout = {
    // Mobile: single column, Desktop: two columns
    container: 'grid grid-cols-1 lg:grid-cols-2 items-center',
    // Mobile: text first, Desktop: text on right
    textColumn: 'order-1 lg:order-2',
    // Mobile: image second, Desktop: image on left  
    imageColumn: 'order-2 lg:order-2',
    imageContainer: 'relative w-full h-64 sm:h-80 lg:h-180',
  };

  // Mobile-specific responsive variables
  const mobile = {
    // Center alignment for mobile
    textAlign: 'text-center lg:text-left',
    buttonAlign: 'flex justify-center lg:justify-start',
    // Mobile layout order
    mobileOrder: 'order-1',
    mobileImageOrder: 'order-2', 
    mobileButtonOrder: 'order-3',
  };

  // Color variables
  const colors = {
    highlight: 'text-[#ED1B2F]',
    button: 'bg-[#ED1B2F] hover:bg-[#d1172a]',
    buttonText: 'text-white',
  };

  // Animation variables
  const animations = {
    heading: `transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`,
    subheading: `transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`,
    button: `transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`,
    image: `transition-all duration-800 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`,
  };

  return (
    <section ref={sectionRef} className={`bg-white ${spacing.sectionPadding}`}>
      <div className={spacing.containerSpacing}>
        <div className={`${layout.container} ${spacing.gridGap}`}>
          {/* Text Content */}
          <div className={`${layout.textColumn} ${spacing.textSpacing}`}>
            <div className={mobile.textAlign}>
              <h1 className={`${typography.mainHeading} ${animations.heading}`}>
                Manufacturing Products,<br />
                Preserving <span className={colors.highlight}>Quality.</span>
              </h1>
              
              <p className={`${typography.subHeading} mt-6 ${animations.subheading}`}>
                From Bags, straps, to cups, Dunia Mega Raya fulfills your Business needs through reliable quality and satisfaction.
              </p>
            </div>
            
            {/* Button - Hidden on mobile, shown on desktop */}
            <div className={`${spacing.buttonMargin} ${mobile.buttonAlign} hidden lg:flex ${animations.button}`}>
              <a href="https://wa.me/6281513181140" target="_blank" rel="noopener noreferrer" className={`${colors.button} hover:bg-white ${colors.buttonText} hover:text-[#ED1B2F] border-2 border-[#ED1B2F] hover:border-[#ED1B2F] px-8 py-3 rounded-full ${typography.buttonText} transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block`}>
                Get a Quote
              </a>
            </div>
          </div>

          {/* Image - Hidden on mobile, visible on desktop */}
          <div className={`${layout.imageColumn} hidden lg:block ${animations.image}`}>
            <div className={layout.imageContainer}>
              <Image
                src="/assets/handbag.png"
                alt="Dunia Mega Raya Products"
                fill
                className="object-contain"
                priority
                quality={85}
                sizes="(max-width: 1024px) 0px, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ID"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Button - Outside grid, centered, only visible on mobile */}
        <div className={`${mobile.buttonAlign} mt-8 lg:hidden ${animations.button}`}>
          <a href="https://wa.me/6281513181140" target="_blank" rel="noopener noreferrer" className={`${colors.button} hover:bg-white ${colors.buttonText} hover:text-[#ED1B2F] border-2 border-[#ED1B2F] hover:border-[#ED1B2F] px-8 py-3 rounded-full ${typography.buttonText} transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block`}>
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
