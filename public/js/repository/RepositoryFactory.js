import TaxonomyRepository from './taxonomyRepository';
import PostRepository from './postRepository';
import WordpressAjax from './wordpressAjax';


const repositories = {
  taxonomy: TaxonomyRepository,
  post: PostRepository,
  wp: WordpressAjax
}

export const RepositoryFactory = {
  get: name => repositories[name]
};