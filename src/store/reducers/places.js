import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';
import phImage from "../../assets/japan.jpg";

const initialState = {
  placeName : '',
  places : [],
  placeSelected : null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
          ...state,
          places : state.places.concat({
            name : action.placeName,
            key : Math.random().toString(),
            image : phImage
          }),
          placeName : '',
      };
    case DELETE_PLACE :
      return {
          ...state,
        places : state.places.filter(place => place.key !== state.placeSelected.key),
        placeSelected : null
      };
    default :
      return state;
  }
};

export default reducer;
