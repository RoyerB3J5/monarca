declare global {
  interface Window {
    dataLayer?: any[];
  }
}

declare const dataLayer: any[];
declare function gtag(...args: any[]): void;

export {};
