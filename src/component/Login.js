import React from 'react';
import '../css/Login.css';
import SpotifyLogin from "../images/SpotifyLogin.jpg"
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            {/*Spotify logo */}
            <img src={SpotifyLogin} alt="Spotify Login Logo"/>
            {/*Spotify login*/}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
