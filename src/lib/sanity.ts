
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Your Sanity project configuration
export const client = createClient({
  projectId: '6fq80c4a', // Your Sanity project ID
  dataset: 'production',
  useCdn: true, // Set to false if you want to ensure fresh data
  apiVersion: '2023-05-03', // Use a current API version
  // No token needed for public read access
});

// Setup image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

// Helper function to check if Sanity connection is working
export const checkSanityConnection = async () => {
  try {
    // This query just fetches a single category to test the connection
    const result = await client.fetch(`*[_type == "category"][0]`);
    return { success: true, data: result };
  } catch (error) {
    console.error("Sanity connection error:", error);
    return { success: false, error };
  }
};
