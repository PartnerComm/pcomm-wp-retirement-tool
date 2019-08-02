// import {sortByTermOrder} from '../../../public/js/helpers/sort';
// import {sortByPostOrder} from '../../../public/js/helpers/sort';

export default {
  GET_KEY: (state) => (key) => {
    return state[key];
  },
  GET_ANSWERS: (state, getters) => {
    const listOfParents = getters.GET_KEY('answerChoices').filter(e => e.parent === 0).map(elem => elem.id);
    console.log(listOfParents);
    return getters.GET_KEY('answerChoices').filter(e => getters.GET_KEY('answerChoices').filter(elem => elem.parent === e.id || listOfParents.indexOf(e.parent) > -1 ).length === 0);
  }
}