import { ICar, ICarCatalog, ICarCategory, IFavorite, IFavorites, IUser } from "../../interface";

export interface ICarState {
    cars: ICarCatalog;
    carsLoading: boolean;
    carsError: string | null;
    categories: ICarCategory[];
    categoriesLoading: boolean;
    categoriesError: string | null;
    car: ICar;
    carLoading: boolean;
    carError: string | null;
    suggestedCars: ICar[];
    suggestedCarsLoading: boolean;
    suggestedCarsError: string | null;
}

export interface IUserState {
    user: IUser;
    userLoading: boolean;
    userError: string | null;
    userUpdate: IUser;
    userUpdateLoading: boolean;
    userUpdateError: string | null;
}

export interface IFavoriteState {
    carFavorites: IFavorites[];
    carFavoritesLoading: boolean;
    carFavoritesError: string | null;
    addFavorite: IFavorite;
    removeFavorite: IFavorite;
}