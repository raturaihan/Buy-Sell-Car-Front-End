import { Dispatch } from "react";
import instance from "../../config/axios";
import { ITestDrive, ITestDrives } from "../../interface";
import { TestDriveAction, TestDriveActionType } from "./typesActions";

interface testdriveParams {
    car_id: number,
    date_request: string
}
export const requestTestDrive = (payload: ITestDrive): TestDriveAction => {
    return {
        type: TestDriveActionType.REQUEST_TEST_DRIVE,
        payload: payload
    }
}

export const requestTestError = (payload: string | null): TestDriveAction => {
    return {
        type: TestDriveActionType.REQUEST_TEST_DRIVE_ERROR,
        payload: payload
    }
}

export const setTestDriveUser = (payload: ITestDrives[]): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_USER,
        payload: payload
    }
}

export const setTestDriveUserLoading = (payload: boolean): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_USER_LOADING,
        payload: payload
    }
}

export const setTestDriveUserError = (payload: string | null): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_USER_ERROR,
        payload: payload
    }
}

export const testdriveRequest = ({car_id, date_request}:testdriveParams) => {
    return async(dispatch: Dispatch<TestDriveAction>) => {
        dispatch(requestTestError(""))

        await instance.post("/user/testdrive", {
            car_id: car_id,
            date_request: date_request
        })
        .then((response) => {
            if(!response.data) {
                throw new Error('failed to request test drive')
            }
            return response.data
        })
        .then((data) => {
            dispatch(requestTestDrive(data))
        })
        .catch((error) => {
            dispatch(requestTestError(error))
        })
    }
}

export const getTestDriveUser = () => {
    return async(dispatch: Dispatch<TestDriveAction>) => {
        dispatch(setTestDriveUserLoading(true))
        dispatch(setTestDriveUserError(""))

        await instance.get("/user/testdrive")
        .then((response) => {
            if(!response.data) {
                throw new Error('Failed to fetch test drive data')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setTestDriveUser(data))
        })
        .catch((error) => {
            dispatch(setTestDriveUserError(error))
        })
        .finally(()=> dispatch(setTestDriveUserLoading(false)))
    }
}