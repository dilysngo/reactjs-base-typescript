/// <reference types="react-scripts" />

declare module 'fortmatic';

declare module 'content-hash' {
  declare function decode(x: string): string;
  declare function getCodec(x: string): string;
}

interface BinanceChain {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;
}

interface Window {
  ethereum?: {
    isMetaMask?: true;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
  };
  web3?: any;
  BinanceChain?: BinanceChain;
}
