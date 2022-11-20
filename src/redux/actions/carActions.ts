import { Dispatch } from "react";
import instance from "../../config/axios";
import { ICar, ICarCatalog } from "../../interface";
import { CarAction, CarActionType } from "./typesActions";

interface IParams {
    page: number;
    limit: number;
    car_name:string;
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

export const fetchCars = ({page,limit,car_name}:IParams) => {
    return async(dispatch: Dispatch<CarAction>) => {
        dispatch(setCarsLoading(true))
        dispatch(setCarsError(""))

        await instance.get("/catalog?", {params: {
            page: page,
            limit: limit,
            car_name: car_name
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