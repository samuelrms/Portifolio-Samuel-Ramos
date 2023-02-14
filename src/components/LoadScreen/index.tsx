import {
  Container,
  SpinnerContainer,
  SpinnerContent,
  SpinnerElement
} from './styles';

export const LoadScreen = () => {
  return (
    <Container>
      <SpinnerContainer>
        <SpinnerContent className="sk-circle">
          <SpinnerElement className="sk-circle1 sk-child" />
          <SpinnerElement className="sk-circle2 sk-child" />
          <SpinnerElement className="sk-circle3 sk-child" />
          <SpinnerElement className="sk-circle4 sk-child" />
          <SpinnerElement className="sk-circle5 sk-child" />
          <SpinnerElement className="sk-circle6 sk-child" />
          <SpinnerElement className="sk-circle7 sk-child" />
          <SpinnerElement className="sk-circle8 sk-child" />
          <SpinnerElement className="sk-circle9 sk-child" />
          <SpinnerElement className="sk-circle10 sk-child" />
          <SpinnerElement className="sk-circle11 sk-child" />
          <SpinnerElement className="sk-circle12 sk-child" />
        </SpinnerContent>
      </SpinnerContainer>
    </Container>
  );
};
