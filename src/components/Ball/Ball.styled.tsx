import styled, { keyframes } from 'styled-components/macro';

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
  left: 50vw;
  border-radius: 50%;
  background-color: var(--fg-color);
  transition-property: background transform;
  transition-duration: 1s;

  &:hover {
    background: blue;
    transform: scale(2);
  }
`;
