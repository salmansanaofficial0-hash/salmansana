import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    middlewares: [
      {
        apply: 'pre',
        async handle(req, res, next) {
          // Serve sitemap.xml
          if (req.url === '/sitemap.xml') {
            res.setHeader('Content-Type', 'application/xml');
            res.end(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.salmansana.me/</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.salmansana.me/about</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.salmansana.me/portfolio</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.salmansana.me/contact</loc>
    <lastmod>2026-05-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`);
            return;
          }
          // Serve robots.txt
          if (req.url === '/robots.txt') {
            res.setHeader('Content-Type', 'text/plain');
            res.end(`User-agent: *
Allow: /
Disallow: /admin
Disallow: /.git
Disallow: /node_modules

Sitemap: https://www.salmansana.me/sitemap.xml

# Crawl delay to be respectful
Crawl-delay: 1`);
            return;
          }
          next();
        }
      }
    ]
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
