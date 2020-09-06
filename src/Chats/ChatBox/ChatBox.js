import React,{useState,useEffect} from 'react'

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router'
import './ChatBox.css'
import * as actions from './../../store/actions/index'
import { connect } from 'react-redux';

const  ChatBox = (props) => {
    const {roomId} = useParams();
    const [chatMessage,setChatMessage] = useState('');

    useEffect( ()=>{
        props.getRoomMessages(roomId)
    },[roomId])

    const sendMessage = (e) =>{
       e.preventDefault();
       props.addMessage(roomId,chatMessage,props.user.displayName,props.user.email)
       setChatMessage('')
    }
    return (
        <React.Fragment>
           <div className="chat__body">
               {
                   props.messages?.map(message=>(
                    <div key = {message.id}  >
                         <p className={`chat__message ${ message.name === props.user?.displayName && 'chat__reciever' }`} >
                            <span className='chat__name'>
                                {  message.email !== props.user?.email ? message.name : null}
                            </span>
                            {message.message}
                            <span className='chat__timestamp'>
                               { message.timestamp ? new Date(message.timestamp?.toDate())?.toLocaleTimeString() : "" }
                            </span>
                        </p>
                    </div>
                   ))
               }
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form className='chat__footerForm'>
                    <input className='chat__footerInput' type='text' placeholder='Type your message here' value={chatMessage} onChange={(e)=>setChatMessage(e.target.value)} />
                    
                    <button type='submit' onClick={sendMessage}>
                        Send a Message
                    </button>
                </form>
                <MicIcon/>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRoomMessages : (roomId) => dispatch(actions.getRoomMessages(roomId)),
        addMessage : (roomId,message,name,email) => dispatch(actions.addMessage(roomId,message,name,email))
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.message.messages,
        user: state.auth.user
    }
}


export default connect(mapStateToProps,mapDispatchToProps)  (ChatBox)

