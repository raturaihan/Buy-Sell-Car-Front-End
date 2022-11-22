import { Dispatch } from "react";
import instance from "../../config/axios";
import { ICar, ICarCatalog, ICarCategory } from "../../interface";
import { CarAction, CarActionType } from "./typesActions";

interface IParams {
    page: number;
    limit: number;
    car_name:string;
    category_id:string;
    min_price: string;
    max_price: string;
}

export const setCars = (payload: ICarCatalog): CarAction => {
    return {
        type: CarActionType.SET_CARS,
        payload: payload
    }
}

export const setCarsLoading = (payload: boolean): CarAction => {
    return {
        type: CarActionType.SET_CARS_LOADING,
        payload: payload
    }
}

export const setCarsError = (payload: string | null): CarAction => {
    return {
        type: CarActionType.SET_CARS_ERROR,
        payload: payload
    }
}

export const setCarsCategory = (payload: ICarCategory[]): CarAction => {
    return {
        type: CarActionType.SET_CARS_CATEGORY,
        payload: payload
    }
}

export const setCarsCategoryLoading = (payload: boolean): CarAction => {
    return {
        type: CarActionType.SET_CARS_CATEGORY_LOADING,
        payload: payload
    }
}

export const setCarsCategoryError = (payload: string | null): CarAction => {
    return {
        type: CarActionType.SET_CARS_CATEGORY_ERROR,
        payload: payload
    }
}

export const setCar = (payload: ICar): CarAction => {
    return {
        type: CarActionType.SET_CAR,
        payload: payload
    }
}

export const setCarLoading = (payload: boolean): CarAction => {
    return {
        type: CarActionType.SET_CAR_LOADING,
        payload: payload
    }
}

export const setCarError = (payload: string | null): CarAction => {
    return {
        type: CarActionType.SET_CAR_ERROR,
        payload: payload
    }
}

export const setSuggestedCars = (payload: ICar[]): CarAction => {
    return {
        type: CarActionType.SET_SUGESTED_CAR,
        payload: payload
    }
}

export const setSuggestedCarsLoading = (payload: boolean): CarAction => {
    return {
        type: CarActionType.SET_SUGESTED_CAR_LOADING,
        payload: payload
    }
}

export const setSuggestedCarsError = (payload: string | null): CarAction => {
    return {
        type: CarActionType.SET_SUGESTED_CAR_ERROR,
        payload: payload
    }
}


export const fetchCars = ({page,limit,car_name, category_id, min_price, max_price}:IParams) => {
    return async(dispatch: Dispatch<CarAction>) => {
        dispatch(setCarsLoading(true))
        dispatch(setCarsError(""))

        await instance.get("/catalog?", {params: {
            page: page,
            limit: limit,
            car_name: car_name,
            category_id: category_id,
            min_price: min_price,
            max_price: max_price,
        }})
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch catalog')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setCars(data))
        })
        .catch((error) => {
            dispatch(setCarsError(error))})
        .finally(() => dispatch(setCarsLoading(false)));
    }
}

export const fetchCarsCategory = () => {
    return async(dispatch: Dispatch<CarAction>) => {
        dispatch(setCarsCategoryLoading(true))
        dispatch(setCarsCategoryError(""))

        await instance.get("/catalog/category")
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch car category')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setCarsCategory(data))
        })
        .catch((error) => {
            dispatch(setCarsCategoryError(error))})
        .finally(() => dispatch(setCarsCategoryLoading(false)));
    }
}

export const fetchCar = (id: string | undefined) => {
    return async(dispatch: Dispatch<CarAction>) => {
        dispatch(setCarLoading(true))
        dispatch(setCarError(""))

        await instance.get(`/catalog/${id}`)
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch car detail')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setCar(data))
        })
        .catch((error) => {
            dispatch(setCarError(error))})
        .finally(() => dispatch(setCarLoading(false)));
    }
}

export const suggestedCar = (id: number | undefined) => {
    return async(dispatch: Dispatch<CarAction>) => {
        dispatch(setSuggestedCarsLoading(true))
        dispatch(setSuggestedCarsError(""))

        await instance.get(`/catalog/category/car/${id}`)
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch suggested car')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setSuggestedCars(data))
        })
        .catch((error) => {
            dispatch(setSuggestedCarsError(error))})
        .finally(() => dispatch(setSuggestedCarsLoading(false)));
    }
}