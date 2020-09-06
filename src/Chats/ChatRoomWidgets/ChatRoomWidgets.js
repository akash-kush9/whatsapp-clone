import React,{useEffect} from 'react'
import './ChatRoomWidgets.css'
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ChatRoomWidgets = ({    roomName ,    timestamp ,    avatarUrl }) => {

    return (
        <div className="chat__header">
                <div className="chat__headerAvatar">
                    <Avatar src={avatarUrl}/>
                </div>
                <div className="chat__headerInfo">
                       <h3>  {roomName}</h3>                        
                       <p> { timestamp ? new Date( timestamp).toLocaleString() : '...'   }</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                         <SearchIcon/>
                    </IconButton>                   
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>                    
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>                    
                </div>
            </div>
    )
}

export default ChatRoomWidgets
