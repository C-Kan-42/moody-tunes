import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ track }) => {
  const embedUrl = `https://open.spotify.com/embed/track/${track.spotifyId}`
  return(
  <li className="track">
    <span>{track.title}</span>
    <span>{track.artist}</span>
    <iframe src={embedUrl} width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </li>
  )
}

export default Track;