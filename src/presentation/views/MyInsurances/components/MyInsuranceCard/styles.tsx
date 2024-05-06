import styled from '@emotion/styled';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem 0;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral['white']};
  min-width: 18rem;
  box-shadow:
    20px 20px 60px #917bff7b,
    -20px -20px 60px #fff;

  > img {
    object-fit: contain;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.primary['01']};
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 1rem 0.5rem;

    > span {
      text-align: center;
      color: ${({ theme }) => theme.colors.primary['01']};
      font-weight: 700;
    }

    > p {
      text-align: center;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem 0;
      width: 7rem;
      margin-left: 0.5rem;
    }
  }
`;

export const MyInsuranceStyles = {
  Card,
};
