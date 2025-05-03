
import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="text-gray-600 mb-8">
          We'd love to hear from you. Reach out to our team using any of the methods below,
          and we'll get back to you as soon as possible.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4 transition-transform hover:translate-x-1 duration-200">
          <div className="p-3 rounded-full bg-atoro-green/10 text-atoro-teal">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Email</h3>
            <a href="mailto:contact@atoro.com" className="text-atoro-blue hover:underline">contact@atoro.com</a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 transition-transform hover:translate-x-1 duration-200">
          <div className="p-3 rounded-full bg-atoro-green/10 text-atoro-teal">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:+15555555555" className="text-gray-600 hover:text-atoro-blue">+1 (555) 555-5555</a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 transition-transform hover:translate-x-1 duration-200">
          <div className="p-3 rounded-full bg-atoro-green/10 text-atoro-teal">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Office</h3>
            <p className="text-gray-600">
              123 Security Drive<br />
              San Francisco, CA 94105
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 transition-transform hover:translate-x-1 duration-200">
          <div className="p-3 rounded-full bg-atoro-green/10 text-atoro-teal">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-atoro-teal/10 rounded-full text-atoro-teal transition-colors hover:bg-atoro-teal hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-atoro-teal/10 rounded-full text-atoro-teal transition-colors hover:bg-atoro-teal hover:text-white"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-atoro-teal/10 rounded-full text-atoro-teal transition-colors hover:bg-atoro-teal hover:text-white"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-atoro-green/10 rounded-lg border border-atoro-green/20">
        <h3 className="font-semibold text-atoro-teal mb-2">Need Immediate Assistance?</h3>
        <p className="text-sm mb-3">
          For urgent security incidents or time-sensitive inquiries, you can reach our 24/7 response team.
        </p>
        <Button 
          variant="outline" 
          className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal hover:text-white"
          onClick={() => window.location.href = 'tel:+15555555555'}
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Emergency Support
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
