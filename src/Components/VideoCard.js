import React from 'react'
import '../Styles/VideoCard.css';

const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8 19V5L19 12ZM10 12ZM10 15.35 15.25 12 10 8.65Z"/></svg>

const VideoCard = ({image,name,index}) => {
  return (
    <div className='videoCard' style={{backgroundImage:`url(${image})`}}>
    <a href='#/'> {playButton} </a>
      <p> {name} </p>

    </div>
  )
}

export default VideoCard;
