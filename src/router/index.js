import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Shopcart = () => import("../views/shopcart/ShopCart.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Detail = () => import("views/detail/Detail.vue")

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Shopcart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:id",
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to , from , next) => {
  // to.$mySwiper.autoplay.start()
  next()
})

export default router