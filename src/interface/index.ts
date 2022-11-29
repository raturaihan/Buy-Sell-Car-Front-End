export interface ICategory {
    category_id: number;
    category_name: string;
}

export interface ICar {
    CarID: number ;
    car_name: string ;
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
    Category?: ICategory;
}

export interface INewCar {
    car_name: string ;
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

export interface EditCarParams {
    id: string;
    car: ICar;
}

export interface IUser {
    email?: string;
    full_name: string;
    phone: string;
    profile_img: string | undefined;
}

export interface IFavorites {
    favorite_id: number;
    user_id: number;
    car_id: number;
    Car: ICar;
}

export interface IFavorite {
    favorite_id: number;
    user_id: number;
    car_id: number;
}

export interface ITestDrives {
    TestDriveID: number;
    user_id: number;
    car_id: number;
    status: string;
    date_request: string;
    Car: ICar
    User: IUser
}

export interface ITestDrive {
    TestDriveID: number;
    user_id: number;
    car_id: number;
    date_request: string;
    status: string;
}

export interface ITestDrivesPagination {
    CurrentPage: number;
    TotalPage: number;
    TotalData: number;
    Limit: number;
    Data: ITestDrives[];
}


export interface TestDriveParams {
    car_id: number,
    date_request: string
}

export interface IUpdateTD {
    id: string | undefined;
    status: string;
}

export interface ITransaction {
    transaction_id: number;
    user_id: number;
    car_id: number;
    final_amount: number;
    coupon_id: number;
    trans_type: string;
    CreatedAt: string;
    Car: ICar;
    User: IUser;
}

export interface ITransactionPagination {
    CurrentPage: number;
    TotalPage: number;
    TotalData: number;
    Limit: number;
    Data: ITransaction[];
}

export interface PaymentParams {
    car_id: number;
    final_amount: number;
    trans_type: string;
    coupon_id?: number;
}
