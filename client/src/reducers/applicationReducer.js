export const ADD_POSTER = 'ADD_POSTER';
export const LOAD_POSTERS = 'LOAD_POSTERS';


const reducer = (state, action) => {

  switch(action.type) {

    case LOAD_POSTERS:
      return {
        ...state,
        posters: [...state.posters, ...action.posters],
        loading: false
      }

    case ADD_POSTER:
      return {
        ...state,
        posters: [...state.posters, action.poster]
      }

    default:
      throw new Error(`Unkown Action ${action.type}`)
  }
}

export default reducer;