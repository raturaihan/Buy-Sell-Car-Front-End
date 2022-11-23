import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  ICar,
  ICarCatalog,
  ICarCategory,
  IFavorite,
  IFavorites,
  IUser,
} from "../../interface";
import {
  ICarState,
  IFavoriteState,
  IUserState,
} from "../reducers/typesReducers";

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
  SET_SUGESTED_CAR = "SET_SUGGESTED_CAR",
  SET_SUGESTED_CAR_LOADING = "SET_SUGGESTED_CAR_LOADING",
  SET_SUGESTED_CAR_ERROR = "SET_SUGGESTED_CAR_ERROR",
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

export interface ISetSuggestedCars {
  type: CarActionType.SET_SUGESTED_CAR;
  payload: ICar[];
}

export interface ISetSuggestedCarsLoading {
  type: CarActionType.SET_SUGESTED_CAR_LOADING;
  payload: boolean;
}

export interface ISetSuggestedCarsError {
  type: CarActionType.SET_SUGESTED_CAR_ERROR;
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
  | ISetCarError
  | ISetSuggestedCars
  | ISetSuggestedCarsLoading
  | ISetSuggestedCarsError;
export type CarDispatch = ThunkDispatch<ICarState, any, AnyAction>;

export enum UserActionType {
  SET_USER = "SET_USER",
  SET_USER_LOADING = "SET_USER_LOADING",
  SET_USER_ERROR = "SET_USER_ERROR",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_LOADING = "UPDATE_USER_LOADING",
  UPDATE_USER_ERROR = "UPDATE_USER_ERROR",
  RESET_USER = "RESET_USER"
}

export interface ISetUser {
  type: UserActionType.SET_USER;
  payload: IUser;
}

export interface ISetUserLoading {
  type: UserActionType.SET_USER_LOADING;
  payload: boolean;
}

export interface ISetUserError {
  type: UserActionType.SET_USER_ERROR;
  payload: string | null;
}

export interface IUpdateUser {
  type: UserActionType.UPDATE_USER;
  payload: IUser;
}

export interface IUpdateUserLoading {
  type: UserActionType.UPDATE_USER_LOADING;
  payload: boolean;
}

export interface IUpdateUserError {
  type: UserActionType.UPDATE_USER_ERROR;
  payload: string | null;
}

export interface IResetUser {
  type: UserActionType.RESET_USER;
}

export type UserAction =
  | ISetUser
  | ISetUserError
  | ISetUserLoading
  | IUpdateUser
  | IUpdateUserError
  | IUpdateUserLoading
  | IResetUser;
export type UserDispatch = ThunkDispatch<IUserState, any, AnyAction>;

export enum FavoriteActionType {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
  GET_FAVORITES = "GET_FAVORITE",
  GET_FAVORITES_LOADING = "GET_FAVORITE_LOADING",
  GET_FAVORITES_ERROR = "GET_FAVORITE_ERROR",
  RESET_FAVORITE = "RESET_FAVORITE",
}

export interface IAddFavorite {
  type: FavoriteActionType.ADD_FAVORITE;
  payload: IFavorite;
}

export interface IRemoveFavorite {
  type: FavoriteActionType.REMOVE_FAVORITE;
  payload: IFavorite;
}

export interface IGetFavorites {
  type: FavoriteActionType.GET_FAVORITES;
  payload: IFavorites[];
}

export interface IGetFavoritesLoading {
  type: FavoriteActionType.GET_FAVORITES_LOADING;
  payload: boolean;
}

export interface IGetFavoritesError {
  type: FavoriteActionType.GET_FAVORITES_ERROR;
  payload: string | null;
}

export interface IResetFavorite {
  type: FavoriteActionType.RESET_FAVORITE;
}


export type FavoriteAction =
  | IAddFavorite
  | IRemoveFavorite
  | IGetFavorites
  | IGetFavoritesLoading
  | IGetFavoritesError
  | IResetFavorite;
export type FavoriteDispatch = ThunkDispatch<IFavoriteState, any, AnyAction>;
