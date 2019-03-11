<template>
    					<article id="portfolio" class="panel secondary">
						<!-- <div class="image">
							<img src="images/pic03.jpg" alt="" data-position="center center" />
						</div> -->
						<div class="content">
							<ul class="actions spinX">
							<li><router-link to="/" class="button small back">Back</router-link></li>
							</ul>
							<div class="inner">
								<header>
									<h2>Portfolio</h2>
									<!-- <p>Magna feugiat lorem ipsum dolor<br />
									veroeros sed adipiscing</p> -->
								</header> 
                                <div class ="row">
                                <project-box v-for="project in projects" :project="project"></project-box>
							</div>
                            </div>
						</div>
					</article>
</template>

<script>

import projectBox from "./projectBox.vue";
import wlbnyImage from "../assets/img/wlbny.png"
import AOTHlogo from "../assets/img/AOTHlogo.png"
import pyrrhicLogo from "../assets/img/pyrrhic_tree_white.png"
import travelBlogPhoto from "../assets/img/giraffeAtSunsetPortrait.jpg"
import epic from "../assets/img/epicLogo.png"
import nateHeadshot from "../assets/img/nateStaffLogo.jpg"
import weddingSite from "../assets/img/wedding.jpg"

export default {
    components:{
        projectBox
    },
    data(){
    return{
      projects:[
        {'name':'This Portfolio',
        'description':"This is Nate's Professional Portfolio",
        'accomplishments':
          ['VueJS',
          'HTML/CSS',
          'Vanilla Javascript'
        ],
        photo:nateHeadshot,
        github:'',
        website:'',
        },
        {'name':'Arts on the Hudson',
        'description':"Arts on the Hudson is a Jersey City, NJ based non-profit",
        'accomplishments':
          ['HTML/CSS',
          'Django',
          'Digital Ocean web server configuration',
        ],
        photo:AOTHlogo,
                github:'',
        website:'https://www.artsonthehudson.com',
        },
        {'name':'Pyrrhic Productions',
        'description':"Pyrrhic Productions is a video production company",
        'accomplishments':
          ['React',
          'Django',
          'Netlify Hosting',
        ],
        photo:pyrrhicLogo,
                github:'https://github.com/nspilman/pyrrhicprod',
        website:'https://www.pyrrhicproductions.com',
        },
        {'name':'WLBNY',
        'description':"WLBNY is a single page application ",
        'accomplishments':
          ['VueJS',
          'Netlify Hosting',
        ],
        photo:wlbnyImage,
                github:'https://github.com/nspilman/wlbny',
        website:'https://www.wlbny.com',},
        {'name':'Epic Internal Web Portal',
        'description':"A data management system for customer success tracking",
        'accomplishments':
          ['Vanilla Javascript',
          'C# ASP.NET',
          'Microsoft SQL Server'
        ],
        photo:epic,
        github:'',
        website:'',},
        {'name':'Personal Travel Blog',
        'description':"A static website for my the recent travel of my fiancee and me",
        'accomplishments':
          ['Gatsby / React',
          'Netlify CMS',
          'Django'
        ],
        photo:travelBlogPhoto,
        github:'https://github.com/nspilman/weddingsite',
        website:'https://www.claireandnatesavethedate.com',
        },
        {'name':'Wedding Website',
        'description':"I'm getting married in July, and built the website for our wedding guests",
        'accomplishments':
          ['VueJS',
          'Google Spreadsheet back-end',
          'Django Rest Framework'
        ],
        photo:weddingSite,
        github:'https://github.com/nspilman/the-bahblag-gatsby',
        website:'https://www.thebahblog.com',
        },
      ]
    }
  }
}
</script>

<style scoped>
.content{
    width:100% !important;
}

</style>
