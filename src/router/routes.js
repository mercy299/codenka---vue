import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Browse from '../views/Browse.vue'
import Author from '../views/Author.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Forgotpasswd from '../views/Forgotpasswd.vue'
import Resetpasswd from '../views/Resetpasswd.vue'

const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/About', name: About, component: About},
    {path: '/Browse', name: Browse, component: Browse},
    {path: '/Author', name: Author, component: Author},
    {path: '/Signup', name: Signup, component: Signup},
    {path: '/Login', name: Login, component: Login},
    {path: '/Forgotpasswd', name: Forgotpasswd, component: Forgotpasswd},
    {path: '/Resetpasswd', name: Resetpasswd, component: Resetpasswd}
]

export default routes