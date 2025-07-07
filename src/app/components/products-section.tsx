'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProductsSection() {
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
  // Products data - easy to update images and titles
  const products = [
    {
      id: 1,
      title: 'hdpe / lldpe bags',
      image: '/assets/product1.png', // Replace with your actual image
      alt: 'hdpe / lldpe bags  on roll (aka garbage bags)'
    },
    {
      id: 2,
      title: 'hdpe fruit bag', 
      image: '/assets/product2.png', // Replace with your actual image
      alt: 'hdpe fruit bag'
    },
    {
      id: 3,
      title: 'pp stapping band',
      image: '/assets/product3.png', // Replace with your actual image
      alt: 'pp stapping band'
    },
    {
      id: 4,
      title: 'pp plastic strings',
      image: '/assets/product4.png', // Replace with your actual image
      alt: 'pp plastic strings'
    }
  ];

  // Responsive spacing variables
  const spacing = {
    sectionPadding: 'px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-24',
    containerSpacing: 'max-w-7xl mx-auto',
    gridGap: 'gap-3 sm:gap-6 lg:gap-8',
    cardSpacing: 'space-y-4',
  };

  // Typography variables
  const typography = {
    sectionTitle: 'text-2xl sm:text-3xl lg:text-3xl font-semibold text-black text-center lg:text-left',
    cardTitle: 'text-sm sm:text-base lg:text-lg font-medium text-black text-center leading-tight',
  };

  // Layout variables
  const layout = {
    // Mobile: 2 cols, Small: 2 cols, Large: 4 cols
    gridContainer: 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
    cardContainer: 'flex flex-col items-center justify-center',
    imageContainer: 'relative w-full h-28 sm:h-36 lg:h-42 mb-3 sm:mb-4 overflow-hidden rounded-lg',
  };

  // Color variables
  const colors = {
    background: 'bg-white',
    button: 'bg-white border-1 border-[#ED1B2F] text-[#ED1B2F] hover:bg-[#ED1B2F] hover:text-white',
  };

  // Card styling variables
  const cardStyles = {
    wrapper: 'group cursor-pointer transition-all duration-300 rounded-lg p-2 sm:p-4 h-full flex flex-col justify-between',
    image: 'object-contain group-hover:scale-105 transition-transform duration-300',
    button: 'px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 mt-3 sm:mt-4 w-full sm:w-auto',
  };

  // Animation variables
  const animations = {
    title: `transition-all duration-700 delay-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`,
    card: (index: number) => `transition-all duration-700 ease-out delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`,
  };

  return (
    <section ref={sectionRef} className={`${colors.background} ${spacing.sectionPadding}`}>
      <div className={spacing.containerSpacing}>
        {/* Section Title */}
        <div className="mb-8 sm:mb-12">
          <h2 className={`${typography.sectionTitle} ${animations.title}`}>
            Our Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className={`${layout.gridContainer} ${spacing.gridGap}`}>
          {products.map((product) => (
            <div key={product.id} className={`${layout.cardContainer} ${animations.card(product.id - 1)}`}>
              {/* Product Card */}
              <div className={`${cardStyles.wrapper}`}>
                {/* Product Image */}
                <div className={layout.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className={cardStyles.image}
                    priority={product.id <= 2} // Prioritize first 2 images
                    quality={85}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli2ID"
                  />
                </div>

                {/* Product Title */}
                <h3 className={typography.cardTitle}>
                  {product.title}
                </h3>

                {/* Get a Quote Button */}
                <a 
                  href="https://wa.me/6281513181140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardStyles.button} ${colors.button} inline-block text-center`}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
