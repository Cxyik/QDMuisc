// store.js
import { createStore } from 'vuex';

// 状态管理 检测是否处于播放状态
const store = createStore({
  state() {
    return {
      cardInfo: {
        playState:"false",
        index:1
      },
      music:[
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
        { name: '歌曲1', singer: '歌手1', album: '专辑1' ,Operation:"加入歌单"},
      ]
    };
  },
  mutations: {
    setplayState: (state, now_play) => {
      state.cardInfo.playState = now_play;
    },
    setplayindex: (state, now_play) => {
        state.cardInfo.index = now_play;
      },
  },
});

export default store;