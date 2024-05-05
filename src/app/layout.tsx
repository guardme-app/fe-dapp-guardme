'use client';

import { usePathname } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@/core/providers/ThemeProvider';
import { Menu } from '@/presentation/components/Menu/Menu';

import '@/configs/styles/globalStyles.css';
import { AuthProvider } from '@/core/providers/AuthProvider';

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
            <ThemeProvider>
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
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
