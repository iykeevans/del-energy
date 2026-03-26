import type { NextConfig } from "next";

const remotePatterns: NonNullable<
  NonNullable<NextConfig["images"]>["remotePatterns"]
> = [
  {
    protocol: "https",
    hostname: "images.unsplash.com",
    pathname: "/**",
  },
];

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
try {
  const u = new URL(serverUrl);
  remotePatterns.push({
    protocol: u.protocol.replace(":", "") as "http" | "https",
    hostname: u.hostname,
    pathname: "/**",
    ...(u.port ? { port: u.port } : {}),
  });
} catch {
  /* invalid NEXT_PUBLIC_SERVER_URL */
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns,
  },
};

export default nextConfig;
