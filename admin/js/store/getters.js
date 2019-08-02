// import {sortByTermOrder} from '../../../public/js/helpers/sort';
// import {sortByPostOrder} from '../../../public/js/helpers/sort';

// export default {
//   FIRST_QUESTION_ANSWERS: (state) => {
//     return state.allQuestions.filter(e => parseInt(e.parent) === parseInt(state.allQuestions[0].id)).map(e => {
//       return {name: e.name, slug: e.slug, answers: e.answers.sort(sortByTermOrder), order: e.term_order, type: e.question_type}
//     }).sort(sortByPostOrder);
//   }
// }