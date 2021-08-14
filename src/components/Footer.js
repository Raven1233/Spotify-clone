import React,{useEffect} from 'react'
import "./Footer.css"
import { useDataLayerValue } from '../DataLayer'
import SpotifyPlayer from 'react-spotify-web-playback'
export const Footer =({spotify})=>{
    const [{play_uri, token, playing }, dispatch] = useDataLayerValue()

    let track=null
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r)
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          })
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
        })
      }, [spotify,dispatch])

     const handleChange = () => {
        dispatch({
          type: "SET_ITEM",
          item: track,
        })
        if(!track.isPlaying){
          dispatch({
            type: "SET_PLAYING",
            playing: track.isPlaying
          })
        }
      }

    return(
        <footer >
            <div className="footer_player_container">
            <SpotifyPlayer 
                name='Spotify-clone'
                token={token}
                uris={[play_uri]}
                styles={{
                    bgColor: ' #282828',
                    color: '#fff',
                    loaderColor: '#1DB954',
                    sliderColor: '#1DB954',
                    savedColor: '#fff',
                    trackArtistColor: '#ccc',
                    trackNameColor: '#fff',
                    loaderSize:1.5,
                    sliderHandleColor: "#fff"
                  }}
                play={playing}
                callback={(state)=>{
                    track=state
                    if (track.isPlaying){
                      handleChange()
                    }
                }}
                />
            </div>
        </footer>
    )
}