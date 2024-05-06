import styled from '@emotion/styled';

const Container = styled.div`
  height: 4rem;
  position: fixed;
  right: 0;
  width: calc(100% - 240px);
`;
const Content = styled.div`
  padding: 0 2.5rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > img {
    object-fit: scale-down;
    margin-bottom: -0.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0 1.5rem;
  }
`;

export const HeaderStyles = {
  Container,
  Content,
};
