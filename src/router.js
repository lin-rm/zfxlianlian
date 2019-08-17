import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from './view/hero.vue'
import Heroadd from './view/heroadd.vue'
import Heroxx from './view/heroxx.vue'
import Wuqi from './view/wuqi.vue'
import Zhuangbei from './view/zhuangbei.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/hero'},
    {name: 'hero', path: '/hero', component: Hero},
    {name: 'heroadd', path: '/heroadd', component: Heroadd},
    {name: 'heroxx', path: '/heroxx', component: Heroxx, props: true},
    {name: 'wuqi', path: '/wuqi', component: Wuqi},
    {name: 'zhuangbei', path: '/zhuangbei', component: Zhuangbei}
  ]
})

export default router