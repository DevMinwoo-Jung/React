import React, { memo } from 'react';
import styles from './video_item.module.css';
// const Videoitem = props => 
//   <li>
//     <img src={props.video.snippet.thumbnails.medium.url} alt="video thumbnails"></img>
//     <div>
//       <p>{props.video.snippet.title}</p>
//       <p>{props.video.snippet.channelTitle}</p>
//     </div>
//   </li>;


const Videoitem = memo( ({video, video: {snippet}, onVideoClick, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
    return (
    // 요렇게 하면 props.video 까지 안 써도 된다.
  // 이런걸 deconstructing이라 한다
    <li  className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)} >
      <div className={styles.video}>
        <img className={styles.thumbnails} src={snippet.thumbnails.medium.url} alt="video thumbnails"></img>
        <div className={styles.metadata}>
          <p className={styles.title} >{snippet.title}</p>
          <p className={styles.channel} >{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
    );
  });

export default Videoitem;