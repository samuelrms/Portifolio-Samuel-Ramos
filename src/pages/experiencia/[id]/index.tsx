import { GetServerSideProps } from 'next';
// import Prismic from '@prismicio/client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LoadScreen } from '../../../components';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/ExperienceDynamicStyles';
import { Experience as IExperience } from '../../../types/Experience.types';

export default function Experience({ experience }: IExperience) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  const resume = experience.description_function[0].text;

  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          {experience?.enterprise} | Portifólio Samuel Ramos - Full-Stack
          Developer
        </title>
        <meta name="robots" content="all" />
        <meta name="description" content={resume} />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta property="og:image" content="experience?.thumb.url" />
        <meta property="og:image:secure_url" content="experience?.thumb.url" />
        <meta property="instagram:image" content="experience?.thumb.url" />
        <meta property="instagram:image:src" content="experience?.thumb.url" />
        <meta property="og:description" content={resume} />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta
          property="og:url"
          content={`samuelramos.dev/cursos/${experience?.uid}`}
        />
        <meta
          property="og:title"
          content={`${experience?.title} | Portifólio Samuel Ramos - Full-Stack Developer`}
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <main>
        <h1 className="purple">{experience?.enterprise}</h1>
        <section className="description">
          <h2>
            Periodo de {experience?.entry_year} até {experience?.exit_year}
          </h2>
        </section>
        <h2 className="function">
          Função: <b>{experience.function}</b>
        </h2>
        {experience.description_function.map(data =>
          data.spans[0]?.type ? (
            <h2 key={data.text}>{data.text}</h2>
          ) : (
            <p key={data.text}>{data.text}</p>
          )
        )}
        <div className="contentAction">
          <Link
            href={experience?.link_enterprise}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">Ver empresa</button>
          </Link>
          <Link className="backPage" href="/experiencia">
            <button type="button">Voltar</button>
          </Link>
        </div>
      </main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const prismic = getPrismicClient();
  const { id } = context.params;

  const response = await prismic.getByUID('experience_list', String(id), {});

  const experience = { ...response.data, uid: response.uid };

  return {
    props: { experience }
  };
};
