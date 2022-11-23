import { Dispatch } from "react";
import instance from "../../config/axios";
import { IFavorite, IFavorites } from "../../interface";
import { FavoriteAction, FavoriteActionType } from "./typesActions";

interface isCarFavorite {
    car_id: number;
    car_favorite_id: number;
}

export const addFavorite = (payload: IFavorite): FavoriteAction => {
    return {
        type: FavoriteActionType.ADD_FAVORITE,
        payload: payload
    }
}

export const removeFavorite = (payload: IFavorite): FavoriteAction => {
    return {
        type: FavoriteActionType.REMOVE_FAVORITE,
        payload: payload
    }
}

export const setFavorites = (payload: IFavorites[]): FavoriteAction => {
    return {
        type: FavoriteActionType.GET_FAVORITES,
        payload: payload
    }
}

export const setFavoritesLoading = (payload: boolean): FavoriteAction => {
    return {
        type: FavoriteActionType.GET_FAVORITES_LOADING,
        payload: payload
    }
}

export const setFavoritesError = (payload: string | null): FavoriteAction => {
    return {
        type: FavoriteActionType.GET_FAVORITES_ERROR,
        payload: payload
    }
}

export const resetFavorite = (): FavoriteAction => {
    return {
        type: FavoriteActionType.RESET_FAVORITE
    }
}

export const fetchFavorites = () => {
    return async(dispatch: Dispatch<FavoriteAction>) => {
        dispatch(setFavoritesLoading(true))
        dispatch(setFavoritesError(""))

        await instance.get("/user/favorite")
        .then((response) => {
            if(!response.data) {
                throw new Error('Failed to fetch user favorite data')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setFavorites(data))
        })
        .catch((error) => {
            dispatch(setFavoritesError(error))
        })
        .finally(()=> dispatch(setFavoritesLoading(false)))
    }
}

export const addCarFavorite = (car_id:number) => {
    return async(dispatch: Dispatch<FavoriteAction>) => {

        const res = await instance.post("/user/favorite", {car_id: car_id})
        .then((response) => {
            if(!response.data) {
                throw new Error('failed to add car favorite')
            }
            return response.data
        })
        .then((data) => {
            dispatch(addFavorite(data))
        })
        .catch((error) => {
            throw error
        })
    }
}

export const removeCarFavorite = (car_id:number) => {
    return async(dispatch: Dispatch<FavoriteAction>) => {

        const res = await instance.patch(`/user/favorite`, {car_id: car_id})
        .then((response) => {
            if(!response.data) {
                throw new Error('failed to add car favorite')
            }
            return response.data
        })
        .then((data) => {
            dispatch(removeFavorite(data))
        })
        .catch((error) => {
            throw error
        })
    }
}
