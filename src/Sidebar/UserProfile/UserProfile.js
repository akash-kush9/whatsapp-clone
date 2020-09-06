import React ,{useEffect} from 'react'
import './UserProfile.css'
import {Avatar,IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {connect} from 'react-redux';

const  UserProfile = (props) => {

    return (
            <div className='sidebar__header'>
                <Avatar 
                    alt={props.user?.displayName}
                    src= {props.user?.photoURL}
                >
                    {props.user?.displayName}
                </Avatar>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MessageIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user : state.auth.user
    }
}


export default connect(mapStateToProps)(UserProfile)
