/**
 * Next.js Configuration File
 * Configures Next.js build and runtime behavior
 * 
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Image optimization configuration
  images: {
    // Allow images from external domains
    // This is required for Next.js Image component to work with external URLs
    remotePatterns: [
      {
        protocol: "https", // Only allow HTTPS (secure)
        hostname: "*", // Allow any hostname (wildcard)
        // In production, consider restricting to specific domains for security
      },
    ],
  },
};

module.exports = nextConfig;
