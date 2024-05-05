/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
    missingSuspenseWithCSRBailout: false,
  },
  compiler: {
    emotion: true,
  },
  cacheMaxMemorySize: 31536000,
};

export default nextConfig;
