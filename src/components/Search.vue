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
    <div class="search_body">
        <div class="search_input">
            <div class="my_input" style="margin-top: 15px;">
                <el-input placeholder="Search For Singers Or Songs" v-model="input2">
                    <template #append>
                        <el-button icon="el-icon-search"></el-button>
                        <el-icon>
                            <Search />
                        </el-icon>
                    </template>
                </el-input>
            </div>
            <div class="hot_words">
                <div class="recommend_word">
                    Hot Search
                </div>
                <div class="border_search">
                    <div class="hot_item">Jay</div>
                    <div class="hot_item">Closer</div>
                    <div class="hot_item">WIRHD</div>
                    <div class="hot_item">OPOP</div>
                </div>
                <div class="border_search">
                    <div class="hot_item">Jay</div>
                    <div class="hot_item">Closer</div>
                    <div class="hot_item">WIRHD</div>
                    <div class="hot_item">OPOP</div>
                </div>
                <div class="border_search">
                    <div class="hot_item">Jay</div>
                    <div class="hot_item">Closer</div>
                    <div class="hot_item">WIRHD</div>
                    <div class="hot_item">OPOP</div>
                </div>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>
<script>
import { ElInput, ElButton } from 'element-plus';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Search_V",
    data() {
        return {
            state_src: "/music/play.png",
            input2: ""
        }
    },
    components: {
        ElInput,
        ElButton
    },
    methods:{
        go_home:function(){
            this.$router.push("/Music")
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
    }
}
</script>

<style>
.hot_item {
    width: 20%;
    height: 3rem;
    /* background-color: white; */
    background-color: rgba(255, 255, 255,0.7);
    border-radius: 30%;
    margin: 1rem 0.5rem 0;
    text-align: center;
    line-height: 3rem;
}

.search_input {
    margin-top: 2rem;
    width: 100%;
    height: 70%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    /* justify-content:center; */
    flex-direction: column;
}

.my_input {
    width: 25%;
}

.hot_words {
    width: 30%;
    height: 80%;
    /* background-color: pink; */
}

.recommend_word {
    color: black;
    text-align: center;
    padding: 2rem 0 0;
    font-size: 1.5rem;

}

.border_search {
    width: 100%;
    height: 5rem;
    /* background-color: #443282; */
    margin-top: 2rem;
    display: flex;
    /* align-items: center; */
    justify-content: center;

}

.search_body {
    width: 100%;
    height: 90%;
    display: flex;
    background-image: url("../img/p_search/search_back.jpg");
}

.h_search {
    height: 100%;
}

.recommend {
    height: 20rem;
    border: 1px solid #443282;
    border-radius: 10%;
    width: 60%;
    position: absolute;
    right: 3rem;
    top: 7rem;
    background-image: url("../img/p_recommend/Recommend_back.jpg");

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

.h_card {
    background-color: #ffffff;
    background-image: url("../img/p_home/peason_back.jpg");
    -webkit-box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
    padding: 2rem;
    /* margin: 2rem; */
    /* margin-top: 1rem; */
    width: 19rem;
    height: 30rem;
    justify-items: center;
    cursor: pointer;
    border-radius: 1.75rem;
    -webkit-animation: fadein 1s ease-in-out 0ms 1;
    animation: fadein 1s ease-in-out 0ms 1;
    color: #443282;
    position: relative;
    top: 2rem;
    left: 2rem;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}</style>