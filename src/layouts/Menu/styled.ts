import emotionStyled from '@emotion/styled';

export const WithMenuBox = emotionStyled.div`
  display: flex;
`;

export const SideBarBox = emotionStyled.div`
  display: flex;
  height: 100dvh;
  position: fixed;
  background-color: transparent;
`;

export const ContentBox = emotionStyled.div`
  flex-grow: 1;
  margin-inline: 20dvw;
`;

export const MainBox = emotionStyled.main`
  display: flex;
  padding-block: 3dvh;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3dvh;
`;
