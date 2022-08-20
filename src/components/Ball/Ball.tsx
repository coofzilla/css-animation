import * as StyledBall from 'components/Ball/Ball.styled';

interface BallProps {
  someProp?: any;
}

const Ball = ({ someProp }: BallProps) => {
  return (
    <StyledBall.Ball>
      <div>.</div>
    </StyledBall.Ball>
  );
};

export default Ball;
