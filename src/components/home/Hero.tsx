
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';

const cyclingWords = ["Cybersecurity", "Privacy", "AI Governance"];
const defaultClientLogos = [{
  id: 1,
  src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150",
  alt: "Tech Client Logo"
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150",
  alt: "SaaS Client Logo"
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150",
  alt: "Fintech Client Logo"
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=150",
  alt: "Enterprise Client Logo"
}];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [editMode, setEditMode] = useState(false);
  const [clientLogos, setClientLogos] = useState(defaultClientLogos);

  // New logo state
  const [newLogo, setNewLogo] = useState({
    src: '',
    alt: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');

      // After fade out completes, change word and fade in
      setTimeout(() => {
        setCurrentWordIndex(prev => (prev + 1) % cyclingWords.length);
        setFadeState('fade-in');
      }, 1000); // This duration should match the CSS transition duration
    }, 3000); // Total time each word is displayed

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };

  const addClientLogo = () => {
    if (!newLogo.src || !newLogo.alt) return;
    setClientLogos(prev => [...prev, {
      id: Date.now(),
      src: newLogo.src,
      alt: newLogo.alt
    }]);

    // Reset form
    setNewLogo({
      src: '',
      alt: ''
    });
  };

  const removeClientLogo = (id: number) => {
    setClientLogos(prev => prev.filter(logo => logo.id !== id));
  };

  return <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-atoro-light-blue/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-atoro-light-green/40 to-transparent rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="mb-6">
            <span className={`gradient-text transition-opacity duration-1000 ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'}`}>
              {cyclingWords[currentWordIndex]}
            </span>{' '}
            <span className="block mt-2">for Fast-Growing SaaS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-3xl mx-auto">
            Europe's first ISO 42001 certified AI security consultancy, uniting cyber security, data privacy, and AI governance under one fixed-price, outcome-driven model.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>;
};

export default Hero;
