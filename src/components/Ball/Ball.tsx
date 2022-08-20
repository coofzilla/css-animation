import * as StyledBall from 'components/Ball/Ball.styled';

interface BallProps {
  someProp?: any;
}

const Ball = ({ someProp }: BallProps) => {
  return (
    <div>
      <div>CLICK ME</div>
      <StyledBall.Ball />
    </div>
  );
};

export default Ball;
