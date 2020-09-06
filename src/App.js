import React from 'react';
import './App.css';
import SideBar from './Sidebar/Sidebar'
import Chats from './Chats/Chats'
import Login from './Login/Login'
import { Switch, Route }  from 'react-router-dom'
import {connect} from 'react-redux'

const App = (props) => {
  return (
    <div className="app">
          {!props.user ?  <Login/> :
            <div className="app__body">
                  <Switch>
                      <Route path = '/rooms/:roomId'>
                        <SideBar />
                        <Chats /> 
                      </Route> 
                      <Route path = '/' component={SideBar} />
                  </Switch>
            </div>
        }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.auth.user
  }
}

export default connect(mapStateToProps)(App);
