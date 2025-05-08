
import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

// Define custom components for the PortableText renderer
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value) return null;
      
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            className="rounded-lg mx-auto"
          />
          {value.caption && (
            <div className="text-center text-sm text-gray-600 mt-2">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    code: ({ value }: { value: any }) => {
      if (!value || !value.code) return null;
      
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
          <code>{value.code}</code>
        </pre>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || '#';
      const rel = !href.startsWith('/') ? 'noreferrer noopener' : undefined;
      
      return (
        <a 
          href={href} 
          rel={rel} 
          className="text-atoro-blue hover:text-atoro-teal underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-atoro-teal pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
};

interface PortableTextRendererProps {
  content: any;
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ content }) => {
  if (!content) {
    return (
      <div className="text-gray-500 italic">
        No content available for this post.
      </div>
    );
  }

  if (!Array.isArray(content)) {
    console.error("Expected content to be an array but received:", typeof content);
    return (
      <div className="text-red-500">
        Error: Content format is invalid. Please check the console for details.
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default PortableTextRenderer;
