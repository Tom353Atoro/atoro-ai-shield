
import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import ContactInfo from '@/components/contact/ContactInfo';

declare global {
  interface Window {
    neetoForm: {
      embed: (...args: any[]) => void;
      q?: any[];
    };
  }
}

const ContactContent = () => {
  useEffect(() => {
    // Load NeetoForm scripts
    const script1 = document.createElement('script');
    script1.innerHTML = "window.neetoForm = window.neetoForm || { embed: function(){(neetoForm.q=neetoForm.q||[]).push(arguments)} };";
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.async = true;
    script2.src = "https://atorohq.neetoform.com/javascript/embed.js";
    document.head.appendChild(script2);
    
    // Initialize NeetoForm when script is loaded
    script2.onload = () => {
      window.neetoForm?.embed({
        type: "inline",
        id: "fd45e263-cbb9-4314-92fc-f01568a21a28",
        organization: "atorohq",
        elementSelector: "#inline-embed-container",
        styles: { height: "100%", width: "100%"},
      });
    };
    
    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100" style={{ minHeight: "500px" }}>
            <div style={{ height: "100%", width: "100%" }} id="inline-embed-container">
              {/* NeetoForm will be rendered here */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactContent;
