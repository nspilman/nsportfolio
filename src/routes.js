
import HomePage from "./components/Home.vue"
import WorkPage from "./components/Work.vue";
import PortfolioPage from "./components/Portfolio.vue";
import ContactPage from "./components/Contact.vue";
import pageNotFound from "./components/404.vue"
export default [
    {
        path:"/",
        component: HomePage
    },
    {
        path:"/work",
        component: WorkPage
    },
    {
        path:"/contact",
        component: ContactPage
    },
    {
        path:"/*",
        component: pageNotFound
    }
];