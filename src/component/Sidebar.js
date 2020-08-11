import React from 'react';
import "../css/Sidebar.css";
import SpotifyLogin from "../images/SpotifyLogin.jpg";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayer } from '../DataLayer';

function Sidebar() {
    const [{playlists}, ] = useDataLayer();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={SpotifyLogin} alt="Spotify logo"/>
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {
                playlists?.items?.map(playlist => (
                    <SidebarOption key={playlist.id} title={playlist.name} id={playlist.id}/>
                ))
            }
        </div>
    );
}

export default Sidebar;
