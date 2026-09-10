// Set by the GitHub Pages workflow to "/<repo-name>" for project sites.
// Empty for local dev and for user/org sites (<user>.github.io).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into ./out — required for GitHub Pages.
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  // Emit /about/index.html instead of /about.html so paths resolve on Pages.
  trailingSlash: true,
};

export default nextConfig;
