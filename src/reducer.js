export const initialState = {
    user: null,
    //remove after finish developing 
    token: "",
    playlists: [],
    playing: false,
    item: null,
    // discover_weekly: null,
    userid: null,
    playlist_id: "7ckLZZm8kfsGexea3p5BxM",
};

const reducer = (state, action) => {
    console.log(action);
    // Action has property type and payload
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
                userid: action.userid,
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYLIST_ID":
            return{
                ...state,
                playlist_id: action.id,
            };
        case "SET_ITEM":
            return{
                ...state,
                item: action.item,
            };
        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing,
            };
        case "SET_DEVICE":
            return{
                ...state,
                device_id: action.device_id,
            }
        default:
            return state;
    }

};

export default reducer;