<template>
  <div id="app">
			<div id="wrapper">
        <transition name="component-fade" mode="out-in">
        <router-view/>
        </transition>
			</div>
  </div>
</template>

<script>
import HomePage from "./components/Home.vue";
import WorkPage from "./components/Work.vue";
import PortfolioPage from "./components/Portfolio.vue";
import ContactPage from "./components/Contact.vue";
import Renderpdf from "./components/Renderpdf.vue"

export default {
  name: "app",
  components: {
    HomePage,
    WorkPage,
    PortfolioPage,
    ContactPage,
    Renderpdf,
  }
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23fdfff2'/%3E%3Cstop offset='1' stop-color='%2399c3ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
