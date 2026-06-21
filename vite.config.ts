import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite 8+ resolves tsconfig paths natively via resolve.tsconfigPaths.
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (SSR wrapper).
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
  ],
});
