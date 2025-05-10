
import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { format } from "date-fns"

/**
 * @deprecated This component is deprecated. Please use AnimatedTestimonials instead.
 * Import from '@/components/shared/AnimatedTestimonials'
 */
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

/**
 * @deprecated This component is deprecated. Please use AnimatedTestimonials instead.
 * Import from '@/components/shared/AnimatedTestimonials'
 */
const TestimonialCarousel = ({
  testimonials,
  className,
}: TestimonialCarouselProps) => {
  // Show deprecation warning in development
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        'TestimonialCarousel is deprecated. Please use AnimatedTestimonials instead. ' +
        'Import from @/components/shared/AnimatedTestimonials'
      );
    }
  }, []);

  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "100px",
  })
  
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

  // Just display the first testimonial since we removed the carousel
  const testimonial = testimonials[0];

  return (
    <div 
      ref={intersectionRef as React.RefObject<HTMLDivElement>}
      className={cn("w-full", className)}
    >
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
    </div>
  )
}

export default TestimonialCarousel
