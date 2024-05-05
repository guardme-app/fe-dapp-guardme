import account from '@/presentation/assets/sidebar/account.png';
import shield from '@/presentation/assets/sidebar/shield.png';

export const sidebarItems = {
  nav: [
    {
      label: 'Hire Insurance',
      icon: shield,
      path: '/hire-insurance',
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
      icon: 'Facebook',
      path: 'https://www.facebook.com',
    },
    {
      icon: 'Instagram',
      path: 'https://www.instagram.com',
    },
    {
      icon: 'Twitter',
      path: 'https://www.twitter.com',
    },
  ],
};
