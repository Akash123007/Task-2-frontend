import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
// import Profile from './components/Profile.vue'
// import Login from './components/Login.vue'
const routes=[
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Profile',
        path: '/profile',
        component: () => import('./components/Profile.vue')
    },
    // {
    //     name: 'Profile',
    //     path: '/profile',
    //     component: () => import('./components/Profile.vue')
    // },
    
];

const router = createRouter({
        history:createWebHistory(),
        routes
    }
);
export default router;