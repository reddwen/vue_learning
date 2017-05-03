import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  routes: [{
        path:"/home",
        component:require('../components/Home.vue')
    },{
        path:"/about",
        component:require('../components/About.vue')
    },{
        path:"/book",
        component:require('../components/Book.vue')
    },{
        path:'*',
        redirect:"/home"
    }]
})
