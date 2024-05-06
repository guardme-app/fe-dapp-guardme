//React imports
import { useContext } from 'react';

//Providers
import { WalletContext } from '@/core/providers/WalletProvider';

export const useWallet = () => {
  const context = useContext(WalletContext);

  return {
    ...context,
  };
};
