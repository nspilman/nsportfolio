<template>
  <article id="home" class="panel special">
    <div class="image">
      <img src="../assets/img/headshotLarger.jpg" alt data-position="center center">
    </div>
    <div class="content">
      <div class="inner">
        <header>
          <h1>Nate Spilman</h1>
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
            <a href="/contact" class="icon fa-envelope">
              <span class="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>

img{
  padding:3em;
  background-color:#fff !important;
}

</style>
