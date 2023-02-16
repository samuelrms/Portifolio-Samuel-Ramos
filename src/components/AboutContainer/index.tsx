import React, { FC } from 'react';
import { Props } from './AboutContainer.types';
import { CodeItem, Container, ContentImage } from './styles';

export const AboutContainer: FC<Props> = ({ data }) => (
  <Container className="cardCode">
    <div className="contentTop">
      <ContentImage data-aos="zoom-in">
        <img
          alt={data.image_person.alt}
          src={data.image_person.url}
          loading="lazy"
        />
      </ContentImage>
      <CodeItem className="presentation contentObj" data-aos="zoom-in">
        <p>{data.presentation}</p>
        <p>{data.experience}</p>
        <p>{data.motivational}</p>
      </CodeItem>
    </div>
    <CodeItem className="contentObj" key={data.about_me} data-aos="zoom-in">
      <div className="openObj">
        <p className="purple">
          {data.title_resume} {`\u007B`}
        </p>
      </div>
      {data.resume.map((value, i) => (
        <div key={i}>
          <p>{value.text}</p>
        </div>
      ))}
      <p className="purple">{`\u007D`}</p>
    </CodeItem>
  </Container>
);
