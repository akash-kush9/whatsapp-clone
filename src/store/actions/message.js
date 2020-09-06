import * as actionTypes from './actionTypes'
import db from './../../firebase'
import firebase from 'firebase'



export const roomMessageStart = () => {
    return{
        type: actionTypes.ROOMMESSAGES_START,
    }
}
export const roomMessageSuccess = (messages) => {
    return{
        type: actionTypes.ROOMMESSAGES_SUCCESS,
        messages:messages,
    }
}
export const roomMessageFailed = (error) => {
    return{
        type: actionTypes.ROOMMESSAGES_FAIL,
        error : error
    }
}


export const addMessageStart = () => {
    return{
        type: actionTypes.ADDMESSAGE_START,
    }
}
export const addMessageSuccess = () => {
    return{
        type: actionTypes.ADDMESSAGE_SUCCESS,
    }
}
export const addMessageFailed = (error) => {
    return{
        type: actionTypes.ADDMESSAGE_FAIL,
        error : error
    }
}


export const getRoomMessages = (roomId) => {
    return (dispatch)=>{
        try{
            dispatch(roomMessageStart())
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc')
            .onSnapshot( snapshot => {
                dispatch(roomMessageSuccess(
                    snapshot.docs.map( doc => ({
                        id:doc.id,
                        ...doc.data(),
                    }))
                ))
            }  )
        }catch(error){
            dispatch(roomMessageFailed(error))
        }
    }    
}

export const addMessage = (roomId,message,name,email) =>{
    return (dispatch) =>{
            dispatch(addMessageStart())

            db.collection('rooms').doc(roomId).update({
                lastMessage : message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }).then(result =>{
                dispatch(addMessageSuccess())
            }).catch(error => {
                dispatch(addMessageFailed(error))
            })

            db.collection('rooms').doc(roomId).collection('messages').add({
                message:message,
                name:name, 
                email:email,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }).then(result =>{
                dispatch(addMessageSuccess())
            }).catch(error => {
                dispatch(addMessageFailed(error))
            })
    }
}