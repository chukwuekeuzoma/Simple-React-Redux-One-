const conterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    //  this is when you add a payload
    //   return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default conterReducer;
