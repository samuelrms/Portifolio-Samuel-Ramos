import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram
} from 'react-icons/ai';
import { github, instagram, linkedIn } from '../../constants';
import { Container } from './styles';

export const Footer = () => {
  const handleRedirect = (url: string) => {
    window.open(url);
  };

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollToTop}>
          Voltar ao topo
        </button>
        <section>
          <AiFillInstagram onClick={() => handleRedirect(instagram)} />
          <AiOutlineGithub onClick={() => handleRedirect(github)} />
          <AiFillLinkedin onClick={() => handleRedirect(linkedIn)} />
        </section>
      </div>
    </Container>
  );
};
