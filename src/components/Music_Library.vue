<template>
    <div class="h_top" style="position: fixed;z-index: 10;">
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
    <div class="m_lib" style="position: absolute;top: 5rem;">
        <div class="m_lib_c">
            <el-table :data="songs" style="width: 100%" border>
                <el-table-column label="歌曲" prop="name"></el-table-column>
                <el-table-column label="歌手" prop="singer"></el-table-column>
                <el-table-column label="专辑" prop="album"></el-table-column>
                <el-table-column fixed="right" label="Operation" width="150">
                    <template v-slot="scope">
                        <el-button @click="handleClick(scope.$index)" type="text" size="small">{{ scope.row.Operation
                        }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
  
<script>
import { ElTable, ElButton } from 'element-plus';
export default {
    name: "Music_Lis",
    data() {
        return {
            songs: [
                { name: '全是爱', singer: '凤凰传奇', album: '凤凰传奇', Operation: "加入歌单" },
                { name: '我是不公主', singer: '凤凰传奇', album: '凤凰传奇', Operation: "加入歌单" },
                { name: '天蓝蓝', singer: '凤凰传奇', album: '凤凰传奇', Operation: "加入歌单" },
                { name: '高山玫瑰开', singer: '凤凰传奇', album: '凤凰传奇', Operation: "加入歌单" },
                { name: '溜溜的情歌', singer: '凤凰传奇', album: '最炫民族风', Operation: "加入歌单" },
                { name: '最炫民族风', singer: '凤凰传奇', album: '凤凰传奇', Operation: "加入歌单" },
                { name: '七里香', singer: '周杰伦', album: '周杰伦', Operation: "加入歌单" },
                { name: '龙卷风', singer: '周杰伦', album: '最伟大的作品', Operation: "加入歌单" },
                { name: '甜甜的', singer: '周杰伦', album: '周杰伦', Operation: "加入歌单" },
                { name: '明明就', singer: '周杰伦', album: '七里香', Operation: "加入歌单" },
                { name: '花海', singer: '周杰伦', album: '周杰伦', Operation: "加入歌单" },
                { name: '烟花易冷', singer: '周杰伦', album: '叶惠美', Operation: "加入歌单" },
            ],
            state_src: "/music/play.png"
        };
    },
    components: {
        ElTable,
        ElButton
    },
    methods: {
        play(song) {
            // 播放歌曲的逻辑
            console.log(`正在播放${song.name}`);
        },
        go_home: function () {
            this.$router.push("/Music")
        },
        handleClick(a) {
            console.log(a)
            this.$message({
                message: '添加成功',
                type: 'success'
            });
            this.songs.splice(a, 1);
        }
    }
};
</script>

<style>
.m_lib {
    width: 97%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.m_lib_c {
    width: 40%;

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