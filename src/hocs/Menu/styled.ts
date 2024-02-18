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
  margin-inline: 20dvw;
`;

export const MainBox = styled.main`
  display: flex;
  padding-block: 3dvh;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3dvh;
`;
