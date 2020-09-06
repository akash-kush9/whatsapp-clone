import * as actionTypes from '../actions/actionTypes';

const initalState = {
    messages:[],
    messageStatus:null,
}

export const roomMessageStart = (state,action) => {
    return {
        ...state,
          loading : true,
        error : null    }
}
export const roomMessageSuccess = (state,action) => {
    return {
        ...state,
        messages : action.messages,
        loading:false,
        error : null
    }
}
export const roomMessageFailed = (state,action) => {
    return {
        ...state,
        error : action.error,
        loading:false
    }
}

export const  addMessageStart= (state,action ) => {
    return {
        ...state,
        messageStatus : 0
    }

}
export const addMessageSuccess = (state,action ) => {
    return {
        ...state,
        messageStatus : 1
    }
}
export const addMessageFailed = (state,action ) => {
    return {
        ...state,
        messageStatus : -1,
        error:action.error
    }
}

const reducer = (state=initalState,action) =>{
    
        switch (action.type) {
            case actionTypes.ROOMMESSAGES_START:
                return roomMessageStart(state,action)
            case actionTypes.ROOMMESSAGES_SUCCESS:
                return roomMessageSuccess(state,action)
            case actionTypes.ROOMMESSAGES_FAIL:
                 return roomMessageFailed(state,action)
            case actionTypes.ADDMESSAGE_START:
                return addMessageStart(state,action)
            case actionTypes.ADDMESSAGE_SUCCESS:
                return addMessageSuccess(state,action)
            case actionTypes.ADDMESSAGE_FAIL:
                return addMessageFailed(state,action)
            default:
                return state
    }
}
export default reducer