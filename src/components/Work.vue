<template>
  <article id="work" class="panel secondary">
    <div class="image">
      <img src="../assets/img/workImage.jpg" alt data-position="center center" />
    </div>
    <div class="content">
      <ul class="actions spinX">
        <li>
          <router-link to="/" class="button small back">Back</router-link>
        </li>
      </ul>
      <div class="inner">
        <header>
          <h2>Work</h2>
          <p>
            Full Stack Developer
            <br />with background in Project Management
          </p>
          <br />
          <a href="https://natespilman.tech/media/pdfs/2019_Resume.pdf" target="_blank">
            <p>resume</p>
          </a>
          <Skills />
        </header>
        <p>I started my career as a software implementation project manager at Epic, during which I developed a deep interest in software development itself. I started with "Automate the Boring Stuff with Python," and was soon using Python to compare large data sets, manage database tables and distribute information to my team across internal folders.</p>
        <p>Fast forward a few years, I am now a Software Engineer at MCG Health, working with some brilliant people and building quality software for our customers.</p>
        <p>On the side, I also organize and do development work with the Junior Dev Struggle Bus, a coding education community and Washington non-profit organization.</p>
        <div class="row">
          <div class="col-sm-6">
            <router-link to="/portfolio">
              <span class="icon fa-laptop" />My Portfolio
            </router-link>
          </div>
          <div class="col-sm-6">
            <router-link to="contact">
              <span class="icon fa-envelope" />Contact Me
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Skills from "./Skills";
export default {
  components: {
    Skills
  }
};
</script>

