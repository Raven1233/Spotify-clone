import React,{ useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import { getAccessToken } from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import {useDataLayerValue} from './DataLayer'


const spotifyOb = new SpotifyWebApi()

function App() {
    const [{token},dispatch] = useDataLayerValue()
    useEffect(() => {
      const hash = getAccessToken();
      window.location.hash=""
      const _token = hash.access_token

      if (_token){

        dispatch(
          {
            type: 'SET_TOKEN',
            token: _token,
          }
        )
        spotifyOb.setAccessToken(_token) 

        spotifyOb.getMe().then(user => {
          dispatch(
            {
              type: 'SET_USER',
              user:user,
            }
          )
        })
        spotifyOb.getUserPlaylists().then((playlists) => {
          dispatch(
            {
              type: 'SET_PLAYLISTS',
              playlists:playlists,
            }
          )
        })
      }
      spotifyOb.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      //Please enter your own discover weekly playlist id
      spotifyOb.getPlaylist("37i9dQZEVXcM2Orrfr57jP").then((response)=>{
        dispatch(
          {
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly:response,
          }
        )
      })
      
    },[token,dispatch])
  return (
      
    <div className="App">
      { token ?  <Player spotify={spotifyOb}/> :  <Login/>}
    </div>
  )

}

export default App;
