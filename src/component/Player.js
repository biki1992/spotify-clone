import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from './Sidebar';
import Body from './Body';
import "../css/Player.css";
import Footer from './Footer';


function Player({ spotify }) {
    
    return (
        <Router>
            <div className="player">
                <div className="player__body">
                    {/* {side bar} */}
                    <Sidebar />
                    {/* {body} */}
                    <Switch>
                      <Route path="/" children={<Body spotify={spotify} />}/>
                      <Route  path="/playlist/:playlistId"
                        children={<Body spotify={spotify} />}  
                     />  
                    </Switch>
                </div>
                {/* {footer} */}
                <Footer spotify={spotify} />
            </div>
        </Router>
    );
}

export default Player;
