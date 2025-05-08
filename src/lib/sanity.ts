
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
    console.log("Testing Sanity connection with simple query...");
    // This query just fetches a single document to test the connection
    const result = await client.fetch(`*[_type in ["category", "blogPost"]][0]`);
    console.log("Sanity connection successful:", result);
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Sanity connection error:", error);
    // Add more detailed error information
    const errorDetails = {
      message: "Could not connect to Sanity. Please check your project configuration.",
      projectId: '6fq80c4a',
      dataset: 'production',
      apiVersion: '2025-05-08',
      errorMessage: error?.message || "Unknown error",
      statusCode: error?.statusCode || "Unknown",
      error
    };
    console.error("Sanity connection details:", errorDetails);
    return { success: false, error: errorDetails };
  }
};

// Helper function for improved error handling in queries
export const safeQuery = async (query: string, params?: any) => {
  try {
    console.log(`Executing Sanity query: ${query.slice(0, 100)}${query.length > 100 ? '...' : ''}`);
    if (params) {
      console.log("Query parameters:", params);
    }
    
    const result = await client.fetch(query, params);
    
    console.log("Query result type:", typeof result);
    console.log("Query result is array:", Array.isArray(result));
    console.log("Query result length:", Array.isArray(result) ? result.length : "not an array");
    
    if (result === null) {
      console.log("Query returned null - this might be expected for empty results");
    } else if (result === undefined) {
      console.log("Query returned undefined - this is unusual and might indicate a problem");
    }
    
    return { success: true, data: result };
  } catch (error: any) {
    console.error("Sanity query error:", error);
    console.error("Failed query:", query);
    console.error("Query params:", params);
    
    // Enhanced error object with more details
    const errorDetails = {
      message: error?.message || "Unknown error",
      statusCode: error?.statusCode || "Unknown",
      query,
      params,
      error
    };
    
    return { success: false, error: errorDetails };
  }
};
