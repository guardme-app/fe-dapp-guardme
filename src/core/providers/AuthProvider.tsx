import { GoogleOAuthProvider } from '@react-oauth/google';

interface IAuthProvider {
  children: JSX.Element;
}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="513824806853-ut23ir42ce1hubdesajiavcnek4abfon.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
};
