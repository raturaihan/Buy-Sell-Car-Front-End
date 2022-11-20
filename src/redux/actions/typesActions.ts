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

export type CarAction = ISetCars | ISetCarsLoading | ISetCarsError | ISetCarsCategory | ISetCarsCategoryLoading | ISetCarsCategoryError
export type CarDispatch = ThunkDispatch<ICarState, any, AnyAction>;