import * as actionTypes from '../actions/actionTypes';

const initialStore = {
    user: null,
    error: null,
    loading: false,
}

const signInStart =(state,action) => {
    return {
        ...state,
        loading : true,
        error: null,
    }
}
const signInSuccess =(state,action) => {
    return {
        ...state,
        loading : false,
        error: null,
        user : action.user
    }
}
const signInFailed =(state,action) => {
    return {
        ...state,
        loading : false,
        error: action.error,
    }
}

const reducer = (state=initialStore , action) =>{
    switch (action.type){
        case actionTypes.SIGNIN_START :
            return signInStart(state,action)
        case actionTypes.SIGNIN_SUCCESS :
            return signInSuccess(state,action)
        case actionTypes.SIGNIN_FAIL :
            return signInFailed(state,action)

        default:
            return state;
    }
}

export default reducer;