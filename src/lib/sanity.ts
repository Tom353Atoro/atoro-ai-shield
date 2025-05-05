
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Your Sanity project configuration
export const client = createClient({
  projectId: '6fq80c4a', // Updated with your actual project ID
  dataset: 'production',
  useCdn: true, // Set to false if you want to ensure fresh data
  apiVersion: '2023-05-03', // Use today's date or the API version you prefer
});

// Setup image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
