'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <OnchainKitProvider
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || 'demo-api-key'}
      chain={{
        id: 8453,
        name: 'Base',
        nativeCurrency: {
          decimals: 18,
          name: 'Ether',
          symbol: 'ETH',
        },
        rpcUrls: {
          default: { http: ['https://mainnet.base.org'] },
        },
        blockExplorers: {
          default: { name: 'Basescan', url: 'https://basescan.org' },
        },
        testnet: false,
      }}
    >
      {children}
    </OnchainKitProvider>
  );
}
