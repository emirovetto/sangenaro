/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora ESLint en el build de producción
    ignoreDuringBuilds: true,
    // Evita que busque archivos a lint
    dirs: [],
  },
}

module.exports = nextConfig