import account from '@/presentation/assets/sidebar/account.png';
import shield from '@/presentation/assets/sidebar/shield.png';
import locker from '@/presentation/assets/sidebar/locker.png';

//social media
import website from '@/presentation/assets/sidebar/website.png';
import x from '@/presentation/assets/sidebar/x.png';

export const sidebarItems = {
  nav: [
    {
      label: 'Hire Insurance',
      icon: locker,
      path: '/',
    },
    {
      label: 'My Insurances',
      icon: shield,
      path: '/my-insurances',
    },

    {
      label: 'Account',
      icon: account,
      path: '/account',
    },
  ],

  socialMedia: [
    {
      icon: website,
      path: 'https://www.facebook.com',
    },
    {
      icon: x,
      path: 'https://x.com',
    },
  ],
};
