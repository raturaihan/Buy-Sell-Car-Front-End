import { TestDriveAction, TestDriveActionType } from "../actions/typesActions";
import { ITestDriveState } from "./typesReducers";

const initialState: ITestDriveState = {
  reqTestDrive: {
    test_drive_id: 0,
    user_id: 0,
    car_id: 0,
    status: "",
    date_request: "",
  },
  reqTestDriveError: null,
  testDrivesUser: [],
  testDriveUserLoading: false,
  testDriveUserError: null,
  testDriveAdmin: {
    CurrentPage: 0,
    TotalData: 0,
    TotalPage: 0,
    Limit: 0,
    Data: []
  },
  testDriveAdminLoading: false,
  testDriveAdminError: null,
  updateStatusTestDrive: {
    test_drive_id: 0,
    user_id: 0,
    car_id: 0,
    status: "",
    date_request: "",
  }
};

export default function testdriveReducer(
  state = initialState,
  action: TestDriveAction
): ITestDriveState {
  switch (action.type) {
    case TestDriveActionType.REQUEST_TEST_DRIVE:
      return { ...state, reqTestDrive: action.payload };
    case TestDriveActionType.REQUEST_TEST_DRIVE_ERROR:
      return { ...state, reqTestDriveError: action.payload };
    case TestDriveActionType.SET_TEST_DRIVES_USER:
      return { ...state, testDrivesUser: action.payload };
    case TestDriveActionType.SET_TEST_DRIVES_USER_LOADING:
      return { ...state, testDriveUserLoading: action.payload };
    case TestDriveActionType.SET_TEST_DRIVES_USER_ERROR:
      return { ...state, testDriveUserError: action.payload };
    case TestDriveActionType.SET_TEST_DRIVES_ADMIN:
      return {...state, testDriveAdmin: action.payload};
    case TestDriveActionType.SET_TEST_DRIVES_ADMIN_LOADING:
      return {...state, testDriveAdminLoading: action.payload};
    case TestDriveActionType.SET_TEST_DRIVES_ADMIN_ERROR:
      return {...state, testDriveAdminError: action.payload};
    case TestDriveActionType.UPDATE_TEST_DRIVE:
      return {...state, updateStatusTestDrive: action.payload};
    default:
      return state
  }
}
