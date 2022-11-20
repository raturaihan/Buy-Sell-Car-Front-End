import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { ICar, ICarCatalog } from "../../interface";
import { ICarState } from "../reducers/typesReducers";

export enum CarActionType {
    SET_CARS = "SET_CARS",
    SET_CARS_LOADING = "SET_CARS_LOADING",
    SET_CARS_ERROR = "SET_CARS_ERROR"
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

export type CarAction = ISetCars | ISetCarsLoading | ISetCarsError
export type CarDispatch = ThunkDispatch<ICarState, any, AnyAction>;