export default (state = null, action) => {
  switch (action.type) {
    case 'select_Libray':
      console.log('inside reducer', state);
      return action.payload;
    default:
      return state;
  }
};
