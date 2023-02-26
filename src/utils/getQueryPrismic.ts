import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

const prismic = getPrismicClient();

export const projectResponse = async (type: string) =>
  prismic.query([Prismic.Predicates.at('document.type', `${type}`)], {
    orderings: '[document.first_publication_data desc]'
  });
