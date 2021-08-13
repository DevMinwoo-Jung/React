import React from 'react';
import styles from './select_video.module.css'

const SelectVideo = ({video}) => (
    <section className={styles.detail}>
      <iframe 
      className={styles.video}
      type="text/html"
      title="youtube"
      width="100%" 
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen>
      </iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre>{video.snippet.description}</pre>
      
    </section>
);

export default SelectVideo;