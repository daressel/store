import styled from 'styled-components';

export const WithMenuBox = styled.div`
  display: flex;
`;

export const SideBarBox = styled.div`
  display: flex;
  height: 100dvh;
  position: fixed;
  background-color: transparent;
`;

export const ContentBox = styled.div`
  flex-grow: 1;
  margin-inline: 15dvw;
`;

export const MainBox = styled.main`
  display: flex;
  padding-top: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5dvh;
`;
