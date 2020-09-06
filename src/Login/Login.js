import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css';
import {connect} from 'react-redux'
import * as actions from './../store/actions/index'

const Login = (props) => {

    const WhatsAppImageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png';
    const signIn = (e) => {
        e.preventDefault();
        props.registerNewGoogleUser()
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src = {WhatsAppImageURL} alt='Whatsapp Login' />
            <div className='login__text'>
                <h2>
                    Sign in WhatsApp Clone
                </h2>
            </div>
            <Button
                onClick={signIn}
            >
                SignIn With Google
            </Button>
            </div>
        </div>
    )
}

const mapPropsToState =(state)=>{return{
    
}}

const mapDispatchToProps =( dispatch )=>{
    return {
        registerNewGoogleUser : ()=> dispatch( actions.signIn() ),
    }
}
export default connect(mapPropsToState, mapDispatchToProps) (Login);
