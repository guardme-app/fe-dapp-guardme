import { useState } from 'react';
import { useGoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google';

type UseAuthGoogleResult = {
  signIn: () => void;
  user: any | null;
};

export function useAuthGoogle(): UseAuthGoogleResult {
  const [user, setUser] = useState<any | null>(null);

  const signIn = useGoogleLogin({
    onSuccess(tokenResponse) {
      console.log(tokenResponse);
      setUser(tokenResponse);
    },
  });

  return { signIn, user };
}
