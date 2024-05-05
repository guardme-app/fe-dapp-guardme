import styled from '@emotion/styled';
import { openSans } from '@/configs/styles/globalStyles';
const Default = styled.button`
  font-family: ${openSans};
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary['01']};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.neutral['white']};
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Outlined = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${openSans};
  gap: 0 0.5rem;
  position: relative;
  width: 9.375rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.neutral['white']};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.primary['01']};
  font-size: 1rem;
  font-weight: 700;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  border: 2px solid ${({ theme }) => theme.colors.primary['01']};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral['white']};
    background: ${({ theme }) => theme.colors.primary['02']};
    border: 2px solid ${({ theme }) => theme.colors.primary['02']};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ButtonStyles = {
  Default,
  Outlined,
};
