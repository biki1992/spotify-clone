import React from 'react';
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayer } from "../DataLayer";


function Header() {
    const [{ user }, ] = useDataLayer();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, song, album, genre"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar className="header__avatar" src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header;
