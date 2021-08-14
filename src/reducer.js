export const initialState = {
    user:null,
    playlists:[],
    discover_weekly: null,
    top_artists: null,
    playing:false,
    item: null,
    token:null,
    play_uri:"spotify:playlist:37i9dQZEVXcM2Orrfr57jP",
    //Please enter your own discover weekly uri
}

export const reducer = (state , action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
          return{
            ...state,
            playlists:action.playlists,
           
          }
          case 'SET_DISCOVER_WEEKLY':
            return{
              ...state,
              discover_weekly:action.discover_weekly,
            }
          case 'SET_TOP_ARTISTS':
            return{
              ...state,
              top_artists:action.top_artists,
            }
            case "SET_PLAYING":
              return {
                ...state,
                playing: action.playing,
              }
        
            case "SET_ITEM":
              return {
                ...state,
                item: action.item,
              }
            case "SET_PLAY_URI":
              return{
                ...state,
                play_uri:action.play_uri
              }
        default:
            return state
    }
   
}