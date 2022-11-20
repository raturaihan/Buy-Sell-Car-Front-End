import { CarAction, CarActionType } from "../actions/typesActions";
import { ICarState } from "./typesReducers";

const initialState: ICarState = {
  cars: { CurrentPage: 1, TotalData: 0, TotalPage: 0, Limit: 10, Data: []},
  carsLoading: false,
  carsError: null,
};

export default function carReducer(
  state = initialState,
  action: CarAction
): ICarState {
  switch (action.type) {
    case CarActionType.SET_CARS:
      return { ...state, cars: action.payload };
    case CarActionType.SET_CARS_LOADING:
      return { ...state, carsLoading: action.payload };
    case CarActionType.SET_CARS_ERROR:
      return { ...state, carsError: action.payload };
    default:
      return state;
  }
}
