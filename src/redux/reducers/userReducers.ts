import { IUser } from "../../interface";
import { UserAction, UserActionType } from "../actions/typesActions";
import { IUserState } from "./typesReducers";

const initialState: IUserState = {
  user: {
    email: "",
    full_name: "",
    phone: "",
    profile_img:
      "https://res.cloudinary.com/dl6dxfigu/image/upload/v1669012757/blank-profile-picture-973460__480_hpwhux.webp",
  },
  userLoading: false,
  userError: null,
  userUpdate: {
    email: "",
    full_name: "",
    phone: "",
    profile_img: "",
  },
  userUpdateLoading: false,
  userUpdateError: null,
};

export default function userReducer(
  state = initialState,
  action: UserAction
): IUserState {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, user: action.payload };
    case UserActionType.SET_USER_LOADING:
      return { ...state, userLoading: action.payload };
    case UserActionType.SET_USER_ERROR:
      return { ...state, userError: action.payload };
    case UserActionType.UPDATE_USER:
      return { ...state, userUpdate: action.payload };
    case UserActionType.UPDATE_USER_LOADING:
      return { ...state, userUpdateLoading: action.payload };
    case UserActionType.UPDATE_USER_ERROR:
      return { ...state, userUpdateError: action.payload };
    case UserActionType.RESET_USER:
      return initialState;
    default:
      return state;
  }
}
