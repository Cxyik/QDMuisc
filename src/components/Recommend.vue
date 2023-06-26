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
    <div class="container">
        <div class="Recommend_title">My MUSIC</div>
        <div class="Recommend_music">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="date" label="Song" width="150">
                </el-table-column>
                <el-table-column prop="name" label="Singer" width="150">
                </el-table-column>
                <el-table-column prop="province" label="Album" width="150">
                </el-table-column>
                <el-table-column fixed="right" label="Operation" width="150">
                    <template v-slot="scope">
                        <el-button @click="handleClick(scope)" type="text" size="small">{{ scope.row.state
                        }}</el-button>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="Operation" width="150">
                    <template v-slot="scope">
                        <el-button type="text" size="small" @click="remove(scope.$index)">remove</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { Table, ebtn } from 'element-plus';
import { computed } from 'vue';
import { useStore } from 'vuex';

const audio = new Audio();



export default {
    name: "Recommend_M",
    methods: {
        // 监听播放结束事件，并调用回调函数
        go_home: function () {
            this.$router.push("/Music")
        },
        handleClick(s) {
            var row = s.row
            this.rotateBox(false)
            if (row.state == "PLAY") {
                this.updateindex(`${s.$index}`)
                switch (row.date) {
                    case "处处吻":
                        audio.src = "/music/处处吻.mp3"
                        break
                    case "Closer":
                        audio.src = "/music/Closer.mp3"
                        break
                    case "可爱女人":
                        audio.src = "/music/可爱女人.mp3"
                        break
                    case "One Day":
                        audio.src = "/music/One Day.mp3"
                        break
                    case "夏天的风":
                        audio.src = "/music/夏天的风.mp3"
                        break
                    case "你要的爱":
                        audio.src = "/music/你要的爱.mp3"
                        break
                    case "郎的诱惑":
                        audio.src = "/music/郎的诱惑.mp3"
                        break
                    case "想某人":
                        audio.src = "/music/想某人.mp3"
                        break
                }
                audio.play()
                this.tableData.forEach(obj => {
                    obj["state"] = "PLAY"
                })
                row.state = "STOP"

                this.play_state = "true"
                this.updateState("true")
                this.rotateBox(true)
            }
            else {
                row.state = "PLAY"
                audio.pause()

                this.play_state = "false"
                this.updateState("false")
                this.rotateBox(false)
            }
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
        },
        remove(index) {
            if (index != -1) {
                // 删除歌曲的逻辑
                this.tableData.splice(index, 1);
            }

        }
    },
    data() {
        return {
            play_state: "false",
            state_src: "/music/play.png",
            a_src: "/music/处处吻.mp3",
            tableData: [{
                date: '处处吻',
                name: '杨千嬅',
                province: '电光幻影',
                state: "PLAY"
            }, {
                date: 'Closer',
                name: 'The Chainsmokers/Halsey',
                province: 'Closer',
                state: "PLAY"
            }, {
                date: '可爱女人',
                name: '周杰伦',
                province: 'Jay',
                state: "PLAY"
            }, {
                date: 'One Day',
                name: 'MatisYahu',
                province: 'One Day',
                state: "PLAY"
            }, {
                date: '你要的爱',
                name: '戴佩妮',
                province: '怎样',
                state: "PLAY"
            }, {
                date: '想某人',
                name: 'POSS',
                province: '想某人',
                state: "PLAY"
            }, {
                date: '郎的诱惑',
                name: '凤凰传奇',
                province: '最炫民族风',
                state: "PLAY"
            }, {
                date: '夏天的风',
                name: '王庆典',
                province: '夏天',
                state: "PLAY"
            }]
        }

    },
    components: {
        'el-table': Table,
        'el-button': ebtn
    },
    setup() {
        const store = useStore(); // 通过调用 useStore() 方法获得 Store 实例

        const cardInfo = computed(() => store.state.cardInfo); // 通过 computed 属性将 store.state 对象映射到本地计算属性
        const setplayState = (newstate) => store.commit('setplayState', newstate); // 在本地方法中声明 setAge，该方法可将新年龄绑定到 store.commit 的 mutation 中
        const setplayindex = (newstate) => store.commit('setplayindex', newstate); // 在本地方法中声明 setAge，该方法可将新年龄绑定到 store.commit 的 mutation 中

        const updateState = (playstate) => {
            setplayState(playstate);
        };
        const updateindex = (playindex) => {
            setplayindex(playindex)
        }

        return {
            cardInfo, // return 本地计算变量，可以在模板中使用
            updateState, // return 本地方法，可以在模板中绑定
            updateindex
        };
    },
    mounted() {
        this.state = this.cardInfo.playState

        if (this.state == "true") {
            this.rotateBox(true)

            const row = this.tableData[this.cardInfo.index];
            row.state = "Stop";
            this.tableData = [...this.tableData]; // 这样触发 Vue.js 更新
        }
    },
}
</script>

<style>
.Recommend_title {
    width: 100%;
    height: 3rem;
    /* background-color: antiquewhite; */
    text-align: center;
    line-height: 3rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}

.Recommend_music {
    max-width: 70%;
    font-family: Georgia, 'Times New Roman', Times, serif !important;

}

.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* margin: 1rem 1rem 0; */
    /* background-color: aqua; */
}
</style>