import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_List/video_list';
import SelectVideo from './components/select_video/select_video';
import styles from './app.module.css';



function App({youtube}) {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const search = query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos => setVideos(videos))
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, [youtube]);  
    return (
      <div className={styles.app}>
        <Navbar onSearch={search}/>
        <section className={styles.content}>
        { selectedVideo &&  (
          <div className={styles.detail}>
            <SelectVideo video={selectedVideo}/>
          </div>
        )}
          <div className={styles.list}>
            <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
          </div>  
        </section>
      </div>
    );

}

export default App;