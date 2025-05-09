
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/designTokens';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { spacing } from '@/lib/designSystem';
import { Separator } from '@/components/ui/separator';
import SectionWrapper from '@/components/shared/SectionWrapper';
import ServiceCTASection from '@/components/shared/ServiceCTASection';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
          <TabsTrigger value="patterns">Component Patterns</TabsTrigger>
          <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
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
          
          <h3 className="mt-8 mb-4 text-xl font-semibold">Avatar</h3>
          <div className="flex flex-wrap gap-4 mb-8 p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-atoro-teal/20 flex items-center justify-center text-atoro-teal font-medium">AT</div>
              <div className="w-12 h-12 rounded-full bg-atoro-green/20 flex items-center justify-center text-atoro-green font-medium">JD</div>
              <div className="w-12 h-12 rounded-full bg-atoro-blue/20 flex items-center justify-center text-atoro-blue font-medium">SB</div>
            </div>
          </div>
          
          <h3 className="mt-8 mb-4 text-xl font-semibold">Aspect Ratio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="border rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9}>
                <div className="h-full w-full bg-atoro-teal/10 flex items-center justify-center">
                  16:9 Ratio
                </div>
              </AspectRatio>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3}>
                <div className="h-full w-full bg-atoro-green/10 flex items-center justify-center">
                  4:3 Ratio
                </div>
              </AspectRatio>
            </div>
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
              <p className="mt-2 text-sm text-gray-500">spacing.section.minimal</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-20 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-12 (Compact)</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.section.compact</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-24 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-16 (Default)</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.section.default</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="h-28 bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-medium">py-20 (Spacious)</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.section.spacious</p>
            </div>
          </div>
          
          <h3 className="mt-8 mb-4 text-xl font-semibold">Stack Spacing</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="space-y-4 bg-gray-100 p-4">
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 1</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 2</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 3</div>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.stack.tight</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="space-y-6 bg-gray-100 p-4">
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 1</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 2</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 3</div>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.stack.default</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="space-y-8 bg-gray-100 p-4">
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 1</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 2</div>
                <div className="h-8 bg-gray-200 flex items-center justify-center">Item 3</div>
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.stack.loose</p>
            </div>
          </div>
          
          <h3 className="mt-8 mb-4 text-xl font-semibold">Container Sizes</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="max-w-4xl mx-auto bg-gray-100 p-4 text-center">
                Narrow Container
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.container.narrow</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="max-w-6xl mx-auto bg-gray-100 p-4 text-center">
                Default Container
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.container.default</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="max-w-7xl mx-auto bg-gray-100 p-4 text-center">
                Wide Container
              </div>
              <p className="mt-2 text-sm text-gray-500">spacing.container.wide</p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="patterns">
          <h2 className="mb-6 text-2xl font-semibold">Component Patterns</h2>
          
          <h3 className="mb-4 text-xl font-semibold">Service Section Wrapper</h3>
          <div className="mb-8 border rounded-lg overflow-hidden">
            <SectionWrapper 
              title="Example Section Title" 
              description="This is a standardized section wrapper that maintains consistent spacing and layout."
              badgeText="Example Badge"
              spacingSize="compact"
              className="bg-gray-50"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center border rounded">
                Section Content
              </div>
            </SectionWrapper>
          </div>
          
          <h3 className="mb-4 text-xl font-semibold">CTA Patterns</h3>
          <div className="mb-8 border rounded-lg overflow-hidden">
            <ServiceCTASection 
              title="Example CTA Title"
              description="This is a standardized CTA section pattern used throughout the site."
              primaryButtonText="Primary Action"
              secondaryButtonText="Secondary Action"
              secondaryButtonLink="#"
              className="py-8"
            />
          </div>
          
          <h3 className="mb-4 text-xl font-semibold">Hero Patterns</h3>
          <div className="mb-8 p-4 border rounded-lg">
            <div className="p-6 bg-gradient-to-br from-atoro-teal to-atoro-dark-teal rounded-lg text-white">
              <div className="max-w-xl">
                <Badge className="mb-3 bg-white/10 text-white">Service Category</Badge>
                <h1 className="mb-3 text-2xl font-bold">Service Hero Title</h1>
                <p className="mb-4">A brief description of the service that explains the value proposition in 2-3 sentences.</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" className="bg-atoro-green text-atoro-teal hover:bg-atoro-light-green">Primary Action</Button>
                  <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">Secondary Action</Button>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">Standard hero pattern for service pages</p>
          </div>
          
          <h3 className="mb-4 text-xl font-semibold">Layout Grid Patterns</h3>
          <div className="mb-8 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="h-24 bg-gray-100 flex items-center justify-center rounded border">
                  Grid Item {item}
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-500">Standard 3-column responsive grid pattern</p>
          </div>
        </TabsContent>
        
        <TabsContent value="usage">
          <h2 className="mb-6 text-2xl font-semibold">Component Usage Guidelines</h2>
          
          <div className="prose max-w-none">
            <h3>Component Hierarchy</h3>
            <p>We follow a layered approach to component organization:</p>
            <ol>
              <li><strong>Base Components:</strong> Fundamental UI elements (buttons, inputs)</li>
              <li><strong>Compound Components:</strong> Combinations of base components (cards, forms)</li>
              <li><strong>Section Components:</strong> Page sections with specific layouts and purposes</li>
              <li><strong>Layout Components:</strong> Control the overall page structure</li>
              <li><strong>Page Components:</strong> Full pages assembled from sections</li>
            </ol>
            
            <h3>When to Use Different Component Types</h3>
            
            <h4>Use SectionWrapper when:</h4>
            <ul>
              <li>You need a consistent section layout with title, description, and optional badge</li>
              <li>You want to maintain consistent spacing between sections</li>
              <li>You need to control background colors, spacing sizes, and container widths</li>
            </ul>
            
            <h4>Use ServiceCTASection when:</h4>
            <ul>
              <li>You need a call-to-action section with consistent styling</li>
              <li>You want to include primary and secondary buttons with consistent behavior</li>
              <li>You need integration with tools like NeetoCal for appointment scheduling</li>
            </ul>
            
            <h4>Use ServiceHeroSection when:</h4>
            <ul>
              <li>You need a consistent hero section for service pages</li>
              <li>You want to maintain consistent styling and behavior across service pages</li>
              <li>You need to control gradient backgrounds, button styling, and optional imagery</li>
            </ul>
            
            <h3>Component Creation Guidelines</h3>
            <ul>
              <li><strong>Props Interface:</strong> Always define and export a props interface for each component</li>
              <li><strong>Default Props:</strong> Provide sensible defaults for optional props</li>
              <li><strong>Design Tokens:</strong> Use tokens from designTokens.ts for styling consistency</li>
              <li><strong>Responsive Design:</strong> All components should be responsive by default</li>
              <li><strong>Accessibility:</strong> Ensure all components are accessible (proper roles, labels, etc.)</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-10" />
      
      <div className="prose max-w-none">
        <h2>Component Implementation Guidelines</h2>
        <ul>
          <li><strong>Component Hierarchy:</strong> Follow our layered approach from UI elements to page components</li>
          <li><strong>Naming Conventions:</strong> Use PascalCase for components and descriptive names</li>
          <li><strong>File Organization:</strong> Group components by feature or purpose</li>
          <li><strong>Props Interface:</strong> Always define and export a props interface for each component</li>
          <li><strong>Default Props:</strong> Provide sensible defaults for optional props</li>
          <li><strong>Design Tokens:</strong> Use tokens from designTokens.ts for styling consistency</li>
          <li><strong>Responsive Design:</strong> All components should be responsive by default</li>
        </ul>
      </div>
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
