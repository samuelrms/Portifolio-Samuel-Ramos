import { useFetchData } from '../hooks';
import { searchRepo, urlGithub, urlReadmeGithub } from '../mocks';
import { ProjectProps, Projects } from '../types/Home.types';
import { Project, ReadmeContent } from '../types/Project';
import { decodeBase64 } from './decodeBase64';

export const projectByGithub = async (): Promise<Project[]> =>
  useFetchData<Project[]>(urlGithub).then(response => response);

export const projectSearchByGithub = async <T>(url: string): Promise<T> =>
  useFetchData<T>(url).then(response => response);

export const projectsGetServerSideProps = async () => {
  const projects = await Promise.all(
    (
      await projectSearchByGithub<ProjectProps[]>(urlGithub)
    ).map(async project => {
      try {
        const readmeData = await useFetchData<ReadmeContent>(
          urlReadmeGithub(project.name).readme
        );
        return {
          slug: project.name,
          title: project.name,
          thumb: decodeBase64(readmeData.content),
          permissions: null,
          type: project.language,
          ...project
        };
      } catch (error) {
        return {
          slug: project.name,
          title: project.name,
          thumb: null,
          permissions: null,
          type: project.language,
          ...project
        };
      }
    })
  );

  return projects.filter(project => project.slug !== 'samuelrms');
};

export const searchProjects = async (filter: string) => {
  const projects = await Promise.all(
    (
      await projectSearchByGithub<Projects>(searchRepo(filter))
    ).items.map(async project => {
      try {
        const readmeData = await useFetchData<ReadmeContent>(
          urlReadmeGithub(project.name).repo
        );
        return {
          slug: project.name,
          title: project.name,
          ...project,
          thumb: decodeBase64(readmeData.content),
          permissions: null,
          type: project.language
        };
      } catch (error) {
        return {
          slug: project.name,
          title: project.name,
          ...project,
          thumb: null,
          permissions: null,
          type: project.language
        };
      }
    })
  );

  return projects.filter(project => project.slug !== 'samuelrms');
};
