import {createRouter,createWebHistory} from "vue-router";

const routes = [
  {
    path:'/',
    redirect:'/Home/home'
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
    path: '/about',
    component: ()=>import('../components/about')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//导出
export default router
