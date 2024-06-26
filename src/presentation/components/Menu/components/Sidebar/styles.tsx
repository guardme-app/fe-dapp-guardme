import { border, borderBottom } from '@mui/system';
import styled from '@emotion/styled';

interface IMenuItemProps {
  $isSelected?: boolean;
}

const Container = styled.div<{ close: boolean }>`
  position: sticky;
  bottom: 0;
  width: 240px;
  padding-top: 3rem;
  min-width: 15rem;
  height: 100vh;
  background: ${({ theme }) => theme.colors.gradient['sidebar']};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 965px) {
    display: ${({ close }) => (close ? 'none' : 'flex')};
    position: absolute;
    z-index: 50;
    width: 100%;
    overflow-y: auto;
    padding-bottom: 3rem;
    background-color: ${({ theme }) => theme.colors.primary['01']};
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.35rem 0;

  > span {
    position: absolute;
    top: -60px;
    left: 40px;

    > a {
      > img {
        object-fit: contain;
      }
    }
  }

  @media (max-width: 965px) {
    justify-content: unset;
    overflow-y: auto;
  }
`;

const Item = styled.div<IMenuItemProps>`
  position: relative;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['white']};

  font-size: 1rem;
  min-width: 10rem;
  background: ${({ $isSelected, theme }) =>
    $isSelected
      ? `
        ${theme.colors.primary['05']};
      `
      : 'none'};
  z-index: 11;
  height: 2.75rem;
  font-weight: 700;
  margin-bottom: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary['05']};
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.75rem;
    gap: 0 0.75rem;
    white-space: nowrap;
  }
`;

const SocialMedia = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral['white']};
  padding: 1rem 0 0 0;
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 0 1.5rem;
  margin-top: 5rem;
`;

export const SidebarStyles = {
  Container,
  Content,
  Item,
  SocialMedia,
};
