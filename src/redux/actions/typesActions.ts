import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {
  ICar,
  ICarCatalog,
  ICategory,
  ICategoryPagination,
  ICoupon,
  IFavorite,
  IFavorites,
  IGames,
  ITestDrive,
  ITestDrives,
  ITestDrivesPagination,
  ITransactionPagination,
  IUser,
} from "../../interface";
import {
  ICarState,
  ICategoryState,
  IFavoriteState,
  ITestDriveState,
  ITransactionState,
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
  UPDATE_CAR = "UPDATE_CAR",
  UPDATE_CAR_ERROR = "UPDATE_CAR_ERROR",
  DELETE_CAR = "DELETE_CAR",
  CREATE_CAR = "CREATE_CAR"
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
  payload: ICategory[];
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

export interface IUpdateCar {
  type: CarActionType.UPDATE_CAR;
  payload: ICar;
}

export interface IUpdateCarError {
  type: CarActionType.UPDATE_CAR_ERROR;
  payload: string | null;
}

export interface IDeleteCar {
  type: CarActionType.DELETE_CAR;
  payload: ICar;
}

export interface ICreateCar {
  type: CarActionType.CREATE_CAR;
  payload: ICar;
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
  | ISetSuggestedCarsError
  | IUpdateCar
  | IUpdateCarError
  | IDeleteCar
  | ICreateCar;
export type CarDispatch = ThunkDispatch<ICarState, any, AnyAction>;

export enum UserActionType {
  SET_USER = "SET_USER",
  SET_USER_LOADING = "SET_USER_LOADING",
  SET_USER_ERROR = "SET_USER_ERROR",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_LOADING = "UPDATE_USER_LOADING",
  UPDATE_USER_ERROR = "UPDATE_USER_ERROR",
  RESET_USER = "RESET_USER",
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

export enum TestDriveActionType {
  REQUEST_TEST_DRIVE = "REQUEST_TEST_DRIVE",
  REQUEST_TEST_DRIVE_ERROR = "REQUEST_TEST_DRIVE_ERROR",
  RESET_REQ_TEST_DRIVE_ERROR = "RESET_REQ_TEST_DRIVE_ERROR",
  SET_TEST_DRIVES_USER = "SET_TEST_DRIVES_USER",
  SET_TEST_DRIVES_USER_LOADING = "SET_TEST_DRIVES_USER_LOADING",
  SET_TEST_DRIVES_USER_ERROR = "SET_TEST_DRIVES_USER_ERROR",
  SET_TEST_DRIVES_ADMIN = "SET_TEST_DRIVES_ADMIN",
  SET_TEST_DRIVES_ADMIN_LOADING = "SET_TEST_DRIVES_ADMIN_LOADING",
  SET_TEST_DRIVES_ADMIN_ERROR = "SET_TEST_DRIVES_ADMIN_ERROR",
  UPDATE_TEST_DRIVE = "UPDATE_TEST_DRIVE",
}

export interface IRequestTestDrive {
  type: TestDriveActionType.REQUEST_TEST_DRIVE;
  payload: ITestDrive;
}

export interface IRequestTestDriveError {
  type: TestDriveActionType.REQUEST_TEST_DRIVE_ERROR;
  payload: string | null;
}

export interface IResetRequestTestDrive {
  type: TestDriveActionType.RESET_REQ_TEST_DRIVE_ERROR;
}

export interface ISetTestDrivesUser {
  type: TestDriveActionType.SET_TEST_DRIVES_USER;
  payload: ITestDrives[];
}

export interface ISetTestDrivesUserLoading {
  type: TestDriveActionType.SET_TEST_DRIVES_USER_LOADING;
  payload: boolean;
}

export interface ISetTestDrivesUserError {
  type: TestDriveActionType.SET_TEST_DRIVES_USER_ERROR;
  payload: string | null;
}

export interface ISetTestDrivesAdmin {
  type: TestDriveActionType.SET_TEST_DRIVES_ADMIN;
  payload: ITestDrivesPagination;
}

export interface ISetTestDrivesAdminLoading {
  type: TestDriveActionType.SET_TEST_DRIVES_ADMIN_LOADING;
  payload: boolean;
}

export interface ISetTestDrivesAdminError {
  type: TestDriveActionType.SET_TEST_DRIVES_ADMIN_ERROR;
  payload: string | null;
}

export interface IUpdateTestDrive {
  type: TestDriveActionType.UPDATE_TEST_DRIVE;
  payload: ITestDrive;
}

export type TestDriveAction =
  | IRequestTestDrive
  | IRequestTestDriveError
  | ISetTestDrivesUser
  | ISetTestDrivesUserLoading
  | ISetTestDrivesUserError
  | ISetTestDrivesAdmin
  | ISetTestDrivesAdminLoading
  | ISetTestDrivesAdminError
  | IUpdateTestDrive
  | IResetRequestTestDrive;
export type TestDriveDispatch = ThunkDispatch<ITestDriveState, any, AnyAction>;

export enum TransactionActionType {
  SET_TRANSACTIONS = "SET_TRANSACTIONS",
  SET_TRANSACTIONS_LOADING = "SET_TRANSACTIONS_LOADING",
  SET_TRANSACTIONS_ERROR = "SET_TRANSACTIONS_ERROR",
  POST_PAYMENT = "POST_PAYMENT",
  POST_PAYMENT_ERROR = "POST_PAYMENT_ERROR",
  GET_ALL_COUPONS = "GET_ALL_COUPONS",
  GET_ALL_COUPONS_LOADING = "GET_ALL_COUPONS_LOADING",
  GET_ALL_COUPONS_ERROR = "GET_ALL_COUPONS_ERROR",
  GET_COUPON_INFO = 'GET_COUPON_INFO',
  GET_COUPON_INFO_LOADING = 'GET_COUPON_INFO_LOADING',
  GET_COUPON_INFO_ERROR = 'GET_COUPON_INFO_ERROR',
  RESET_COUPON_INFO = "RESET_COUPON_INFO",
  GET_GAME_COUPONS = "GET_GAME_COUPONS",
  GET_GAME_COUPONS_LOADING = "GET_GAME_COUPONS_LOADING",
  GET_GAME_COUPONS_ERROR = "GET_GAME_COUPONS_ERROR",
  PLAY_GAME = "PLAY_GAME",
  PLAY_GAME_ERROR = "PLAY_GAME_ERROR"
}

export interface ISetTransactions {
  type: TransactionActionType.SET_TRANSACTIONS;
  payload: ITransactionPagination;
}

export interface ISetTransactionsLoading {
  type: TransactionActionType.SET_TRANSACTIONS_LOADING;
  payload: boolean;
}

export interface ISetTransactionsError {
  type: TransactionActionType.SET_TRANSACTIONS_ERROR;
  payload: string | null;
}

export interface IPostPayment {
  type: TransactionActionType.POST_PAYMENT;
  payload: string;
}

export interface IPostPaymentError {
  type: TransactionActionType.POST_PAYMENT_ERROR;
  payload: string | null;
}

export interface IGetAllCoupons {
  type: TransactionActionType.GET_ALL_COUPONS;
  payload: IGames[];
}

export interface IGetAllCouponsLoading {
  type: TransactionActionType.GET_ALL_COUPONS_LOADING;
  payload: boolean;
}

export interface IGetAllCouponsError {
  type: TransactionActionType.GET_ALL_COUPONS_ERROR;
  payload: string | null;
}

export interface IGetCouponInfo {
  type: TransactionActionType.GET_COUPON_INFO;
  payload: IGames;
}

export interface IGetCouponInfoLoading {
  type: TransactionActionType.GET_COUPON_INFO_LOADING;
  payload: boolean;
}

export interface IGetCouponInfoError {
  type: TransactionActionType.GET_COUPON_INFO_ERROR;
  payload: string | null;
}

export interface IResetCouponInfo {
  type: TransactionActionType.RESET_COUPON_INFO;
}

export interface IGetGameCoupons {
  type: TransactionActionType.GET_GAME_COUPONS;
  payload: ICoupon[];
}

export interface IGetGameCouponsLoading {
  type: TransactionActionType.GET_GAME_COUPONS_LOADING;
  payload: boolean;
}

export interface IGetGameCouponsError {
  type: TransactionActionType.GET_GAME_COUPONS_ERROR;
  payload: string | null;
}

export interface IPlayGame {
  type: TransactionActionType.PLAY_GAME;
  payload: ICoupon;
}

export interface IPlayGameError {
  type: TransactionActionType.PLAY_GAME_ERROR;
  payload: string | null;
}


export type TransactionAction =
  | ISetTransactions
  | ISetTransactionsLoading
  | ISetTransactionsError
  | IPostPayment
  | IPostPaymentError
  | IGetAllCoupons
  | IGetAllCouponsError
  | IGetAllCouponsLoading
  | IGetCouponInfo
  | IGetCouponInfoError
  | IGetCouponInfoLoading
  | IResetCouponInfo
  | IGetGameCoupons
  | IGetGameCouponsLoading
  | IGetGameCouponsError
  | IPlayGame
  | IPlayGameError;
export type TransactionDispatch = ThunkDispatch<
  ITransactionState,
  any,
  AnyAction
>;

export enum CategoryActionType {
  SET_CATEGORIES = "SET_CATEGORIES",
  SET_CATEGORIES_LOADING = "SET_CATEGORIES_LOADING",
  SET_CATEGORIES_ERROR = "SET_CATEGORIES_ERROR",
  ADD_CATEGORY = "ADD_CATEGORY",
  ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR",
  EDIT_CATEGORY = "EDIT_CATEGORY",
  EDIT_CATEGORY_ERROR = "EDIT_CATEGORY_ERROR",
  DELETE_CATEGORY = "DELETE_CATEGORY",
  DELETE_CATEGORY_ERROR = "DELETE_CATEGORY_ERROR"
}

export interface ISetCategories {
  type: CategoryActionType.SET_CATEGORIES;
  payload: ICategoryPagination;
}

export interface ISetCategoriesLoading {
  type: CategoryActionType.SET_CATEGORIES_LOADING;
  payload: boolean;
}

export interface ISetCategoriesError {
  type: CategoryActionType.SET_CATEGORIES_ERROR;
  payload: string | null;
}

export interface IAddCategory {
  type: CategoryActionType.ADD_CATEGORY;
  payload: ICategory;
}

export interface IAddCategoryError {
  type: CategoryActionType.ADD_CATEGORY_ERROR;
  payload: string | null;
}

export interface IEditCategory {
  type: CategoryActionType.EDIT_CATEGORY;
  payload: ICategory;
}

export interface IEditCategoryError {
  type: CategoryActionType.EDIT_CATEGORY_ERROR;
  payload: string | null;
}

export interface IDeleteCategory {
  type: CategoryActionType.DELETE_CATEGORY;
  payload: ICategory;
}

export interface IDeleteCategoryError {
  type: CategoryActionType.DELETE_CATEGORY_ERROR;
  payload: string | null;
}

export type CategoryAction = 
  | ISetCategories
  | ISetCategoriesLoading
  | ISetCategoriesError
  | IAddCategory
  | IAddCategoryError
  | IEditCategory
  | IEditCategoryError
  | IDeleteCategory
  | IDeleteCategoryError; 
export type CategoryDispatch = ThunkDispatch<ICategoryState, any, AnyAction>