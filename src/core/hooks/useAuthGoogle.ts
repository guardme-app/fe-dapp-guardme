import { useEffect, useState } from 'react';
import { useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

import { useWallet } from './useWallet';

type UseAuthGoogleResult = {
  signIn: () => void;
  user: any | null;
};

export function useAuthGoogle(): UseAuthGoogleResult {
  const [user, setUser] = useState<any | null>(null);
  const { createWallet, userId, buyPlan } = useWallet();

  useEffect(() => {
    if(userId) {
      console.log(userId);
      // buyPlan(1);
    }
  }, [userId])

  const signIn = useGoogleLogin({
    async onSuccess(tokenResponse){
      console.log(tokenResponse);
      setUser(tokenResponse);

      createWallet();
    },
  });

  return { signIn, user };
}
