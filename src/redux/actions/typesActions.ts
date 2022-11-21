import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ICar, ICarCatalog, ICarCategory } from "../../interface";
import { ICarState } from "../reducers/typesReducers";

export enum CarActionType {
  SET_CARS = "SET_CARS",
  SET_CARS_LOADING = "SET_CARS_LOADING",
  SET_CARS_ERROR = "SET_CARS_ERROR",
  SET_CARS_CATEGORY = "SET_CARS_CATEGORY",
  SET_CARS_CATEGORY_LOADING = "SET_CARS_CATEGORY_LOADING",
  SET_CARS_CATEGORY_ERROR = "SET_CARS_CATEGORY_ERROR",
  SET_CAR = "SET_CAR",
  SET_CAR_LOADING = "SET_CAR_LOADING",
  SET_CAR_ERROR = "SET_CAR_ERROR",
}

export interface ISetCars {
  type: CarActionType.SET_CARS;
  payload: ICarCatalog;
}

export interface ISetCarsLoading {
  type: CarActionType.SET_CARS_LOADING;
  payload: boolean;
}

export interface ISetCarsError {
  type: CarActionType.SET_CARS_ERROR;
  payload: string | null;
}

export interface ISetCarsCategory {
  type: CarActionType.SET_CARS_CATEGORY;
  payload: ICarCategory[];
}

export interface ISetCarsCategoryLoading {
  type: CarActionType.SET_CARS_CATEGORY_LOADING;
  payload: boolean;
}

export interface ISetCarsCategoryError {
  type: CarActionType.SET_CARS_CATEGORY_ERROR;
  payload: string | null;
}

export interface ISetCar {
  type: CarActionType.SET_CAR;
  payload: ICar;
}

export interface ISetCarLoading {
  type: CarActionType.SET_CAR_LOADING;
  payload: boolean;
}

export interface ISetCarError {
  type: CarActionType.SET_CAR_ERROR;
  payload: string | null;
}

export type CarAction =
  | ISetCars
  | ISetCarsLoading
  | ISetCarsError
  | ISetCarsCategory
  | ISetCarsCategoryLoading
  | ISetCarsCategoryError
  | ISetCar
  | ISetCarLoading
  | ISetCarError;
export type CarDispatch = ThunkDispatch<ICarState, any, AnyAction>;
