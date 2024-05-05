'use client';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Container, Content } from './styles';

interface IMenuProps {
  children: React.ReactNode;
}
export const Menu: React.FC<IMenuProps> = ({ children }: IMenuProps) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  );
};
