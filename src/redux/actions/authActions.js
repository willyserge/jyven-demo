import axios from 'axios';
import {
    REGISTER_ERROR, REGISTER_SUCCESS, TOGGLE_LOADER, SIGNIN_SUCCESS, SIGNIN_ERROR, USER_LOGOUT,
  } from './types';

export const registerUser = ({
  firstName, lastName, email, password,
}) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_LOADER });
    const res = await axios.post(`https://jyven-demo.herokuapp.com/api/auth/signup`, {
      firstName, lastName, email, password,
    });

    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data.message });
    dispatch({ type: TOGGLE_LOADER });
  } catch (error) {
    const err = error.response;
    dispatch({ type: REGISTER_ERROR, payload: err.data.error.message });
    dispatch({ type: TOGGLE_LOADER });
  }
};

export const signin = ({ email, password },router) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_LOADER });
    const res = await axios.post(`https://jyven-demo.herokuapp.com/api/auth/signin`, { email, password });
   
    localStorage.setItem('jwt', JSON.stringify(res.data.accessToken));
    dispatch({ type: SIGNIN_SUCCESS, payload: res.data.accessToken });
    router.push('/other/my-account')
    dispatch({ type: TOGGLE_LOADER });
  } catch (error) {
    const err = error.response;
    dispatch({ type: SIGNIN_ERROR, payload: err.data.error.message});
    dispatch({ type: TOGGLE_LOADER });
  }
};
/*
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT, payload: {} });
};
*/