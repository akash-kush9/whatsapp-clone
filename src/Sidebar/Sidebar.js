import React from 'react'
import './Sidebar.css'
import SidebarChats from './SidebarChats/SidebarChats'
import UserProfile from './UserProfile/UserProfile'
import SearchOutlined from '@material-ui/icons/SearchOutlined';



const Sidebar = () =>{
    return (
        <div className='sidebar'>
            <UserProfile/>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input 
                        placeholder='Search'
                        type='text'
                    />    
                </div>
            </div>
            <SidebarChats/>
        </div>
    )
}

export default Sidebar
