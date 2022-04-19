import {createRouter,createWebHistory} from "vue-router";

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/Home',
    component:()=>import('../views/Home'),
    children:[
      {
        path:'home',
        component:()=>import('../components/home')
      },
      {
        path:'about',
        component:()=>import('../components/about')
      },
      {
        path:'helloword',
        component:()=>import('../components/HelloWorld')
      },
    ]
  },
  {
    path: '/room:id',
    component: ()=>import('../views/Room')
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/admin',
    component: ()=>import('../views/admin'),
    redirect: '/admin/dashboard',
    children: [
      {
        path: '/admin/dashboard',
        component: ()=> import('../views/admin/children/dashboard')
      },
      {
        path: '/admin/about',
        component: ()=> import('../views/admin/children/about')
      },
      {
        path: '/admin/test',
        component: ()=> import('../views/admin/children/test')
      },

    ]
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//导出
export default router
