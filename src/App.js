import React, { useEffect } from 'react';
import './app.css';
import Login from './component/Login';
import { getTokenFromUrl } from './component/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/Player';
import { useDataLayer } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ token, playlist_id }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      //set token to dataLayer 
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        //Set user to Data layaer
        dispatch({
          type: 'SET_USER',
          user: user,
          userid: user.display_name,
        });
      });
      //Get user Playlist 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      //Get playlist for from playlist ID
      spotify.getPlaylist(playlist_id)
        .then(response => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        });
        //Device Id Active
        // spotify.getMyDevices()
        // .then(res=>{
        //   if(res){
        //   dispatch({
        //     type: "SET_DEVICE",
        //     device_id: res.devices[0].id,
        //   });
        // }
        // });
    }
  }, [playlist_id]);

  useEffect(
    () => {
      if (token) {
        //Get playlist for from playlist ID
        spotify.getPlaylist(playlist_id)
          .then(response => {
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
          });
      }
    }, [playlist_id, token]
  );


  return (
    <div className="app">
      {/*Spotify Logo*/}
      {/*Spotify Log in button */}
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
