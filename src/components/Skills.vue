<template>
    <div id = "skills">
        <span class= "text-center skills"><h4> SKILLS </h4> </span>
        <div id = "skillIcons">
        <div class = "skillIcon" v-for="skill in skills">
            <img :src="skill.image"/> 
            {{skill.name}}
        </div>
        </div>
    </div>
</template>
<script>
import jsLogo from "../assets/img/techLogos/jsLogo.png"
import reactLogo from "../assets/img/techLogos/reactLogo.png"
import aspdotnetLogo from "../assets/img/techLogos/aspdotnetLogo.png"
import cssLogo from "../assets/img/techLogos/cssLogo.png"
import digitaloceanLogo from "../assets/img/techLogos/digitaloceanLogo.png"
import djangoLogo from "../assets/img/techLogos/djangoLogo.png"
import githubLogo from "../assets/img/techLogos/githubLogo.png"
import htmlLogo from "../assets/img/techLogos/htmlLogo.png"
import netlifyLogo from "../assets/img/techLogos/netlifyLogo.png"
import pythonLogo from "../assets/img/techLogos/pythonLogo.png"
import reduxLogo from "../assets/img/techLogos/reduxLogo.png"
import sqlliteLogo from "../assets/img/techLogos/sqlliteLogo.png"
import sqlLogo from "../assets/img/techLogos/sqlLogo.png"
import vueJS from "../assets/img/techLogos/vueJs.png"
import webpackLogo from "../assets/img/techLogos/webpackLogo.png"
import gatsbyLogo from "../assets/img/techLogos/gatsbyLogo.png"
import bootstrapLogo from "../assets/img/techLogos/bootstrapLogo.png"


export default {
 data(){
     return{
      skills:[
          {
              name:"HTML",
              image: htmlLogo,
          },
          {
              name:"CSS",
              image: cssLogo,
          },
          {
              name:"Javascript",
              image: jsLogo,
          },
          {
              name:"ReactJS",
              image: reactLogo,
          },
          {
              name:"VueJS",
              image: vueJS,
          },
          {
              name:"Redux",
              image: reduxLogo,
          },
          {
              name:"Webpack",
              image: webpackLogo,
          },
          {
              name:"Python",
              image: pythonLogo,
          },
          {
              name:"Django",
              image: djangoLogo,
          },

          {
              name:"SQL Server",
              image: sqlLogo,
          },
          {
              name:"SQLLite",
              image: sqlliteLogo,
          },

          {
              name:"Github",
              image: githubLogo,
          },
          {
              name:"Netlify",
              image: netlifyLogo,
          },
      ]   
     }
 }   
}
</script>

<style scoped> 
#skills{
    margin-top:1em;
    padding:2em;
    background-color:rgb(247, 218, 199);
    /* border-radius:2em; */
}

#skillIcons{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
}

.skillIcon{
    display:flex;
    flex-direction:column;
    align-items: center;
    width:70px;
    margin:.4em;
}

.skillIcon img{
    height:50px;
    width:50px;
}

</style>

