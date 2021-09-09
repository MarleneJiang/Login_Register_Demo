import { createRouter,createWebHistory} from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "Index",
        component:  () => import('../components/Login.vue'),
    },
    {
        path: "/login",
        name: "Login",
        component:  () => import('../components/Login.vue'),
    },
    {
        path: "/register",
        name: "Register",
        component:  () => import('../components/Register.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;