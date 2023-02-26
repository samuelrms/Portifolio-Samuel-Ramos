import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { Card, Container, Content } from './styles';
import { formContacts } from './formContacts';

export const Contact = () => (
  <Container>
    <SectionTitle
      title="Contato"
      description="Escolha a melhor forma para você de entrar em contato comigo."
    />
    <Content>
      {formContacts.map(data => (
        <div key={data.label} data-aos="zoom-in">
          <Link target="_blank" href={data.link}>
            <Card>
              {data.icon}
              <p>{data.label}</p>
            </Card>
          </Link>
        </div>
      ))}
    </Content>
  </Container>
);
