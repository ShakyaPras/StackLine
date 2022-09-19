const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE": {
      state = action.payload;
      return state;
    }
    default: {
      if (action.payload) {
        state = action.payload;
      }
      return state;
    }
  }
};

export default dataReducer;
