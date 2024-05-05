import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { ThemeProvider } from '@/core/providers/ThemeProvider';
import '@/configs/styles/globalStyles.css';
import { Menu } from '@/presentation/components/Menu/Menu';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider>
              {true ? (
                <>
                  <Menu />
                  {children}
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
