
import HomePage from "./components/Home.vue"
import WorkPage from "./components/Work.vue";
import PortfolioPage from "./components/Portfolio.vue";
import ContactPage from "./components/Contact.vue";
import Renderpdf from "./components/Renderpdf.vue";
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
        path:"/portfolio",
        component: PortfolioPage
    },
    {
        path:"/contact",
        component: ContactPage
    },
    {
        path:"/resume",
        component: Renderpdf
    }
];