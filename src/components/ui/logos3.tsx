
"use client";

import React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string | number;
  description?: string;
  name?: string;
  image?: string;
  imagePath?: string;
  className?: string;
  width?: number;
  alt?: string;
}

interface Logos3Props {
  heading?: string;
  title?: string;
  description?: string;
  logos: Logo[];
  className?: string;
  bgColor?: string;
}

const Logos3 = ({
  heading,
  title,
  description,
  logos,
  className = "",
  bgColor = "bg-background",
}: Logos3Props) => {
  const displayTitle = heading || title || "Trusted by these companies";
  
  return (
    <section className={`py-8 md:py-12 ${bgColor} ${className}`}>
      <div className="container flex flex-col items-center text-center">
        {displayTitle && (
          <h2 className="mb-4 text-pretty text-2xl font-bold lg:text-3xl">
            {displayTitle}
          </h2>
        )}
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="pt-6">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start"
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true, 
                speed: 0.5 
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex min-w-[80px] max-w-[140px] basis-1/3 justify-center pl-0 xs:basis-1/4 sm:basis-1/5 md:basis-1/6 lg:basis-1/7"
                >
                  <div className="mx-0.5 sm:mx-1 flex shrink-0 items-center justify-center">
                    <div className="flex h-14 sm:h-16 items-center justify-center p-2 bg-gray-100 hover:bg-white rounded-md transition-all duration-300">
                      <img
                        src={logo.image || logo.imagePath}
                        alt={logo.alt || logo.description || `${logo.name || ''} logo`}
                        className="max-h-10 sm:max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        style={logo.width ? { width: `${Math.min(logo.width, 100)}px` } : undefined}
                        loading="eager"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
