import styles from './app.module.css';
import React, { useCallback, useEffect, useState } from 'react'
import Videolist from './components/vidoe_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);

const selectVideo = video => {
  setSelectedVideo(video);
}

const search = useCallback(query => {
  setSelectedVideo(null);
  youtube
  .search(query)
  .then(videos => { 
    setVideos(videos)});
}, [youtube]);

useEffect(() => {
  youtube
  .mostPopular()
  .then(videos => setVideos(videos));
},[youtube]) //
// 텅텅 빈 배열은 마운트 될때만 업데이트 된다 여기다가 , vidoes를 쓰면 계속해서 업데이트 된다

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
      {selectedVideo && (
      <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
      )}
        <div className={styles.list}>
          <Videolist videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
      {/* 컴포넌트에는 클래스네임을 못 쓰는데 props로 전달되기 때문이다. */}
    </div>
    );
}

export default App;
