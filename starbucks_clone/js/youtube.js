// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 'player'는 html의 id 값을 읽어오는것. # 붙이지 않는다.
  new YT.Player('player', {
    videoId: 'BcUVLce3TOU', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'BcUVLce3TOU', // 반복 재생할 유투브 영상 아이디
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}