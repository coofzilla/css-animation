import styled, { keyframes, css } from 'styled-components/macro';

export const slideRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50vw);
  }
`;

export const Ball = styled.div`
  --fg-color: purple;
  height: 5vmin;
  width: 5vmin;
  border-radius: 50%;
  background-color: var(--fg-color);
  animation: ${slideRight} var(--duration) var(--easing) infinite;
`;
