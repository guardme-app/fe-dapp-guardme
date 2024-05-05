"use client";

import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider as ThemeEmotion } from "@emotion/react";
import { StyledEngineProvider, ThemeProvider as ThemeMUI } from "@mui/material";
import { RecoilRoot } from "recoil";

import { theme, themeMUI } from "@/configs/styles/theme";

import "@/configs/styles/globalStyles";
import "@/configs/styles/globalStyles.css";

interface IThemeProvider {
  children: React.ReactNode;
}

const cache = createCache({
  key: "css",
  prepend: true,
});

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <RecoilRoot>
        <CacheProvider value={cache}>
          <ThemeMUI theme={themeMUI}>
            <ThemeEmotion theme={theme}>{children}</ThemeEmotion>
          </ThemeMUI>
        </CacheProvider>
      </RecoilRoot>
    </StyledEngineProvider>
  );
};
