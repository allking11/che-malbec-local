import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// NOTE: @tanstack/react-start already bundles vite-plugin-react internally.
// Do NOT add @vitejs/plugin-react here — it would cause duplicate plugin errors.
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
    tailwindcss(),
  ],
});
