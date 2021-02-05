export default (state = null, action) => {
  switch (action.type) {
    case 'select_Libray':
      return action.payload;
    default:
      return state;
  }
};
