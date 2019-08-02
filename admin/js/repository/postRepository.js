import {Repository} from './Repository';

export default {
  get(resource, limit) {
    return Repository.get(`${resource}?per_page=${limit}`);
  },
  getById(id) {
    return Repository.get(`${resource}/${id}`);
  },
  post(data) {
    return Repository.post(
      `${resource}`,
      data
    );
  }
}
