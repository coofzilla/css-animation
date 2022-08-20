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
  height: 5vmin;
  width: 5vmin;
  border-radius: 50%;
  background: radial-gradient(circle at bottom right, red, orange);
  animation: ${slideRight} 1s linear infinite;
`;
