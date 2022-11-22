import { CarAction, CarActionType } from "../actions/typesActions";
import { ICarState } from "./typesReducers";

const initialState: ICarState = {
  cars: { CurrentPage: 1, TotalData: 0, TotalPage: 0, Limit: 10, Data: [] },
  carsLoading: false,
  carsError: null,
  categories: [],
  categoriesLoading: false,
  categoriesError: null,
  car: {
    CarID: 0,
    car_name: "",
    car_year: 0,
    car_img: "",
    price: 0,
    color: "",
    category_id: 0,
    transmission_type: "",
    brand_name: "",
    stnk_date: 0,
    stnk_month: 0,
    stnk_year: 0,
    car_location: "",
    description: "",
    Category: { category_id: 0, category_name: "" },
  },
  carLoading: false,
  carError: null,
  suggestedCars: [],
  suggestedCarsLoading: false,
  suggestedCarsError: null,
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
    case CarActionType.SET_CARS_CATEGORY:
      return { ...state, categories: action.payload };
    case CarActionType.SET_CARS_CATEGORY_LOADING:
      return { ...state, categoriesLoading: action.payload };
    case CarActionType.SET_CARS_CATEGORY_ERROR:
      return { ...state, carsError: action.payload };
    case CarActionType.SET_CAR:
      return { ...state, car: action.payload };
    case CarActionType.SET_CAR_LOADING:
      return { ...state, carLoading: action.payload };
    case CarActionType.SET_CAR_ERROR:
      return { ...state, carError: action.payload };
    case CarActionType.SET_SUGESTED_CAR:
      return { ...state, suggestedCars: action.payload };
    case CarActionType.SET_SUGESTED_CAR_LOADING:
      return { ...state, suggestedCarsLoading: action.payload };
    case CarActionType.SET_SUGESTED_CAR_ERROR:
      return { ...state, suggestedCarsError: action.payload };
    default:
      return state;
  }
}
