import { FavoriteAction, FavoriteActionType } from "../actions/typesActions";
import { IFavoriteState } from "./typesReducers";

const initialState: IFavoriteState = {
  carFavorites:[],
  carFavoritesLoading: false,
  carFavoritesError: null,
  addFavorite: {
    favorite_id: 0,
    user_id: 0,
    car_id: 0,
  },
  removeFavorite: {
    favorite_id: 0,
    user_id: 0,
    car_id: 0,
  },
};

export default function favoriteReducer(
    state = initialState,
    action: FavoriteAction
): IFavoriteState {
    switch (action.type) {
        case FavoriteActionType.ADD_FAVORITE:
            return {...state, addFavorite: action.payload};
        case FavoriteActionType.REMOVE_FAVORITE:
            return {...state, removeFavorite: action.payload};
        case FavoriteActionType.GET_FAVORITES:
            return {...state, carFavorites: action.payload};
        case FavoriteActionType.GET_FAVORITES_LOADING:
            return {...state, carFavoritesLoading: action.payload};
        case FavoriteActionType.GET_FAVORITES_ERROR:
            return {...state, carFavoritesError: action.payload};
        default:
            return state;
    }
}
