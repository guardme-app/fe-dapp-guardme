'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { sidebarItems } from './utils/items';

import Link from 'next/link';
import { SidebarStyles } from './styles';
import guardMeLogo from '@/presentation/assets/guardme-logo.png';

export const Sidebar: React.FC = () => {
  const path = usePathname();

  return (
    <SidebarStyles.Container close={false}>
      <SidebarStyles.Content>
        <span>
          <Link href="/">
            <Image
              src={guardMeLogo}
              alt="guard me logo"
              width={150}
              height={150}
            />
          </Link>
        </span>
        {sidebarItems.nav.map(item => (
          <Link key={item.label} href={item.path}>
            <SidebarStyles.Item
              key={item.label}
              $isSelected={
                item.label === 'Hire Insurance'
                  ? path === '/'
                  : path === item.path
              }
            >
              <div>
                <Image src={item.icon} width={20} alt="sidebar image" />
                <p>{item.label}</p>
              </div>
            </SidebarStyles.Item>
          </Link>
        ))}
        {
          <SidebarStyles.SocialMedia>
            {sidebarItems.socialMedia.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={item.icon} width={24} height={24} alt={item.path} />
              </Link>
            ))}
          </SidebarStyles.SocialMedia>
        }
      </SidebarStyles.Content>
    </SidebarStyles.Container>
  );
};
