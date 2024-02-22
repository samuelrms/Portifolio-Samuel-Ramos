import { GetServerSideProps } from 'next';
// import Prismic from '@prismicio/client';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LoadScreen, Thumb } from '../../../components';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/JobDynamicStyles';
import { Job as IJob } from '../../../types/Job.types';

export default function Job({ job }: IJob) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  const resume = job.description[0].text;

  return (
    <Container>
      <Head>
        <meta charSet="utf-8" />
        <meta name="language" content="pt-BR" />
        <title>
          {job?.title} | Portifólio Samuel Ramos - Full-Stack Developer
        </title>
        <meta name="robots" content="all" />
        <meta name="description" content={resume} />
        <meta
          name="keywords"
          content="nodejs-javascript-typescript-react-next-nestjs-wordpress-freelancer"
        />
        <meta property="og:image" content={job?.thumb.url} />
        <meta property="og:image:secure_url" content={job?.thumb.url} />
        <meta property="instagram:image" content={job?.thumb.url} />
        <meta property="instagram:image:src" content={job?.thumb.url} />
        <meta property="og:description" content={resume} />
        <meta name="author" content="Samuel Ramos" />

        <meta property="og:type" content="page" />
        <meta
          property="og:url"
          content={`samuelramos.dev/cursos/${job?.uid}`}
        />
        <meta
          property="og:title"
          content={`${job?.title} | Portifólio Samuel Ramos - Full-Stack Developer`}
        />
        <meta property="article:author" content="Samuel Ramos" />
      </Head>
      <Thumb title={job?.title} type={job?.type} imgURL={job?.thumb.url} />
      <main>
        {job.description.map(data =>
          data.spans[0]?.type ? (
            <h2 key={data.text}>{data.text}</h2>
          ) : (
            <p key={data.text}>{data.text}</p>
          )
        )}
        <div className="contentAction">
          <Link href={job?.project_link} target="_blank" rel="noreferrer">
            <button type="button">Ver trabalho</button>
          </Link>
          <Link className="backPage" href="/trabalhos">
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

  const response = await prismic.getByUID('jobs', String(id), {});

  const job = { ...response.data, uid: response.uid };

  return {
    props: { job }
  };
};
