import { GET_JOBS } from "../actions";
import { GET_ERROR } from "../actions";

const initialState = {
      jobs: [],
      erro: false,
    };

const jobsSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS: 
      return {
        ...state,
        jobs: [...action.payload],
      };
  
      case GET_ERROR:
        return {
          ...state,
          error: true,
        };
   

    default:
      return state;
  }
};

export default jobsSearchReducer;