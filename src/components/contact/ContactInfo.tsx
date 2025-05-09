
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
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
            <a href="mailto:info@atoro.io" className="text-atoro-blue hover:underline">info@atoro.io</a>
          </div>
        </div>
        
        <div className="flex items-start space-x-4 transition-transform hover:translate-x-1 duration-200">
          <div className="p-3 rounded-full bg-atoro-green/10 text-atoro-teal">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:0035315759340" className="text-gray-600 hover:text-atoro-blue">Ireland (00353) 01 575 9340</a>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Connect With Us</h3>
        <div className="flex">
          <a 
            href="https://www.linkedin.com/company/atoro-hq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-atoro-teal/10 rounded-full text-atoro-teal transition-colors hover:bg-atoro-teal hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="mt-8 p-5 bg-atoro-green/10 rounded-lg border border-atoro-green/20">
        <h3 className="font-semibold text-atoro-teal mb-2">Need Immediate Assistance?</h3>
        <p className="text-sm mb-3">
          For urgent security incidents or time-sensitive inquiries, you can reach our response team.
        </p>
        <Button 
          variant="outline" 
          className="border-atoro-teal text-atoro-teal hover:bg-atoro-teal hover:text-white"
          onClick={() => window.location.href = 'tel:0035315759340'}
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Support
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
