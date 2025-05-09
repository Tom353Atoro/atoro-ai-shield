
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/designTokens';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StyleGuide = () => {
  return (
    <Container className="py-12">
      <h1 className="mb-10 text-3xl font-bold">Atoro Design System</h1>
      
      <Tabs defaultValue="colors">
        <TabsList className="mb-8">
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="colors">
          <h2 className="mb-6 text-2xl font-semibold">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ColorSwatch name="Teal" colorClass="bg-atoro-teal" textClass="text-white" />
            <ColorSwatch name="Green" colorClass="bg-atoro-green" />
            <ColorSwatch name="Blue" colorClass="bg-atoro-blue" />
            <ColorSwatch name="Dark Teal" colorClass="bg-atoro-dark-teal" textClass="text-white" />
            <ColorSwatch name="Light Green" colorClass="bg-atoro-light-green" />
            <ColorSwatch name="Light Blue" colorClass="bg-atoro-light-blue" />
          </div>
          
          <h3 className="mt-10 mb-6 text-xl font-semibold">Gradients</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <GradientSwatch name="Hero Dark Teal" gradientClass={tokens.gradients.heroDarkTeal} />
            <GradientSwatch name="Hero Teal" gradientClass={tokens.gradients.heroTeal} />
            <GradientSwatch name="Section Teal" gradientClass={tokens.gradients.sectionTeal} />
            <GradientSwatch name="Section Blue" gradientClass={tokens.gradients.sectionBlue} />
            <GradientSwatch name="Section Green" gradientClass={tokens.gradients.sectionGreen} />
            <GradientSwatch name="CTA Light" gradientClass={tokens.gradients.ctaLight} textClass="text-gray-800" />
          </div>
        </TabsContent>
        
        <TabsContent value="typography">
          <h2 className="mb-6 text-2xl font-semibold">Typography</h2>
          
          <div className="space-y-8">
            <div className="p-4 border rounded-lg">
              <h1 className="mb-2">Heading 1</h1>
              <p className="text-sm text-gray-500">text-3xl md:text-4xl lg:text-5xl font-bold</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h2 className="mb-2">Heading 2</h2>
              <p className="text-sm text-gray-500">text-2xl md:text-3xl font-bold</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h3 className="mb-2">Heading 3</h3>
              <p className="text-sm text-gray-500">text-xl md:text-2xl font-semibold</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <p className="text-lg mb-2">Body Large</p>
              <p className="text-sm text-gray-500">text-lg</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <p className="mb-2">Body</p>
              <p className="text-sm text-gray-500">text-base</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <p className="text-sm mb-2">Small Text</p>
              <p className="text-sm text-gray-500">text-sm</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="components">
          <h2 className="mb-6 text-2xl font-semibold">Components</h2>
          
          <h3 className="mb-4 text-xl font-semibold">Buttons</h3>
          <div className="flex flex-wrap gap-4 mb-8 p-4 border rounded-lg">
            <Button size="lg">Primary Button</Button>
            <Button size="lg" variant="outline">Outline Button</Button>
            <Button size="lg" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">
              Green Button
            </Button>
          </div>
          
          <h3 className="mb-4 text-xl font-semibold">Badges</h3>
          <div className="flex flex-wrap gap-4 mb-8 p-4 border rounded-lg">
            <Badge>Default Badge</Badge>
            <Badge className="bg-atoro-teal/10 text-atoro-teal hover:bg-atoro-teal/20">
              Teal Badge
            </Badge>
            <Badge className="bg-atoro-green/10 text-atoro-green hover:bg-atoro-green/20">
              Green Badge
            </Badge>
          </div>
          
          <h3 className="mb-4 text-xl font-semibold">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4">
              <h4 className="mb-2 font-semibold">Card Title</h4>
              <p className="text-gray-600">Card content goes here. This is a basic card component with padding.</p>
            </Card>
            
            <Card className="p-4 border-atoro-teal/30">
              <h4 className="mb-2 font-semibold text-atoro-teal">Teal Card</h4>
              <p className="text-gray-600">Card with teal border and heading.</p>
            </Card>
            
            <Card className="p-4 bg-atoro-green/10">
              <h4 className="mb-2 font-semibold">Colored Card</h4>
              <p className="text-gray-600">Card with a light green background.</p>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="spacing">
          <h2 className="mb-6 text-2xl font-semibold">Spacing System</h2>
          
          <h3 className="mb-4 text-xl font-semibold">Section Spacing</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="h-16 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-8 (Minimal)</span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-20 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-12 (Compact)</span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-24 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-16 (Default)</span>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-28 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-20 (Spacious)</span>
              </div>
            </div>
          </div>
          
          <h3 className="mt-8 mb-4 text-xl font-semibold">Stack Spacing</h3>
          <div className="p-4 border rounded-lg">
            <div className="space-y-4 bg-gray-100 p-4">
              <div className="h-8 bg-gray-200 flex items-center justify-center">Item 1</div>
              <div className="h-8 bg-gray-200 flex items-center justify-center">Item 2</div>
              <div className="h-8 bg-gray-200 flex items-center justify-center">Item 3</div>
            </div>
            <p className="mt-2 text-sm text-gray-500">space-y-4 (Tight)</p>
          </div>
        </TabsContent>
      </Tabs>
    </Container>
  );
};

// Helper components
const ColorSwatch = ({ name, colorClass, textClass = "text-gray-900" }) => (
  <div className="overflow-hidden rounded-lg border">
    <div className={`h-24 ${colorClass}`}></div>
    <div className="p-3">
      <p className={`font-medium ${textClass}`}>{name}</p>
      <p className="text-xs text-gray-500">{colorClass}</p>
    </div>
  </div>
);

const GradientSwatch = ({ name, gradientClass, textClass = "text-white" }) => (
  <div className="overflow-hidden rounded-lg border">
    <div className={`h-24 ${gradientClass}`}></div>
    <div className="p-3">
      <p className="font-medium">{name}</p>
    </div>
  </div>
);

export default StyleGuide;
