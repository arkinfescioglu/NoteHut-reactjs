
export const AppContextActions = {
    SET_LOADING: "SET_LOADING",
    SET_NAV_COLLAPSED: "SET_NAV_COLLAPSED",
    SET_LOCALE: "SET_LOCALE",
    TOGGLE_DRAWER: "TOGGLE_DRAWER",
    TOGGLE_ADD_NOTE_MODAL: "TOGGLE_ADD_NOTE_MODAL",
    SET_NOTE_LIST_ACTION_TYPE: "SET_NOTE_LIST_ACTION_TYPE",
};

export function AppContextReducer(
    state: any,
    action: any,
) {
    switch (action.type) {
        case AppContextActions.SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        case AppContextActions.SET_NAV_COLLAPSED: {
            return {
                ...state,
                navCollapsed: action.payload
            }
        }

        case AppContextActions.TOGGLE_DRAWER: {
            return {
                ...state,
                isAppDrawerOpen: !state.isAppDrawerOpen
            }
        }

        case AppContextActions.TOGGLE_ADD_NOTE_MODAL: {
            return {
                ...state,
                addNoteModalIsOpen: !state.addNoteModalIsOpen
            }
        }

        case AppContextActions.SET_NOTE_LIST_ACTION_TYPE: {
            return {
                ...state,
                noteListActionType: action.payload
            }
        }

        case AppContextActions.SET_LOCALE: {
            return {
                ...state,
                locale: action.payload
            }
        }

        default: {
            return state;
        }
    }
}
