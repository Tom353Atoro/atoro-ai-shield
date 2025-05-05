
import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';

// Define custom components for the PortableText renderer
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: any }) => {
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
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
          <code>{value.code}</code>
        </pre>
      );
    },
  },
  marks: {
    link: ({ children, value, ...rest }: any) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value?.href} 
          rel={rel} 
          className="text-atoro-blue hover:text-atoro-teal underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>,
    normal: ({ children }: { children: React.ReactNode }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-atoro-teal pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    number: ({ children }: { children: React.ReactNode }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => <li className="mb-1">{children}</li>,
    number: ({ children }: { children: React.ReactNode }) => <li className="mb-1">{children}</li>,
  },
};

interface PortableTextRendererProps {
  content: any;
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
};

export default PortableTextRenderer;
