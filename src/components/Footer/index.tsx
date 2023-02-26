import Link from 'next/link';
import { formContacts } from '../Contact/formContacts';
import { Tooltip } from '../Tooltip';
import { Container } from './styles';

export const Footer = () => {
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
          {formContacts.slice(0, 3).map(data => (
            <Tooltip key={data.label} tooltip={data.label} arrow>
              <Link target="_blank" href={data.link}>
                {data.icon}
              </Link>
            </Tooltip>
          ))}
        </section>
      </div>
    </Container>
  );
};
