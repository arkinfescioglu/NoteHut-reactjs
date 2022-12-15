
export const NoteCategoryActions = {
    SET_CATEGORY_LIST: "SET_CATEGORY_LIST",
    APPEND_CATEGORY_LIST: "APPEND_CATEGORY_LIST",
    UPDATE_CATEGORY_LIST: "UPDATE_CATEGORY_LIST",
    DELETE_CATEGORY_LIST: "DELETE_CATEGORY_LIST",
    RESET_CATEGORY_LIST: "RESET_CATEGORY_LIST",
}

export default function NoteCategoryContextReducer(
    state: any,
    action: any
) {
    switch (action.type) {

        case NoteCategoryActions.SET_CATEGORY_LIST: {
            return {
                ...state,
                categoryList: action.payload
            }
        }

        case NoteCategoryActions.APPEND_CATEGORY_LIST: {
            let newData: any;
            if (Array.isArray(action.payload)) {
                newData = [
                    ...state.categoryList,
                    ...action.payload
                ]
            } else {
                newData = [
                    ...state.categoryList,
                    action.payload
                ]
            }
            return {
                ...state,
                categoryList: newData
            }
        }

        case NoteCategoryActions.UPDATE_CATEGORY_LIST: {
            let newData: any[] = state.categoryList.filter((item: any) => item.id !== action.payload.id);
            return {
                ...state,
                categoryList: [
                    ...newData,
                    action.payload.data
                ]
            }
        }

        case NoteCategoryActions.DELETE_CATEGORY_LIST: {
            return {
                ...state,
                categoryList: state.categoryList.filter((item: any) => item.id !== action.payload)
            }
        }

        case NoteCategoryActions.RESET_CATEGORY_LIST: {
            return {
                ...state,
                categoryList: []
            }
        }

        default:
            return state;

    }
}
