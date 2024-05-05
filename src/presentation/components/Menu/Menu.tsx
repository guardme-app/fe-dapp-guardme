'use client';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

export const Menu: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar></Sidebar>
    </>
  );
};
