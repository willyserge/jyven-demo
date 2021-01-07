import { REGISTER_SUCCESS, REGISTER_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS, USER_LOGOUT } from "../actions/types";

const DEFAULT_STATE ={
    message:'',
    error:''
}
//const userInfo = localStorage.getItem('userInfo');
const INITIAL_STATE = DEFAULT_STATE;

const authReducer = (state =INITIAL_STATE, action) =>{
    switch (action.type) {
        case REGISTER_SUCCESS:
                return {error:'',message:action.payload}

        case REGISTER_ERROR:
                return {...state,error:action.payload}

        case SIGNIN_SUCCESS:
            return {error:'',message:action.payload}
        case SIGNIN_ERROR:
            return {...state,error:action.payload}
        case USER_LOGOUT:
            return {...action.payload};
        default:
            return state;
    }
}

export default authReducer;