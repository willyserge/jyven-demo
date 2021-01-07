import { TOGGLE_LOADER } from "../actions/types";

const loadingReducer = (state =false, action) =>{
    switch (action.type) {
        case TOGGLE_LOADER:
                return !state
        default:
            return state;
    }
}

export default loadingReducer;