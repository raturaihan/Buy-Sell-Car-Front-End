import { ICar, ICarCatalog, ICarCategory } from "../../interface";

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
}