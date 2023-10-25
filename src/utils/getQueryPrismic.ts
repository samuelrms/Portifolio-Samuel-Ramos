import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';
import { urlGithub } from '../mocks';
import { useFetchData } from '../hooks';
import { Project } from '../types/Project';

const prismic = getPrismicClient();

export const projectResponse = async (type: string) =>
  prismic.query([Prismic.Predicates.at('document.type', `${type}`)], {
    orderings: '[document.first_publication_data desc]'
  });

export const projectByGithub = async (): Promise<Project[]> =>
  useFetchData<Project[]>(urlGithub).then(response => response);
