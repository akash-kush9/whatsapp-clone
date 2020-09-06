import React,{useEffect,useState} from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
import db from './../../../firebase'
import firebase from 'firebase';
import {Link} from 'react-router-dom'

const  SidebarChat = ({addNewChat,id ,avatarUrl  ,name ,lastMessage}) => {

    const [seeds , setSeeds] = useState('')

    useEffect(()=>{
        setSeeds(Math.floor(Math.random() * 500))
    },[id])

    const createChat = () => {
        const roomName = prompt("Please enter room name");
        if(roomName){
            // setRoomName(roomName)
            const avatarUrl = `https://avatars.dicebear.com/api/human/${seeds}.svg`
            db.collection('rooms').add({
                avatarUrl,
                name : roomName,
                lastMessage : '' ,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            }).then( result => {
                console.log(result);
            }).catch(error => {
                console.error(error);
            })
        }
    };

    return  !addNewChat ?(
        <Link to = {`/rooms/${id}` }>
            <div id={id} className='sidebarchat'>
                <Avatar src={avatarUrl } alt={name}/>       
                <div  className='sidebarchat__details'>
                    <div  className='sidebarchat__name'>
                        <h3>{name}</h3>
                    </div>
                    <div  className='sidebarchat__message'>
                        <span> {lastMessage ||  '...'} </span> 
                    </div>
                </div>
            </div>
        </Link> 
    ) : (
        <div onClick={createChat}  className='sidebarchat'>
             <div  className='sidebarchat__details'>
                <div  className='sidebarchat__name' >
                    <h2>  Add new chart </h2>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat
