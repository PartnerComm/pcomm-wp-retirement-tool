import TaxonomyRepository from './taxonomyRepository';
import WordpressAjax from './wordpressAjax';

const repositories = {
  taxonomy: TaxonomyRepository,
  wp: WordpressAjax
}

export const RepositoryFactory = {
  get: name => repositories[name]
};