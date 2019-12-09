import Vue from "vue";
import VueRouter from "vue-router"
import LogIn from '../components/LogIn.vue'
import Home from '../components/Home.vue'
import ListIssues from '../components/ListIssues.vue'
import Details from '../components/Details.vue'
import CreateEdit from '../components/CreateEdit.vue'
import AllIssues from '../components/AllIssues.vue'
import OpenIssues from '../components/OpenIssues.vue'
import MyIssues from '../components/MyIssues.vue'
import WatchingIssues from '../components/WatchingIssues.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: LogIn
        },
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/issues",
            name: "Issues",
            component: ListIssues,
            redirect: "/issues/all",
            children: [
                {
                    path: "/all",
                    name: "All issues",
                    component: AllIssues
                },
                {
                    path: "/open",
                    name: "Open issues",
                    component: OpenIssues
                },
                {
                    path: "/mine",
                    name: "My issues",
                    component: MyIssues
                },
                {
                    path: "/watching",
                    name: "Watching issues",
                    component: WatchingIssues
                }
            ]
        },
        {
            path: "/issues/:id",
            name: "Issues Details",
            component: Details,
        },
        {
            path: "/create",
            name: "New issue",
            component: CreateEdit
        },
        {
            path: "/edit/:id",
            name: "Edit Issue",
            component: CreateEdit
        }
    ]
})

