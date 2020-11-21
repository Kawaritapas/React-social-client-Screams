import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, DISABLED } from "../types";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';


export const loginUser = (user, history) => (dispatch) => {
    axios.post('/login', user)
        .then(res => {
            const userTokenId = `Bearer ${res.data.token};`
            localStorage.setItem('userTokenId', `${userTokenId}`);
            axios.defaults.headers.common['Authorization'] = userTokenId;
            dispatch({
                type: CLEAR_ERRORS,
            })
            dispatch({
                type: LOADING_UI,
                payload : <CircularProgress size={30} color="primary" />
            })
            dispatch({
                type: DISABLED,
                payload : true
            })
            dispatch(getUserData);
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
            dispatch({
                type: LOADING_UI,
                payload: 'LOGIN'
            })
            dispatch({
                type: DISABLED,
                payload : false
            })
        })
}
export const getUserData = () => (dispatch) => {
    axios.get('/details')
        .then(res => {
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}