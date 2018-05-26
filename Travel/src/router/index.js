import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import City from '../components/city/City'
import Detail from '../components/detail/Detail'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {title: 'home'},
      component: Home
    },
    {
      path: '/city',
      meta: {title: 'city'},
      component: City
    },
    {
      path: '/detail/:id',
      meta: {title: 'detail'},
      component: Detail
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})

router.beforeEach((to,from,next)=>{
  let documentTitle='travel';
  to.matched.forEach((path)=>{
    if(path.meta.title){
      documentTitle+=`-${path.meta.title}`;
    }
  })
  document.title=documentTitle;
  next();
})

export default router;