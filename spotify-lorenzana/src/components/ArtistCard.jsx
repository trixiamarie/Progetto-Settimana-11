import React from 'react'

export default function ArtistCard(props) {
  return (
    <div style={{textAlign:"center", margin:"2rem"}}>
    <h1 className="titleMain">{props.artist.name}</h1>
    <div id="followers"> {props.Followers} followers</div>
    <div>
        <button className="btn btn-success m-2 mainButton d-inline" id='playButton'>Play</button>
        <button id='followButton' className='btn btn-outline-light mainButton m-2 d-inline'>Follow</button>
    </div>
    </div>
  )
}
