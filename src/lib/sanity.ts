
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Your Sanity project configuration
export const client = createClient({
  projectId: '6fq80c4a', // Your Sanity project ID
  dataset: 'production',
  useCdn: false, // Set to false to bypass CDN for more reliable connections
  apiVersion: '2025-05-08', // Updated to match your specified API version
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
    // This query just fetches a single document to test the connection
    const result = await client.fetch(`*[_type == "category"][0]`);
    console.log("Sanity connection successful:", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Sanity connection error:", error);
    // Add more detailed error information
    const errorDetails = {
      message: "Could not connect to Sanity. Please check your project configuration.",
      projectId: '6fq80c4a',
      dataset: 'production',
      apiVersion: '2025-05-08',
      error
    };
    console.error("Sanity connection details:", errorDetails);
    return { success: false, error: errorDetails };
  }
};

// Helper function for improved error handling in queries
export const safeQuery = async (query: string, params?: any) => {
  try {
    const result = await client.fetch(query, params);
    return { success: true, data: result };
  } catch (error) {
    console.error("Sanity query error:", error);
    console.error("Failed query:", query);
    console.error("Query params:", params);
    return { success: false, error };
  }
};
