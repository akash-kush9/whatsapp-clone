import React ,{useEffect}from 'react'
import './SidebarChats.css'
import SidebarChat from './SidebarChat/SidebarChat'
import {connect} from 'react-redux'
import * as action from './../../store/actions/index'
const SidebarChats = (props) => {

    useEffect(() => {
        props.getRooms();
    }, [])

    return (
        <div className='sidebarchats' > 
            <SidebarChat addNewChat/>
            {
                props.rooms.map(room =>
                    <SidebarChat
                    id={room.id}
                    key={room.id}
                    avatarUrl = {room.avatarUrl}
                    name = {room.name}
                    lastMessage = {room.lastMessage}
                />
                )
            }

        </div>
       
    )
}
const mapStateToProps = (state) => {
    return {
        rooms : state.room.rooms
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getRooms : () => dispatch( action.getRooms() )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SidebarChats)
