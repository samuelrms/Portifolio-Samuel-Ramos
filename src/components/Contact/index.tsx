import Link from 'next/link';
import { FC } from 'react';
import { SectionTitle } from '../SectionTitle';
import { Card, Container, Content } from './styles';
import { formContacts } from './formContacts';
import { Props } from '../../types/Contact.types';

export const Contact: FC<Props> = ({ contact }) => (
  <Container>
    <SectionTitle title={contact.title} description={contact.subtitle} />
    <Content>
      {contact.contacts.map((data, index) => (
        <div key={data.label_contact} data-aos="zoom-in">
          <Link target="_blank" href={data.link.url}>
            <Card>
              {formContacts[index].icon}
              <p>{data.label_contact}</p>
            </Card>
          </Link>
        </div>
      ))}
    </Content>
  </Container>
);
