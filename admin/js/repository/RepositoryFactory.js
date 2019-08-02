import TaxonomyRepository from './taxonomyRepository';
import PostRepository from './postRepository';

const repositories = {
  taxonomy: TaxonomyRepository,
  post: PostRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name]
};