import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so built files work when served from a subpath or locally
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Listen on localhost only to avoid network interface errors
    host: '127.0.0.1',
    // https: false,
    port: 8000,
    strictPort: false,
    proxy: {
      "/api": "http://127.0.0.1:3000",
      // <-- Укажите порт, на котором у вас ЛОКАЛЬНО запускается server.ts (может быть 8080, 5000, и т.д.)
      
    },
    
  },
  
  preview: {
    host: true,
    port: 5191,
  },
});

// Файл: frontend/vite.config.ts

//... (другие настройки, например import)

// export default defineConfig({
//   base: "./",
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   server: {
//     // Слушаем только localhost
//     host: '127.0.0.1',
//     port: 8000,
//     strictPort: false,
    
//     // --- ПРАВИЛЬНАЯ КОНФИГУРАЦИЯ ПРОКСИ ---
//     proxy: {
//       '/api': {
//         target: 'http://127.0.0.1:3000', // Адрес вашего backend (server.js)
//         changeOrigin: true, // Необходимо для корректной работы
//         secure: false, // Можно оставить false для http
//       }
//     }
//     // --- КОНЕЦ ПРАВИЛЬНОЙ КОНФИГУРАЦИИ ---
//   },
  
//   preview: {
//     host: true,
//     port: 5191,
//   },
// });