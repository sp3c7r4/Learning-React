const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1}
    case 'decrement':
      return {...state, count: state.count - 1}
    case `incrementBy`:
      return {...state, count: state.count + action.value}
    default:
      return {...state}
  }
}
export default reducer;