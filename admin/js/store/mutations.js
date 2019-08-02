export default {
  MUTATE_KEY: (state, {key, value}) => {
    state[key] = value;
  },
};
