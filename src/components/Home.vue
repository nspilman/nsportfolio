<template>
  <article id="home" class="panel special">
    <div class="image">
      <img :src="mainImage" alt data-position="center center">
    </div>
    <div class="content">
      <div class="inner">
        <header>
          <div>
          <h1>Nate Spilman</h1>
          <h4>Web Developer</h4>
          </div>
          <hr>
          <p>Professional Portfolio
            <br>
          </p>
        </header>
        <nav id="nav">
          <ul class="actions vertical special spinY">
            <li>
              <router-link class="button" to="/work">Work & Resume</router-link>
            </li>
            <li>
              <router-link to="/portfolio" class="button">Projects</router-link>
            </li>
            <li>
              <router-link to="/contact" class="button">Contact</router-link>
            </li>
            <!--<li><a href="#elements" class="button">Elements</a></li>-->
          </ul>
        </nav>
        <ul class="icons">
          <li>
            <a href="https:/github.com/nspilman" target ="_blank" class="icon fa-github">
              <span class="label">GitHub</span>
            </a>
          </li>
          <li>
             <router-link to="/contact" class="icon fa-envelope"/>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
import mainImage from "../assets/img/Jan52020-pro-photo.png"
export default {
  data(){
    return{
      mainImage
    }
  }
}
</script>

<style scoped>

img{
  padding:3em;
  background-color:#fff !important;
}

</style>
