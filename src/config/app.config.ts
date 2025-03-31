export const APP_CONFIG = () => {
  return {
    PORT: process.env['APP_PORT'] ?? 5000,
    PROD: process.env['PROD'] === 'true',
  };
};
