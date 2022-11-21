import { Dispatch } from "react"
import instance from "../../config/axios"
import { IUser } from "../../interface"
import { UserAction, UserActionType } from "./typesActions"

export const setUser = (payload: IUser): UserAction => {
    return {
        type: UserActionType.SET_USER,
        payload: payload
    }
}

export const setUserLoading = (payload: boolean): UserAction => {
    return {
        type: UserActionType.SET_USER_LOADING,
        payload: payload
    }
}

export const setUserError = (payload: string | null): UserAction => {
    return {
        type: UserActionType.SET_USER_ERROR,
        payload: payload
    }
}

export const fetchUserDetail = () => {
    return async(dispatch: Dispatch<UserAction>) => {
        dispatch(setUserLoading(true))
        dispatch(setUserError(""))

        await instance.get("/user")
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch user detail')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setUser(data))
        })
        .catch((error) => {
            dispatch(setUserError(error))})
        .finally(() => dispatch(setUserLoading(false)));
    }
}