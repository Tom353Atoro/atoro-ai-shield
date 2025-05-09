
import React from 'react';
import Layout from '@/components/layout/Layout';
import StyleGuide from '@/components/design-system/StyleGuide';
import { Container } from '@/components/ui/Container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const DesignSystem = () => {
  return (
    <Layout>
      <Container className="py-12">
        <div className="mb-8">
          <Badge className="mb-3">Design System</Badge>
          <h1 className="text-3xl font-bold mb-3">Atoro Design System</h1>
          <p className="text-gray-700 max-w-2xl">
            A comprehensive guide to our design language, component library, and implementation standards.
            Use this as a reference when building new features or refactoring existing ones.
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <Tabs defaultValue="components">
          <TabsList className="mb-8">
            <TabsTrigger value="components">Component Library</TabsTrigger>
            <TabsTrigger value="guidelines">Usage Guidelines</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components">
            <StyleGuide />
          </TabsContent>
          
          <TabsContent value="guidelines">
            <div className="prose max-w-none">
              <h2>Component Implementation Workflow</h2>
              
              <h3>1. Component Identification</h3>
              <p>
                Before creating a new component, check if a similar component already exists in the design system.
                Look for components that could be extended or modified to meet your needs rather than creating new ones.
              </p>
              
              <h3>2. Component Design</h3>
              <ul>
                <li>Begin by defining the component's purpose and functionality</li>
                <li>Identify the props the component will accept</li>
                <li>Determine how the component will integrate with existing design tokens</li>
                <li>Consider responsive behavior across different screen sizes</li>
              </ul>
              
              <h3>3. Component Implementation</h3>
              <ul>
                <li>Create a new file in the appropriate directory following naming conventions</li>
                <li>Define the props interface with proper TypeScript types</li>
                <li>Implement the component using existing design tokens and utility classes</li>
                <li>Add appropriate defaults for optional props</li>
                <li>Include responsive styling using Tailwind's responsive modifiers</li>
                <li>Add necessary accessibility attributes</li>
              </ul>
              
              <h3>4. Component Testing</h3>
              <ul>
                <li>Test the component in isolation with different prop combinations</li>
                <li>Test the component in the context of its parent page or section</li>
                <li>Test responsive behavior across different screen sizes</li>
                <li>Verify accessibility compliance</li>
              </ul>
              
              <h3>5. Documentation</h3>
              <ul>
                <li>Update the style guide with examples of the new component</li>
                <li>Document the component's props, usage patterns, and any caveats</li>
                <li>Include examples of common use cases</li>
              </ul>
              
              <h2>File Structure Guidelines</h2>
              
              <pre><code>{`
/components
  /ui                  # Base UI components
  /shared              # Shared components used across multiple pages
  /layout              # Layout components
  /[feature-name]      # Feature-specific components
  /[page-name]         # Page-specific components
              `}</code></pre>
              
              <h3>Naming Conventions</h3>
              <ul>
                <li><strong>Component files:</strong> PascalCase.tsx (e.g., ServiceCard.tsx)</li>
                <li><strong>Utility files:</strong> camelCase.ts (e.g., designTokens.ts)</li>
                <li><strong>Test files:</strong> ComponentName.test.tsx</li>
                <li><strong>Style files:</strong> ComponentName.module.css (if needed)</li>
              </ul>
              
              <h2>Design Token Usage</h2>
              
              <p>
                Always use design tokens from the designTokens.ts file rather than hardcoding values.
                This ensures consistency and makes global style changes easier.
              </p>
              
              <h3>Example:</h3>
              <pre><code>{`
// Good
<div className={tokens.colors.bg.teal}>...</div>

// Bad
<div className="bg-blue-500">...</div>
              `}</code></pre>
              
              <h2>Component Refactoring Guidelines</h2>
              
              <p>
                When refactoring components, follow these guidelines to ensure a smooth transition:
              </p>
              
              <ul>
                <li>Identify components with similar functionality that could be consolidated</li>
                <li>Extract common patterns into shared components</li>
                <li>Use composition rather than inheritance for component relationships</li>
                <li>Maintain backward compatibility when possible</li>
                <li>Update all instances of the refactored component</li>
                <li>Update the style guide documentation</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default DesignSystem;
