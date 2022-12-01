import { Dispatch } from "react";
import instance from "../../config/axios";
import { EditCategoryParams, ICategory, ICategoryPagination } from "../../interface";
import { CategoryAction, CategoryActionType } from "./typesActions";


interface IParams {
    page: number;
    limit: number;
}

export const setCategories = (payload: ICategoryPagination): CategoryAction => {
    return {
        type: CategoryActionType.SET_CATEGORIES,
        payload: payload
    }
}

export const setCategoriesLoading = (payload: boolean): CategoryAction => {
    return {
        type: CategoryActionType.SET_CATEGORIES_LOADING,
        payload: payload
    }
}

export const setCategoriesError = (payload: string | null): CategoryAction => {
    return {
        type: CategoryActionType.SET_CATEGORIES_ERROR,
        payload: payload
    }
}

export const addCategory = (payload: ICategory): CategoryAction => {
    return {
        type: CategoryActionType.ADD_CATEGORY,
        payload: payload
    }
}

export const addCategoryError = (payload: string | null): CategoryAction => {
    return {
        type: CategoryActionType.ADD_CATEGORY_ERROR,
        payload: payload
    }
}

export const editCategory = (payload: ICategory): CategoryAction => {
    return {
        type: CategoryActionType.EDIT_CATEGORY,
        payload: payload
    }
}

export const editCategoryError = (payload: string | null): CategoryAction => {
    return {
        type: CategoryActionType.EDIT_CATEGORY_ERROR,
        payload: payload
    }
}

export const deleteCategory = (payload: ICategory): CategoryAction => {
    return {
        type: CategoryActionType.DELETE_CATEGORY,
        payload: payload
    }
}

export const deleteCategoryError = (payload: string | null): CategoryAction => {
    return {
        type: CategoryActionType.DELETE_CATEGORY_ERROR,
        payload: payload
    }
}

export const fetchCategories = ({page, limit}: IParams) => {
    return async(dispatch: Dispatch<CategoryAction>) => {
        dispatch(setCategoriesLoading(true))
        dispatch(setCategoriesError(""))

        await instance.get("/admin/category?", {params: {
            page: page,
            limit: limit,
        }})
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch categories')
            }
            return response.data
        })
        .then((data) => {
            dispatch(setCategories(data))
        })
        .catch((error) => {
            dispatch(setCategoriesError(error))})
        .finally(() => dispatch(setCategoriesLoading(false)));
    }
}

export const addNewCategory = (catname: string) => {
    return async(dispatch: Dispatch<CategoryAction>) => {
        await instance.post('/admin/category', {category_name: catname})
        .then((response) => {
            if(!response.data) {
                throw new Error('Failed to create new category')
            }
            return response.data
        })
        .then((data) => {
            dispatch(addCategory(data))
        })
        .catch((error)=> {
            dispatch(addCategoryError(error))
        })
    }
}

export const editCategoryData = ({id, category}: EditCategoryParams) => {
    return async(dispatch: Dispatch<CategoryAction>) => {
        dispatch(editCategoryError(""))
        await instance.patch(`/admin/category/${id}`, {category_name: category})
        .then((response) => {
            if(!response.data) {
                throw new Error("Failed to update category data")
            }
            return response.data
        })
        .then((data) => {
            dispatch(editCategory(data))
        })
        .catch((error) => {
            dispatch(editCategoryError(error))
        })
    }
}

export const deleteCategoryData = (id: string | undefined) => {
    return async(dispatch: Dispatch<CategoryAction>) => {
        dispatch(deleteCategoryError(""))
        await instance.delete(`/admin/category/${id}`)
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to delete data')
            }
            return response.data
        })
        .then((data) => {
            dispatch(deleteCategory(data))
        })
        .catch((error) => {
            dispatch(deleteCategoryError(error))
        })
    }
}