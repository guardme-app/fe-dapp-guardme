import { injectGlobal } from '@emotion/css';
import { Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const GlobalStyles = injectGlobal`
  
  html, body {
    font-family: ${openSans.style['fontFamily']};
  }

  /* Handle */
  ::scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(85, 85, 85, 0.8);
  }

  ::-webkit-scrollbar-thumb:horizontal{
    display: none;
  }

  /* Handle on hover */
  ::scrollbar-thumb:hover {
    background: rgba(2, 85, 85, 0.5);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(24, 24, 24, 0.62);
  }  

  .Toastify__toast-container {
    z-index: 1000000;
  }
`;
