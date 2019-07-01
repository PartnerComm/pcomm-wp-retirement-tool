import {Repository} from './Repository';
const resource = 'retirement_feedback';

export default {
  get() {
    return Repository.get(`${resource}`);
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
