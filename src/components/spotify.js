
export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectUri =window.location.origin;

const clientId = "620138c08d404ec4b7cf5a997d0b4e66"

const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-modify-playback-state",
]

export const getAccessToken = () =>{
  return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial,item) => {
    let parts = item.split('=')
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  },{})
  
  
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`