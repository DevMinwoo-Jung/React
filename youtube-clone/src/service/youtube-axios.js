
class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  // constructor(key) {
  //   this.youtube = axios.create({
  //     baseURL: `https://youtube.googleapis.com/youtube/v3`,
  //     params: {key: key},
  //   })
  // }
  // 이걸 여기서 하지 않고 index.jsx에서 하는 방법도 있다.

  async mostPopular(){
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return response.data.items;

    }

    async search(query){
      const response = await this.youtube.get('search', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
          type: 'video',
          q: query
        },
      });
      return response.data.items.map(item => ({...item, id: item.id.videId}));
  
      }
}
// 요렇게 클래스로 fetch를 따로 빼준 이유는 컴포넌트에서 fetch api가 동작하면 유닛 테스트를 할 때 계속해서
// 네트워크 통신이 발생하기 때문이다.
// 그리고 이걸 app에 필요한 dependency를 injection을 해주면 단위 테스트 하기 유용하다!
export default YoutubeAxios;