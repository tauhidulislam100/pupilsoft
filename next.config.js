const nextConfig = {
  output: 'standalone',
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};
