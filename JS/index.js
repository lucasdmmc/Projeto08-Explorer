import {Router} from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about.html", "/pages/about.html")
router.add("/contact.html", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()