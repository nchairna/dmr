'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Responsive spacing variables
  const spacing = {
    containerPadding: 'px-4 sm:px-6 lg:px-8',
    navHeight: 'h-20',
    logoSize: 'w-20 h-20 sm:w-20 sm:h-20',
    buttonPadding: 'px-6 py-2',
    menuSpacing: 'space-x-8',
    mobileMenuSpacing: 'space-y-1',
  };

  // Responsive text variables
  const typography = {
    navLinks: 'text-sm font-medium',
    mobileLinks: 'text-base font-medium',
    buttonText: 'text-sm font-medium',
  };

  // Hover effect variables
  const hoverEffects = {
    navLinkHover: 'hover:text-gray-900 relative after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#ED1B2F] after:transition-all after:duration-300 hover:after:w-3/4',
    mobileLinkHover: 'hover:text-gray-900 hover:border-l-4 hover:border-[#ED1B2F] hover:bg-gray-50',
  };

  // Responsive display variables
  const display = {
    desktopOnly: 'hidden md:flex',
    mobileOnly: 'md:hidden',
    flexCenter: 'flex items-center justify-center',
    flexBetween: 'flex justify-between items-center',
  };

  // Animation variables
  const animations = {
    logo: `transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`,
    navLinks: `transition-all duration-500 ease-out delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`,
    button: `transition-all duration-500 ease-out delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`,
    mobileMenu: `transition-all duration-300 ease-out`,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className={`max-w-7xl mx-auto ${spacing.containerPadding}`}>
        <div className={`${display.flexBetween} ${spacing.navHeight}`}>
          {/* Mobile menu button - Left side on mobile */}
          <div className={display.mobileOnly}>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ED1B2F]"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo - Left on desktop, centered on mobile */}
          <div className={`flex-shrink-0 flex items-center md:order-1 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none ${animations.logo}`}>
            <div className={`${spacing.logoSize} relative`}>
              <Image
                src="/assets/logo.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
                quality={90}
                sizes="80px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ID"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`${display.desktopOnly} items-center ${spacing.menuSpacing} md:order-2 ${animations.navLinks}`}>
            <a href="#" className={`text-gray-700 px-3 py-2 ${typography.navLinks} transition-all duration-300 ${hoverEffects.navLinkHover}`}>
              Home
            </a>
            <a href="#" className={`text-gray-700 px-3 py-2 ${typography.navLinks} transition-all duration-300 ${hoverEffects.navLinkHover}`}>
              Products
            </a>
            <a href="#" className={`text-gray-700 px-3 py-2 ${typography.navLinks} transition-all duration-300 ${hoverEffects.navLinkHover}`}>
              Career
            </a>
            <a href="#" className={`text-gray-700 px-3 py-2 ${typography.navLinks} transition-all duration-300 ${hoverEffects.navLinkHover}`}>
              Contact
            </a>
          </div>

          {/* Get a Quote Button - Desktop */}
          <div className={`${display.desktopOnly} md:order-3 ${animations.button}`}>
            <a href="https://wa.me/6281513181140" target="_blank" rel="noopener noreferrer" className={`bg-[#ED1B2F] hover:bg-white text-white hover:text-[#ED1B2F] border-2 border-[#ED1B2F] hover:border-[#ED1B2F] ${spacing.buttonPadding} rounded-full ${typography.buttonText} transition-all duration-300 inline-block hover:scale-105 hover:shadow-lg`}>
              Get a Quote
            </a>
          </div>

          {/* Empty div to balance mobile layout */}
          <div className={`${display.mobileOnly} w-10`}></div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={display.mobileOnly}>
          <div className={`px-2 pt-2 pb-3 ${spacing.mobileMenuSpacing} sm:px-3 bg-white border-t border-gray-100`}>
            <a href="#" className={`text-gray-700 block px-3 py-2 ${typography.mobileLinks} transition-all duration-300 ${hoverEffects.mobileLinkHover}`}>
              Home
            </a>
            <a href="#" className={`text-gray-700 block px-3 py-2 ${typography.mobileLinks} transition-all duration-300 ${hoverEffects.mobileLinkHover}`}>
              Products
            </a>
            <a href="#" className={`text-gray-700 block px-3 py-2 ${typography.mobileLinks} transition-all duration-300 ${hoverEffects.mobileLinkHover}`}>
              Career
            </a>
            <a href="#" className={`text-gray-700 block px-3 py-2 ${typography.mobileLinks} transition-all duration-300 ${hoverEffects.mobileLinkHover}`}>
              Contact
            </a>
            <div className="px-3 py-2">
              <a href="https://wa.me/6281513181140" target="_blank" rel="noopener noreferrer" className={`w-full bg-[#ED1B2F] hover:bg-white text-white hover:text-[#ED1B2F] border-2 border-[#ED1B2F] hover:border-[#ED1B2F] ${spacing.buttonPadding} rounded-full ${typography.buttonText} transition-all duration-300 inline-block text-center`}>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
