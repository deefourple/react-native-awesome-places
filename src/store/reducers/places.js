import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
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
        selectedPlace : null
      };
    case SELECT_PLACE :
      return {
          ...state,
        placeSelected : state.places.find(place => place.key === action.placeKey)
      };
    case DESELECT_PLACE :
      return {
          ...state,
        selectedPlace : null
      };
    default :
      return state;
  }
};

export default reducer;
