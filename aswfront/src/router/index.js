import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../components/LogIn.vue";
import Home from '../components/Home.vue';
import ListIssues from '../components/listIssues/ListIssues.vue';
import Details from '../components/Details.vue';
import CreateEdit from '../components/CreateEdit.vue';

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
                    path: "all",
                    name: "AllIssues"
                },
                {
                    path: "open",
                    name: "OpenIssues"
                },
                {
                    path: "mine",
                    name: "MyIssues"
                },
                {
                    path: "watching",
                    name: "WatchingIssues"
                }
            ]
        },
        {
            path: "/issue/:id",
            name: "Issue Details",
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
});
export default router;

