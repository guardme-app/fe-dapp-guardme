'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/configs/styles/globalStyles.css';
import { Menu } from '@/presentation/components/Menu/Menu';
import { usePathname } from 'next/navigation';

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
              {pathname !== '/sign-up' && pathname !== '/login' ? (
                <>
                  <Menu>{children}</Menu>
                </>
              ) : (
                <>{children}</>
              )}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </>
  );
}
