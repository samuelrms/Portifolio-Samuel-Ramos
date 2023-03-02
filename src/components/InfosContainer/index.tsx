import Link from 'next/link';
import React, { FC } from 'react';
import { Props } from './InfosContainer.types';
import { CodeItem, Container, ContentCardCode } from './styles';

export const InfosContainer: FC<Props> = ({ data }) => (
  <Container>
    {data.presentation_area.map(value => (
      <CodeItem className="cardCode" key={value.title} data-aos="zoom-in">
        <p className="comment">{value.comment}</p>
        <div className="openObj">
          <p className="purple">{value.title}</p> {value.open}
        </div>
        <ContentCardCode>
          {value.label_function}
          <p className="blue"> {value.content_function}</p>
        </ContentCardCode>
        <ContentCardCode>
          {value.label_level}
          <p className="blue"> {value.content_level}</p>
        </ContentCardCode>
        <div>{value.close}</div>
      </CodeItem>
    ))}
    {data.presentation_skills.map(value => (
      <CodeItem key={value.title} data-aos="zoom-in">
        <div className="openObj">
          <p className="purple">{value.title}</p> {value.open}
        </div>
        <ContentCardCode>
          {value.label_tech_stack}
          <p className="blue"> {value.content_tech_stack}</p>
        </ContentCardCode>
        <ContentCardCode>
          {value.label_frameworks}
          <p className="blue"> {value.content_frameworks}</p>
        </ContentCardCode>
        <div>{value.close}</div>
      </CodeItem>
    ))}
    {data.about.map(value => (
      <CodeItem key={value.title} data-aos="zoom-in">
        <div className="openObj">
          <p className="purple">{value.title}</p> {value.open}
        </div>
        <ContentCardCode>
          {value.label}
          <p className="blue"> {value.resume}</p>
        </ContentCardCode>
        <div>{value.close}</div>
      </CodeItem>
    ))}
    <div data-aos="zoom-in">
      <Link href="/sobre">
        <button type="button">Saiba mais</button>
      </Link>
    </div>
  </Container>
);
