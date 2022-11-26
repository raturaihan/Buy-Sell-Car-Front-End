import { Dispatch } from "react";
import instance from "../../config/axios";
import { ITestDrive, ITestDrives, ITestDrivesPagination, TestDriveParams } from "../../interface";
import { TestDriveAction, TestDriveActionType } from "./typesActions";

interface IParams {
    page: number;
    limit: number;
    sortBy: string;
    sort: string;  
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

export const setTestDriveAdmin = (payload: ITestDrivesPagination): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_ADMIN,
        payload: payload
    }
}

export const setTestDriveAdminLoading = (payload: boolean): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_ADMIN_LOADING,
        payload: payload
    }
}

export const setTestDriveAdminError = (payload: string | null): TestDriveAction => {
    return {
        type: TestDriveActionType.SET_TEST_DRIVES_ADMIN_ERROR,
        payload: payload
    }
}

export const testdriveRequest = ({car_id, date_request}:TestDriveParams) => {
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

export const getTestDriveAdmin = ({page, limit, sortBy, sort}: IParams) => {
    return async(dispatch: Dispatch<TestDriveAction>) => {
        dispatch(setTestDriveAdminLoading(true))
        dispatch(setTestDriveAdminError(""))

        await instance.get("/admin/testdrive?", {params: {
            page: page,
            limit: limit,
            sort: sort,
            sortBy: sortBy
        }})
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch test drive')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setTestDriveAdmin(data))
        })
        .catch((error) => {
            dispatch(setTestDriveAdminError(error))})
        .finally(() => dispatch(setTestDriveAdminLoading(false)));
    }
}