export interface ICategory {
    category_id: number;
    category_name: string;
}

export interface ICar {
    CarID: number;
    car_name: string;
    car_year: number;
    car_img: string;
    price: number;
    color: string;
    category_id: number;
    transmission_type: string;
    brand_name: string;
    stnk_date: number;
    stnk_month: number;
    stnk_year: number;
    car_location: string;
    description: string;
    Category: ICategory;
}

export interface ICarCatalog {
    CurrentPage: number;
    TotalPage: number;
    TotalData: number;
    Limit: number;
    Data: ICar[];
}

export interface ICarCategory {
    category_id: number;
    category_name: string;
}

export interface IUser {
    email: string;
    full_name: string;
    phone: string;
    profile_img: string;
}