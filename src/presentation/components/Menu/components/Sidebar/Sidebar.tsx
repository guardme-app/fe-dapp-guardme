'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { sidebarItems } from './utils/items';

import Link from 'next/link';
import { SidebarStyles } from './styles';
import guardMeLogo from '@/presentation/assets/guardme-logo.png';

export const Sidebar: React.FC = () => {
  //   const { path} = usePathname();

  return (
    <SidebarStyles.Container close={false}>
      <SidebarStyles.Content>
        <span>
          <Image
            src={guardMeLogo}
            alt="guard me logo"
            width={150}
            height={150}
          />
        </span>
        {sidebarItems.nav.map(item => (
          <Link key={item.label} href={item.path}>
            <SidebarStyles.Item
              key={item.label}
              //   $isSelected={router.pathname === item.path}
            >
              <div>
                <Image src={item.icon} width={20} alt="sidebar image" />
                <p>{item.label}</p>
              </div>
            </SidebarStyles.Item>
          </Link>
        ))}
      </SidebarStyles.Content>
    </SidebarStyles.Container>
  );
};
