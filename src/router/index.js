import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'


// const routes = [
//     {path: '/', name: Home, component: Home},
//     {path: '/About', name: About, component: About},
//     {path: '/Browse', name: Browse, component: Browse},
//     {path: '/Author', name: Author, component: Author},
//     {path: '/Signup', name: Signup, component: Signup},
//     {path: '/Login', name: Login, component: Login},
//     {path: '/Forgotpasswd', name: Forgotpasswd, component: Forgotpasswd},
//     {path: '/Resetpasswd', name: Resetpasswd, component: Resetpasswd}



// ]

const router = createRouter ( {
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router