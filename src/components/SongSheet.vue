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
    <div class="sheet_body">
        <div class="search_title">MUSIC HALL</div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">歌曲</el-menu-item>
                <el-menu-item index="2">歌手</el-menu-item>
            </el-menu>

        </div>
        <div class="pppp" id="container" ref="Music">
            <div class="con_top">
                <div class="con_item it1" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/music_sheet.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>Soaring List</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
                <div class="con_item it2" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/beauti.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>Hot Song List</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
                <div class="con_item it3" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/three.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>New Song Chart</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="con_top">
                <div class="con_item it4" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/fourth.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>Soaring List</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
                <div class="con_item it5" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/five.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>Soaring List</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
                <div class="con_item it6" @click="to_library">
                    <div class="item_img">
                        <img src="../img/SongSheet/six.jpg" alt="">
                    </div>
                    <div class="item_order">
                        <span>Soaring List</span>
                        <div class="top_three">
                            <div>1 天黑黑-孙燕姿</div>
                            <div>2 向云端-罗严</div>
                            <div>3 归途有风-王菲</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="container" ref="Author">
            <div class="my_class">
                <div class="class1" id="ite1">ALL</div>
                <div class="class1" id="ite2">Inland</div>
                <div class="class1" id="ite3">TaiW</div>
                <div class="class1" id="ite4">Europe</div>
                <div class="class1" id="ite5">Japan</div>
                <div class="class1" id="ite6">Korea</div>
            </div>
            <div class="author_img">
                <div class="img_top">
                    <img src="../img/SongSheet/six.jpg" alt="">
                    <img src="../img/SongSheet/beauti.jpg" alt="">
                    <img src="../img/SongSheet/five.jpg" alt="">
                    <img src="../img/SongSheet/SongSheet.jpg" alt="">
                </div>
                <div class="img_top_name">
                    <span>MUSIC</span>
                    <span>SJHUD</span>
                    <span>APOS</span>
                    <span>SAKLK</span>
                </div>
                <div class="img_top">
                    <img src="../img/SongSheet/music_sheet.jpg" alt="">
                    <img src="../img/SongSheet/fourth.jpg" alt="">
                    <img src="../img/SongSheet/three.jpg" alt="">
                    <img src="../img/SongSheet/beauti.jpg" alt="">
                </div>
                <div class="img_top_name">
                    <span>PAOSO</span>
                    <span>MLM</span>
                    <span>QWG</span>
                    <span>PPPO</span>
                </div>
            </div>
        </div>

        <div id="container" ref="Zj">3</div>
    </div>
</template>

<script>
import { ElMenu, ElMenuItem } from 'element-plus';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: "SongSheet",
    components: {
        ElMenu,
        ElMenuItem,
    },
    data() {
        return {
            activeIndex: '1',
            state_src: "/music/play.png"
        }
    },
    methods: {
        handleSelect(key) {
            switch (key) {
                case "1":
                    this.$refs.Music.style.display = 'block'
                    this.$refs.Author.style.display = 'none'
                    this.$refs.Zj.style.display = 'none'
                    break
                case "2":
                    this.$refs.Music.style.display = 'none'
                    this.$refs.Author.style.display = 'block'
                    this.$refs.Zj.style.display = 'none'
                    break
            }
        },
        go_home:function(){
            this.$router.push("/Music")
        },
        to_library:function(){
            this.$router.push("/Music_Library")
        },
        // 传入一个布尔值参数，表示是否旋转
        rotateBox: function (shouldRotate) {
            const box = document.querySelector('#box');
            if (shouldRotate) {
                let angle = 0; // 当前角度
                const speed = 10; // 旋转速度，单位：度/帧

                // 定时器中每帧调用的函数
                const rotate = function () {
                    angle += speed; // 更新角度
                    if (angle >= 360) angle -= 360; // 限制角度在0到359之间
                    box.style.transform = 'rotate(' + angle + 'deg)'; // 更新CSS属性transform
                }

                // 启动定时器
                box.timer = setInterval(rotate, 1000 / 20); // 每秒60帧更新一次，即每帧间隔约16.67ms
            }
            else {
                // 如果已经启动了定时器，则停止它
                if (box.timer) clearInterval(box.timer);
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.Music.style.display = 'block'
        });
        this.state = this.cardInfo.playState

        if (this.state == "true") {
            this.rotateBox(true)
        }
    },
    setup() {
        const store = useStore(); // 通过调用 useStore() 方法获得 Store 实例

        const cardInfo = computed(() => store.state.cardInfo); // 通过 computed 属性将 store.state 对象映射到本地计算属性
        const setplayState = (newstate) => store.commit('setplayState', newstate); // 在本地方法中声明 setAge，该方法可将新年龄绑定到 store.commit 的 mutation 中

        const updateState = () => {
            var x = "true"
            setplayState(x);
        };
        const getState = () => {
            return this.cardInfo.playState.value
        }
        // alert(HelloWorld.state)
        return {
            cardInfo, // return 本地计算变量，可以在模板中使用
            updateState, // return 本地方法，可以在模板中绑定
            getState
        };
    },
}

</script>
<style>
.author_img{
    width: 97%;
    height: 25rem;
}
.img_top img{
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    margin: 0 5rem 0;
}
.img_top_name,
.img_top{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img_top_name{
    height: 0rem;
}
.img_top_name span{
    display: block;
    width: 9rem;
    margin: 0 5rem 0;
    text-align: center;
}
.my_class {
    display: flex;
    /* margin-top: 1rem; */
    padding-top: 1rem;
    width: 40rem;
}

#ite1:hover,
#ite2:hover,
#ite3:hover,
#ite4:hover,
#ite5:hover,
#ite6:hover {
    background-color: antiquewhite;
}

#ite1,
#ite2,
#ite3,
#ite4,
#ite5,
#ite6 {
    cursor: pointer;
}

#ite1 {
    background-color: antiquewhite;
}

.class1 {
    width: 5rem;
    height: 2.4rem;
    background-color: rgb(242, 246, 246);
    border: 1px solid rgb(200, 199, 199);
    color: rgb(84, 83, 83);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border-radius: 40%;
    margin: 0 1rem 0;
    text-align: center;
    line-height: 2.4rem;
}

#container {
    height: 32rem;
    /* width: 100%; */
    /* background-color: indianred; */
    display: none;
}

.it1,
.it2,
.it3,
.it4,
.it5,
.it6 {
    transition: all 1s;
}

.it1:hover,
.it2:hover,
.it3:hover,
.it4:hover,
.it5:hover,
.it6:hover {
    margin-top: -2rem;
}

.con_top {
    width: 100%;
    height: 50%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: -1rem; */
}

.con_item {
    width: 20rem;
    height: 80%;
    /* background-color: antiquewhite; */
    margin: 0 3rem 0;
    display: flex;
}

.item_img {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item_img img {
    width: 8rem;
    height: 8rem;
    border-radius: 10%;
}

.top_three {
    font-size: 0.8rem;
    color: gray;
}

.top_three div {
    margin: 0.2rem 0 0;
}

.item_order {
    padding: 3rem 0 2rem;
    font-size: 1.2rem;
    color: rgb(62, 61, 61);
    font-family: 'Times New Roman', Times, serif;
}

.el-menu-demo {
    border-bottom: 1px solid #333333;
}

.search_title {
    width: 90%;
    height: 3rem;
    /* background-color: #443282; */
    font-size: 2rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 1rem 1rem 0;
    color: rgb(62, 61, 61);

}

.sheet_body {
    width: 100%;
    height: 90%;
    /* display: flex; */
    /* background-image: url("../img/SongSheet/SongSheet.jpg"); */
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
}</style>