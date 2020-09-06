import * as actionTypes from './actionTypes'
import db from './../../firebase'
import firebase from 'firebase'


export const getRoomsStart = () => {
    return{
        type: actionTypes.GETROOM_START,
    }
}
export const getRoomsSuccess = (rooms) => {
    return{
        type: actionTypes.GETROOM_SUCCESS,
        rooms : rooms
    }
}
export const getRoomsFailed = (error) => {
    return{
        type: actionTypes.GETROOM_FAIL,
        error : error
    }
}


export const getRooms = () =>{
    return (dispatch) => {
        try{
            dispatch(getRoomsStart())
            db.collection('rooms').onSnapshot( snapshot =>{
                dispatch(getRoomsSuccess(( snapshot.docs.map( 
                       doc =>({
                           ...doc.data(),
                           id : doc.id
                       })
                   ))
                ))
           })
        }catch(error){
            dispatch(getRoomsFailed(error))
        }
    }
}