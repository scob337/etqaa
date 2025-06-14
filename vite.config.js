import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    splitVendorChunkPlugin(),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
  ],
  build: {
    // تحسين حجم البناء
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // تقسيم الشيفرة لتحسين التحميل
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          i18n: ['i18next', 'react-i18next'],
          animations: ['framer-motion'],
        },
      },
    },
    // تحسين الصور
    assetsInlineLimit: 4096, // تضمين الملفات الصغيرة كـ base64
    chunkSizeWarningLimit: 1000, // زيادة حد التحذير لحجم الملفات
    // تمكين التخزين المؤقت للبناء
    cache: true,
  },
  // تحسين الخادم المحلي
  server: {
    open: true,
    hmr: {
      overlay: true,
    },
  },
})
