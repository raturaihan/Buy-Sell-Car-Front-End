import { ICar, ICarCatalog, ICategory, ICategoryPagination, ICoupon, IFavorite, IFavorites, IGames, ITestDrive, ITestDrives, ITestDrivesPagination, ITransaction, ITransactionPagination, IUser } from "../../interface";

export interface ICarState {
    cars: ICarCatalog;
    carsLoading: boolean;
    carsError: string | null;
    categories: ICategory[];
    categoriesLoading: boolean;
    categoriesError: string | null;
    car: ICar;
    carLoading: boolean;
    carError: string | null;
    suggestedCars: ICar[];
    suggestedCarsLoading: boolean;
    suggestedCarsError: string | null;
    updateCar: ICar;
    updateCarError: string | null;
    deleteCar: ICar;
    createCar: ICar;
    createCarError: string | null;
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

export interface ITestDriveState {
    reqTestDrive: ITestDrive;
    reqTestDriveError: string | null;
    testDrivesUser: ITestDrives[];
    testDriveUserLoading: boolean;
    testDriveUserError: string | null;
    testDriveAdmin: ITestDrivesPagination;
    testDriveAdminLoading: boolean;
    testDriveAdminError: string | null;
    updateStatusTestDrive: ITestDrive;
}

export interface ITransactionState {
    transactions: ITransactionPagination;
    transactionsLoading: boolean;
    transactionsError: string | null;
    payment: string;
    paymentError: string | null;
    coupons: IGames[];
    couponsLoading: boolean;
    couponsError: string | null;
    coupon: IGames;
    couponLoading: boolean;
    couponError: string | null;
    gameCoupons: ICoupon[];
    gameCouponsLoading: boolean;
    gameCouponsError: string | null;
    playGame: ICoupon;
    playGameError: string | null;
}

export interface ICategoryState {
    categories: ICategoryPagination;
    categoriesLoading: boolean;
    categoriesError: string | null;
    addCategory: ICategory;
    addCategoryError: string | null;
    editCategory: ICategory;
    editCategoryError: string | null;
    delCategory: ICategory;
    delCategoryError: string | null;
}