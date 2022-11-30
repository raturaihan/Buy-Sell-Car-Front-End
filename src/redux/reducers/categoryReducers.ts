import { CategoryAction, CategoryActionType } from "../actions/typesActions";
import { ICategoryState } from "./typesReducers";

const initialState: ICategoryState = {
  categories: {
    CurrentPage: 1,
    TotalPage: 0,
    TotalData: 0,
    Limit: 10,
    Data: [],
  },
  categoriesLoading: false,
  categoriesError: null,
  addCategory: {
    category_id: 0,
    category_name: "",
  },
  addCategoryError: null,
  editCategory: {
    category_id: 0,
    category_name: "",
  },
  editCategoryError: null,
  delCategory: {
    category_id: 0,
    category_name: "",
  },
  delCategoryError: null,
};

export default function categoryReducer(
  state = initialState,
  action: CategoryAction
): ICategoryState {
  switch (action.type) {
    case CategoryActionType.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case CategoryActionType.SET_CATEGORIES_LOADING:
      return { ...state, categoriesLoading: action.payload };
    case CategoryActionType.SET_CATEGORIES_ERROR:
      return { ...state, categoriesError: action.payload };
    case CategoryActionType.ADD_CATEGORY:
      return { ...state, addCategory: action.payload };
    case CategoryActionType.ADD_CATEGORY_ERROR:
      return { ...state, addCategoryError: action.payload };
    case CategoryActionType.EDIT_CATEGORY:
      return { ...state, editCategory: action.payload };
    case CategoryActionType.EDIT_CATEGORY_ERROR:
      return { ...state, editCategoryError: action.payload };
    case CategoryActionType.DELETE_CATEGORY:
      return { ...state, delCategory: action.payload };
    case CategoryActionType.DELETE_CATEGORY_ERROR:
      return { ...state, delCategoryError: action.payload };
    default:
        return state;
  }
}
