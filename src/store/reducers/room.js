import * as actionTypes from '../actions/actionTypes';

const initalState = {
    rooms:[],
    roomsLoading:null
}

export const getRoomsStart = (state ,action) => {
    return { ...state , roomsLoading : true}
} 
export const  getRoomsSuccess= (state ,action) => {
    return { ...state , roomsLoading : false , rooms : action.rooms}
} 
export const getRoomsFailed = (state ,action) => {
    return { ...state , error : action.error , roomsLoading : false}
} 

const reducer = (state = initalState,action) => {
    switch (action.type){
        case actionTypes.GETROOM_START : return getRoomsStart (state,action)
        case actionTypes.GETROOM_SUCCESS : return getRoomsSuccess (state,action)
        case actionTypes.GETROOM_FAIL : return getRoomsFailed (state,action)
        default : return state;
    }
}

export default reducer

