// import {RepositoryFactory} from '../../repository/RepositoryFactory';
// const TaxonomyRepository = RepositoryFactory.get('taxonomy');

// const actions = {
//   GET_LOA_QUESTIONS: async (context) => {
//     const response = await TaxonomyRepository.get('loa_tool_question', 100);
//     if (response) {
//       context.dispatch('UPDATE_KEY', {key: 'allQuestions', value: response.data});
//     } 
//   },
//   UPDATE_KEY: (context, {key, value}) => {
//     const payload = {key: key, value: value};
//     context.commit('MUTATE_KEY', payload);
//   },
// }

// export default actions;

