export const LOAD_POSTERS = 'LOAD_POSTERS';
export const ADD_POSTER = 'ADD_POSTER';
export const DELETE_POSTER = 'DELETE_POSTER';

const dataReducer = (state, action) => {
  switch (action.type) {
    case LOAD_POSTERS:
      return {
        ...state,
        posters: action.payload,
      };
    case ADD_POSTER:
      return {
        ...state,
        posters: [...state.posters, action.payload],
      };
    case DELETE_POSTER:
      return {
        ...state,
        posters: state.posters.filter((poster) => poster.id !== action.payload),
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export default dataReducer;
