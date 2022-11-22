import { ICar, ICarCatalog, ICarCategory, IUser } from "../../interface";

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