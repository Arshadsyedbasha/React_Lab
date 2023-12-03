function Reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      50;
      return state;
  }
}
export default Reducer;
