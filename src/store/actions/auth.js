import * as actionTypes from './actionTypes';
import {auth, provider} from '../../firebase' 


export const signInStart = () => {
    return{
        type: actionTypes.SIGNIN_START,
    }
}
export const signInSuccess = (user) => {
    return{
        type: actionTypes.SIGNIN_SUCCESS,
        user:user
    }
}
export const signInFailed = (error) => {
    return{
        type: actionTypes.SIGNIN_FAIL,
        error : error
    }
}

export const signIn = () => {
    return (dispatch) => {
        dispatch(signInStart());
        auth.signInWithPopup(provider).then( result =>{
            // console.log(result);
            dispatch( signInSuccess(result.user) )
        }).catch(error => {
            dispatch( signInSuccess(error) )
        })
    }
    
}