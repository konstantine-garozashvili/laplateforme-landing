import path from "path"
import { execSync } from "child_process"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// Traceability: the running site must be able to say WHICH commit it is.
// In CI/CD the pipeline passes VITE_COMMIT_SHA (the exact commit being
// deployed); locally we fall back to git, then to "dev".
function resolveCommitSha(): string {
  if (process.env.VITE_COMMIT_SHA) return process.env.VITE_COMMIT_SHA.slice(0, 7)
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    return 'dev'
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  // Flat output: the site is deployed via a ConfigMap, and ConfigMaps have no
  // subdirectories — everything must land at the root of dist/.
  build: {
    assetsDir: '',
  },
  define: {
    __COMMIT_SHA__: JSON.stringify(resolveCommitSha()),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '0.0.0'),
  },
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
