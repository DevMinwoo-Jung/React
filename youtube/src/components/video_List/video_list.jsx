import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = ({videos, onVideoClick, display}) => (
    <div>
      {videos && videos.map(video => (
        <div className={styles.video}>  
          <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>
        </div> 
      ))}
    </div>
  );

export default VideoList;