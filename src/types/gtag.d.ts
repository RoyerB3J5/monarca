declare global {
  interface Window {
    dataLayer: any[];
  }
}

declare var dataLayer: any[];
declare function gtag(...args: any[]): void;

export {};
