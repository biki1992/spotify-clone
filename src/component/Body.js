import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Body.css";
import Header from "./Header";
import { useDataLayer } from "../DataLayer";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
    const [{ discover_weekly, playlist_id, device_id }, dispatch] = useDataLayer();
    let {playlistId}= useParams();
    const [param, setParam] = useState("")

    

    console.log(playlistId);

    useEffect(() => {
        setParam(playlistId);
        if (param){
            console.log(param);
            dispatch({
                type: "SET_PLAYLIST_ID",
                playlist_id: param,
            });
        }
    },[param]);

    const playPlaylist = (id) => {
        console.log(device_id);
        spotify.play({
            context_uri: `spotify:playlist:${playlist_id}`,
            // device_id: device_id,
        }).then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            })
                .catch(error => console.log(error.message));
        })
            .catch(err => console.log(err.message));
    };
    const playSong = (id) => {
        // spotify.setAccessToken(token);
        console.log(device_id);
        spotify.play({
            uris: [`spotify:track:${id}`],
            // device_id: device_id,
        }).then(res => {
            spotify.getMyCurrentPlayingTrack().then(r => {
                dispatch({
                    type: "SET_ITEM",
                    item: r.item,
                });
                dispatch({
                    type: "SET_PLAYING",
                    playing: true,
                });
            });
        })
            .catch(err => console.log(err.message));
    };

    return (
        <div className="body">
            <div className="body__header">
                <Header />

                <div className="body__info">
                    <img src={discover_weekly?.images[0].url} alt="" />
                    <div className="body__infoText">
                        <strong>{discover_weekly?.type}</strong>
                        <h2>{discover_weekly?.name}</h2>
                        <p>{discover_weekly?.description}</p>
                    </div>
                </div>

                <div className="body__songs">
                    <div className="body__icons">
                        <PlayCircleFilledIcon
                            onClick={playPlaylist}
                            className="body__shuffle"
                        />
                        <FavoriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
            <div className="body__track">
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow playSong={playSong} key={item.track.id} track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body
