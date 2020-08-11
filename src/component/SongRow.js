import React from 'react';
import "../css/SongRow.css";

function SongRow({ track, playSong}) {
    // console.log("track" , track);
    return (
        <div onClick={() => playSong(track.id)} className="songRow">
            <img className="songRow__album" src={track.album.images[0].url} alt="" />
            <div className="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artists) => 
                    artists.name
                    )}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;
