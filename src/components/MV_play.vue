<template>
    <div class="h_top">
        <div class="h_logo">
            <img @click="go_home" src="../img/to_home.png">
            <img src="../img/logo.png" alt="">
            <span style="margin-left: 2rem;font-size: 1.5rem;"> QD MUSIC</span>
        </div>
        <div class="h_title">
            <span>My Personal System</span>
        </div>
        <div class="h_search">
            <div class="state">
                <div class="global_item special">
                    <img id="box" src="../img/p_home/my_music.png" alt="">
                </div>
                <div class="global_item">
                    <img @click="play_music" :src="state_src" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="my_mv">
      <video width="1080" height="480" :src="videoPath" ref="videoPlayer" @ended="onVideoEnded" @pause="onVideoPause"></video>
      <div>
        <button @click="playVideo">播放</button>
        <button @click="pauseVideo">暂停</button>
        <button @click="skipAhead">快进</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoPath: '/music/mv_1.mp4',
        state_src: "/music/play.png"
      }
    },
    mounted(){
        this.videoPath = '/music/mv_'+this.$route.params.mid+'.mp4'
    },
    methods: {
      playVideo() {
        this.$refs.videoPlayer.play();
      },
      pauseVideo() {
        this.$refs.videoPlayer.pause();
      },
      skipAhead() {
        this.$refs.videoPlayer.currentTime += 10; //跳过10秒
      },
      onVideoEnded() {
        console.log('视频播放结束');
      },
      onVideoPause() {
        console.log('视频已暂停');
      },
      go_home:function(){
        this.$router.push("/Music")
      }
    }
  }
  </script>

  <style>
  button{
    width: 8rem;
    height: 4rem;
    margin: 0 2rem 0;
  }
.my_mv{
    width: 97%;
    text-align: center;
}
.state {
    /* background-color: #443282; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global_item {
    width: 50%;
    height: 100%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.global_item img {
    width: 2rem;
}

.special {
    justify-content: right;
}

.h_page {
    height: 100%;
}

.h_top {
    width: 100%;
    height: 10%;
    /* background-color: aquamarine; */
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

}


.h_logo {
    flex: 1.1;
    /* background-color: aquamarine; */
    display: flex;
    align-items: center;
    /* font-family:'Courier New', Courier, monospace ; */
}

.h_logo span {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.h_title span {
    font-size: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgba(20, 20, 10, 0.8);
}

.h_logo img {
    width: 2.5rem;
    border-radius: 50%;
    margin-left: 2.5rem;
    vertical-align: middle;
}

.h_search {
    flex: 0.5;
}

.h_title {
    flex: 1;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>