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
    default:
        return state
  }
}
