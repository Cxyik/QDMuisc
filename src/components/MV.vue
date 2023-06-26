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
    <div class="m_body">
        <div class="m_top specail">
            <div class="mv_item">
                <img @click="go_mv(1)" src="../img/p_mv/mv_1.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(2)" src="../img/p_mv/mv_7.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(3)" src="../img/p_mv/mv_2.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(4)" src="../img/p_mv/mv_3.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
        </div>
        <div class="m_top">
            <div class="mv_item">
                <img @click="go_mv(5)" src="../img/p_mv/mv_4.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(6)" src="../img/p_mv/mv_5.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(7)" src="../img/p_mv/mv_6.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
            <div class="mv_item">
                <img @click="go_mv(8)" src="../img/p_mv/mv_8.jpg" alt="">
                <div style="padding-left: 0.1rem;">ambition</div>
                <div style="padding-left: 0.1rem;">jackie</div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    name: "MV_vue",
    data() {
        return {
            state_src: "/music/play.png"
        }
    },
    methods: {
        go_home: function () {
            this.$router.push("/Music")
        },
        go_mv:function(id){
            this.$router.push({
                name:"Play_Mv",
                params:{
                    mid:id
                }
            })
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
    },
}
</script>

<style>
/* 
*/
.specail {
    /* padding-top: 1rem; */
}

.m_body {
    width: 100%;
    height: 40rem;
    /* padding-top: rem; */
    background-color: rgb(43, 42, 42);
}

.m_top {
    width: 100%;
    height: 20rem;
    /* background-color: aquamarine; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.mv_item {
    width: 20rem;
    height: 18rem;
    /* background-color: pink; */
    margin: 0 2rem 0;
    color: whitesmoke;
}

.mv_item img {
    width: 18rem;
    border-radius: 5%;

}


/*  */


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