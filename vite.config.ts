
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Optimize server response time
    hmr: {
      overlay: false
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-aspect-ratio'],
          utilities: ['zod', 'react-hook-form', '@hookform/resolvers'],
          // Add more chunks for better code splitting
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          query: ['@tanstack/react-query']
        },
        // Optimize asset naming for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    cssCodeSplit: true,
    // Add minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Improve chunk loading strategy
    assetsInlineLimit: 4096, // 4kb
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add optimizeDeps for faster development
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      'lucide-react'
    ]
  },
  // Improve CSS handling
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Add any preprocessor options here if needed
    }
  }
}));
