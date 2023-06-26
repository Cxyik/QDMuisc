import {createRouter,createWebHashHistory} from "vue-router"
import login from "./components/Login"
import Music from "./components/My_App"
import Search from "./components/Search"
import SongSheet from "./components/SongSheet"
import Mv from "./components/MV"
import Recommend from "./components/Recommend"
import Person from "./components/Person"
import Play_MV from "./components/MV_play"
import Music_Library from "./components/Music_Library"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:login
        },
        {
            path:"/Music",
            component:Music
        },
        {
            path:"/Search",
            component:Search
        },
        {
            path:"/SongSheet",
            component:SongSheet
        },
        {
            path:"/MV",
            component:Mv
        },
        {
            path:"/Recommend",
            component:Recommend
        },
        {
            path:"/Person",
            component:Person
        },
        {
            path:"/Play_MV:mid",
            name:"Play_Mv",
            component:Play_MV
        },
        {
            path:"/Music_Library",
            component:Music_Library
        }
    ]
})

export default router