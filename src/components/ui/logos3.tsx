
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
    <section className={`py-6 md:py-10 ${bgColor} ${className}`}>
      <div className="container flex flex-col items-center text-center">
        {displayTitle && (
          <h2 className="mb-3 text-pretty text-2xl font-bold lg:text-3xl">
            {displayTitle}
          </h2>
        )}
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "center",
              dragFree: true,
              skipSnaps: true,
            }}
            plugins={[
              AutoScroll({ 
                playOnInit: true, 
                speed: 0.5,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              })
            ]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex min-w-[75px] max-w-[130px] basis-1/4 justify-center pl-0 xs:basis-1/5 sm:basis-1/6 md:basis-1/7"
                >
                  <div className="mx-0.5 flex shrink-0 items-center justify-center">
                    <div className="flex h-10 items-center justify-center">
                      <img
                        src={logo.image || logo.imagePath}
                        alt={logo.alt || logo.description || `${logo.name || ''} logo`}
                        className={logo.className || "max-h-8 w-auto object-contain"}
                        style={logo.width ? { width: `${Math.min(logo.width, 90)}px` } : undefined}
                        loading="eager"
                        decoding="sync"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Reduced gradient width to show more of the logos */}
          <div className="absolute inset-y-0 left-0 w-4 sm:w-6 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-4 sm:w-6 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
