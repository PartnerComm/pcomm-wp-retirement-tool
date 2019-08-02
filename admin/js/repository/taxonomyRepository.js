import {Repository} from './Repository';

export default {
  get(taxonomy, per_page = 100) {
    return Repository
      .get(`${taxonomy}?per_page=${per_page}`);
  }
}
