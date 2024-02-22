export const LOAD_POSTER = 'LOAD_POSTER';
export const DELETE_POSTER = 'DELETE_POSTER';
export const ADD_POSTER = 'ADD_POSTER';

const dataReducer = (state, action) => {
  switch (action.type) {
    case LOAD_POSTER:
      return {
        ...state,
        posters: action.payload,
      };
    case ADD_POSTER:
      return {
        ...state,
        posters: [...state.posters, action.payload],
      };
    case DELETE_POSTER: {
      const updatedPosters = state.posters.filter(
        (poster) => poster.id !== action.payload
      );
      return {
        ...state,
        posters: updatedPosters,
      };
    }
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
