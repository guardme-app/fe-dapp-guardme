import { ReactNode, createContext, useState } from 'react';

export interface WalletData {
  createWallet: () => void;
  userWallet: any | null;
  userId: any | null;
  buyPlan: any | null;
}

export const WalletContext = createContext<WalletData>({} as WalletData);

interface IWalletProvider {
  children: ReactNode;
}

export const WalletProvider: React.FC<IWalletProvider> = ({ children }) => {
  const [userWallet, setUserWallet] = useState<any | null>(null);
  const [userId, setUserId] = useState<any | null>(null);

  const createWallet = async () => {
    console.log('entrou');
    try {
      const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      await fetch('https://protocol-sandbox.lumx.io/v2/wallets', options)
        .then((response) => response.json())
        .then((response) => {
          setUserWallet(response.address);
          setUserId(response.id);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  const buyPlan = async (planId: number) => {
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"walletId":"${userId}","contractAddress":"${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}","operations":[{"functionSignature":"buyPlan(uint256)","argumentsValues":[${planId}]}]}`
      };
      
      fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  const cancelPlan = async () => {
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"walletId":"${userId}","contractAddress":"${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}","operations":[{"functionSignature":"cancelPlan()"}]}`
      };
      
      fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  const requestWithdraw = async () => {
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"walletId":"${userId}","contractAddress":"${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}","operations":[{"functionSignature":"requestWithdraw()"}]}`
      };
      
      fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  const withdraw = async () => {
    const options = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: `{"walletId":"${userId}","contractAddress":"${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}","operations":[{"functionSignature":"withdraw()"}]}`
      };
      
      fetch('https://protocol-sandbox.lumx.io/v2/transactions/custom', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  return (
    <WalletContext.Provider
      value={{
        createWallet,
        userWallet,
        userId,
        buyPlan,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
