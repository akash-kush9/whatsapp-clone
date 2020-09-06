import React,{useState,useEffect} from 'react'
import  './Chats.css'
import ChatBox from './ChatBox/ChatBox';
import ChatRoomWidgets from './ChatRoomWidgets/ChatRoomWidgets';
import {useParams} from 'react-router-dom';
import db from './../firebase';


const Chats = () => {
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState('');
    const [timestamp , setTimeStamp] = useState(0);
    const [avatarUrl , setAvatarUrl] = useState('');
    useEffect ( ()=> {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
                setTimeStamp(snapshot.data().timestamp?.seconds*1000)
                setAvatarUrl(snapshot.data().avatarUrl)
            })
    }
    ,[roomId, timestamp]);

    return (
        <div className='chats' >
            <ChatRoomWidgets  
                roomName = {roomName}
                timestamp = {timestamp}
                avatarUrl  = {avatarUrl}
            />
            <ChatBox />
        </div>
    )
}

export default Chats
