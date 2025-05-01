
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Stay Updated on Security Trends</h2>
          <p className="text-lg opacity-90 mb-8">
            Join our newsletter for exclusive insights on cyber security, data privacy, 
            and AI governance tailored specifically for SaaS companies.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-white/10 border-white/20 placeholder:text-white/60 text-white"
                required
              />
              <Button className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
                Subscribe
              </Button>
            </div>
            <p className="mt-3 text-sm opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
