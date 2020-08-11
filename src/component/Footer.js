import React, { useEffect } from 'react';
import "../css/Footer.css";
import { useDataLayer } from '../DataLayer';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";




function Footer({ spotify }) {
    const [{ token, item, playing }, dispatch] = useDataLayer();

    useEffect(() => {
        // spotify.setAccessToken(token);
        spotify.getMyCurrentPlaybackState().then(r => {
            console.log(r);
            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
        });

    }, [spotify]);

    const handlePlayPause = () => {
        // spotify.setAccessToken(token);
        if (playing) {

            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };

    const handleNext = () => {
        // spotify.setAccessToken(token);
        spotify.skipToNext();
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
    };

    const handlePrevious = () => {
        // spotify.setAccessToken(token);
        spotify.skipToPrevious();
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
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__album"
                    src={item?.album.images[0].url} alt={item?.name} />
                {item ? (
                    <div className="footer__songInfo">
                        <h4>{item?.name}</h4>
                        <p>{item.artists.name}</p>
                    </div>
                ) : (
                        <div className="footer__songInfo">
                            <h4>No Song is Playing</h4>
                            <p>....</p>
                        </div>
                    )
                }
            </div>
            <div className="footer__center">
                <div className="footer__center__row1">
                    <ShuffleIcon className="footer__green" />
                    <SkipPreviousIcon onClick={handlePrevious} fontSize="large" className="footer__icon" />
                    {playing ? (
                        <PauseCircleOutlineIcon onClick={handlePlayPause} className="footer__icon" />
                    ): (
                    <PlayCircleOutlineIcon onClick={handlePlayPause} className="footer__icon" />
                    )
                }
                    <SkipNextIcon onClick={handleNext} className="footer__icon" />
                    <RepeatIcon className="footer__green" />
                </div>
                <Slider />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer
