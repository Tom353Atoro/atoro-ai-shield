
import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"
import { MessageCircle, Circle } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { autoplayPlugin } from "@/lib/embla-autoplay"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { format } from "date-fns"

export type TestimonialItem = {
  quote: string
  author: string
  title: string
  company?: string
  avatarSrc?: string
  date?: string | Date
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[]
  className?: string
  autoplayDelay?: number
}

const TestimonialCarousel = ({
  testimonials,
  className,
  autoplayDelay = 5000,
}: TestimonialCarouselProps) => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "100px",
  })
  
  const [api, setApi] = React.useState<any>(null)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  const autoplay = React.useMemo(
    () =>
      autoplayPlugin({
        delay: autoplayDelay,
        playOnInit: true,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        stopOnTouch: true,
      }),
    [autoplayDelay]
  )
  
  const [carouselRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay]
  )
  
  // Update current slide index when the carousel changes
  React.useEffect(() => {
    if (!api) return
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
  }

  const formatDate = (date: string | Date | undefined) => {
    if (!date) return ""
    return format(new Date(date), "MMM yyyy")
  }

  return (
    <div 
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={cn("w-full", className)}
    >
      <Carousel 
        ref={carouselRef}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial.author}-${index}`}>
              <Card className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <CardContent className="pt-6 relative">
                  <div className="absolute top-4 right-2">
                    <MessageCircle className="w-8 h-8 text-atoro-purple/10" />
                  </div>
                  
                  <p className="text-gray-700 relative z-10 italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                
                <CardFooter className="flex items-center gap-3 pt-4">
                  <Avatar className="h-14 w-14 border border-gray-200 ring-2 ring-atoro-blue/10">
                    {testimonial.avatarSrc && hasIntersected ? (
                      <AvatarImage 
                        src={testimonial.avatarSrc} 
                        alt={testimonial.author}
                        loading="lazy"
                        className="object-cover" 
                      /> 
                    ) : (
                      <AvatarFallback className="bg-atoro-blue/10 text-atoro-teal">
                        {getInitials(testimonial.author)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className="flex flex-col">
                    <div className="font-medium text-base">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                      {testimonial.company && `, ${testimonial.company}`}
                    </div>
                    {testimonial.date && (
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(testimonial.date)}
                      </div>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </div>
        
        {/* Navigation Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <Circle
                className={cn(
                  "h-2 w-2 transition-all",
                  currentIndex === index
                    ? "fill-atoro-blue text-atoro-blue"
                    : "fill-gray-200 text-gray-200"
                )}
              />
            </button>
          ))}
        </div>
      </Carousel>
    </div>
  )
}

export default TestimonialCarousel
