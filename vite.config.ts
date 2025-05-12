import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Only load plugins needed for all environments
  const plugins = [react()];
  
  // In development mode, we would normally add the componentTagger
  // but we'll skip it to avoid ESM import issues in production
  if (mode === 'development') {
    console.log('Development mode: componentTagger would normally be added here');
    // We're removing the lovable-tagger import entirely to avoid build issues
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
