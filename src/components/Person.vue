<template>
    <div class="h_top">
        <div class="h_logo">
            <img src="../img/to_home.png" @click="to_home">
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
    <div class="vip-title">
        <div class="myqq">
            <div class="myqq_photo">
                <img src="../img/p_person/person.jpg" alt="">
            </div>
            <div class="myqq_name">
                <span>HELLO</span>
                <img src="../img/p_person/d-vip1.png" alt="">
            </div>
            <div class="myqq_name new_message">
                <span>关注</span>
                <span>|</span>
                <span>粉丝</span>
            </div>
        </div>
    </div>
    <div class="bott">
        <div ref="chart" style="height: 20rem;width: 50%;margin: 0 5rem 0;"></div>
        <div ref="chart2" style="height: 20rem;width: 50%;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Person_s",
    data() {
        return {
            state_src: "/music/play.png",
            chartData: {}
        }
    },
    methods: {
        to_home: function () {
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
        const container = this.$refs.chart;
        let myChart = echarts.init(container);

        const container_0 = this.$refs.chart2
        let myChart_0 = echarts.init(container_0)

        let option = {
            title: {
                text: '您的听歌类型占比',
                subtext: '2022年',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['流行音乐', '摇滚音乐', '古典音乐', '电子音乐', '爵士音乐', '嘻哈音乐']
            },
            series: [
                {
                    name: '听歌类型占比',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 600, name: '流行音乐' },
                        { value: 310, name: '摇滚音乐' },
                        { value: 234, name: '古典音乐' },
                        { value: 135, name: '电子音乐' },
                        { value: 1548, name: '爵士音乐' },
                        { value: 170, name: '嘻哈音乐' }
                    ]
                }
            ]
        };


        let option_0 = {
            tooltip: {
                trigger: 'axis'
            },
            title: {
                text: '您本月收听时长',
                subtext: '2022年6月1日至6月9日各天听歌总时长'
            },
            xAxis: {
                type: 'category',
                data: [
                    '6-1',
                    '6-2',
                    '6-3',
                    '6-4',
                    '6-5',
                    '6-6',
                    '6-7',
                    '6-8',
                    '6-9'
                ],
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '听歌时长',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        90,
                        120,
                        150,
                        110,
                        200,
                        240,
                        180,
                        210,
                        230
                    ]
                }
            ]
        };
        myChart.setOption(option);
        myChart_0.setOption(option_0);

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
.bott {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
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

.vip-title {
    /* width: 90%; */
    height: 20rem;
    background-image: url("../img/p_person/bag.webp");
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

body::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.myqq {
    width: 15rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
}

.myqq_photo {
    margin: 5px 0 0;
}

.myqq_photo img {
    width: 5rem;
    border-radius: 50%;
}

.myqq_name {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.myqq_name img {
    width: 3rem;
    margin: 0 5px 0;
}

.new_message span {
    margin: 0 5px 0;
}
</style>