//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start///#
/* 
Step for Spotify:
1. define endpoint to spotity
2. setup Redirect URI
3. Define spotify access scopes
4. Create url for log in to spotify
 */

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "5f3ab3caca6a4893b0318a6b2c7bb72b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        //strip token
        let parts = item.split("=");
        initial[parts[0]] =decodeURIComponent(parts[1]);
        return initial;
        
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;