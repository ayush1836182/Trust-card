import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, bsc, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Trust Crypto Card',
  projectId: 'c08a530111a013c636c4461487ee20ad',
  chains: [mainnet, bsc, polygon],
  ssr: false,
});
