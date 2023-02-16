import Link from 'next/link';
import React, { FC } from 'react';
import { Props } from './InfosContainer.types';
import { CodeItem, Container } from './styles';

export const InfosContainer: FC<Props> = ({ data }) => (
  <Container>
    {data.presentation_area.map(value => (
      <CodeItem key={value.title} data-aos="zoom-in">
        <span className="comment">{value.comment}</span>
        <span className="purple">{value.title}</span> {value.open}
        <div>
          {value.label_function}
          <span className="blue"> {value.content_function}</span>
        </div>
        <div>
          {value.label_level}
          <span className="blue"> {value.content_level}</span>
        </div>
        {value.close}
      </CodeItem>
    ))}
    {data.presentation_skills.map(value => (
      <CodeItem key={value.title} data-aos="zoom-in">
        <span className="purple">{value.title}</span> {value.open}
        <div>
          {value.label_tech_stack}
          <span className="blue"> {value.content_tech_stack}</span>
        </div>
        <div>
          {value.label_frameworks}
          <span className="blue"> {value.content_frameworks}</span>
        </div>
        {value.close}
      </CodeItem>
    ))}
    {data.about.map(value => (
      <CodeItem key={value.title} data-aos="zoom-in">
        <span className="purple">{value.title}</span> {value.open}
        <div>
          {value.label}
          <span className="blue"> {value.resume}</span>
        </div>
        {value.close}
      </CodeItem>
    ))}
    <div data-aos="zoom-in">
      <button type="button">
        <Link href="/sobre">Saiba mais</Link>
      </button>
    </div>
  </Container>
);
