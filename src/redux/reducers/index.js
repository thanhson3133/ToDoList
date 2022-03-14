import { GET_TASK_LIST } from "../constant";

const initialState = {
  taskList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_LIST:
      state.taskList = action.payload;
      return { ...state };
    
    default:
      return state;
  }
};
