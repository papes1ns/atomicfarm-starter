export {};

declare global {
  interface Window {
    globals: {
      API_BASE_URL: string;
      VERSION: string;
    };
  }
}
