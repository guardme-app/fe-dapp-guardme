'use client';

import { usePathname } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { Menu } from '@/presentation/components/Menu/Menu';
import { Modal } from '@/presentation/components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import '@/configs/styles/globalStyles.css';
import { AuthProvider } from '@/core/providers/AuthProvider';
import { WalletProvider } from '@/core/providers/WalletProvider';

import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <WalletProvider>
             
              <ThemeProvider>
              <Modal />
                <ToastContainer />
                <AuthProvider>
                  {pathname !== '/sign-up' && pathname !== '/login' ? (
                    <>
                      <Menu>{children}</Menu>
                    </>
                  ) : (
                    <>{children}</>
                  )}
                </AuthProvider>
              </ThemeProvider>
            </WalletProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
