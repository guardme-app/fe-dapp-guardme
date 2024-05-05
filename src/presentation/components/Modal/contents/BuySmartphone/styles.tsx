import styled from '@emotion/styled';

const Container = styled.div`
  width: 31.25rem;
  background-color: ${({ theme }) => theme.colors.neutral['white']};
  border-radius: 0.5rem;
  padding: 1.5625rem;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;

  h4 {
    color: ${({ theme }) => theme.colors.neutral['black']};
    font-size: 1.25rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  img {
    top: 0;
    right: 0;
    position: absolute;
    width: 1.25rem;
    cursor: pointer;
  }
`;

const Options = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Option = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.neutral['black']};
    font-weight: 700;
    font-size: 1.25rem;

    > p {
      color: ${({ theme }) => theme.colors.primary['03']};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  > input {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.neutral['white']};
    border: 1px solid ${({ theme }) => theme.colors.primary['03']};
    color: ${({ theme }) => theme.colors.neutral['black']};
    padding: 0 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    -webkit-appearance: none;
  }

  > button {
    width: 100%;
  }
`;

export const BuySmartphoneStyles = {
  Container,
  Header,
  Options,
  Option,
  ButtonsContainer,
};
