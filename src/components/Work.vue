<template>
    <article id="work" class="panel secondary">
						<div class="image">
							<img src="../assets/img/workImage.jpg" alt="" data-position="center center" />
						</div>
						<div class="content">
							<ul class="actions spinX">
								<li><router-link to="/" class="button small back">Back</router-link></li>
							</ul>
							<div class="inner">
								<header>
									<h2>Work</h2>
									<p>Full Stack Developer<br />
									with background in Project Management</p>
									<br>
									<a href = "https://natespilman.tech/media/pdfs/Nate_Spilman_Resume_PbZVy2A.pdf" target = "_blank"><p>resume</p></a>
								<!-- <Skills/> -->
								</header>
								<p>I started my career as a software implementation project manager at Epic, during which I developed a deep interest in software development itself. I started with "Automate the Boring Stuff with Python," and was soon using Python to compare large data sets, manage database tables and distribute information to my team across internal folders. </p>
								<p>I soon picked up a remote pro-bono full stack development position with Arts on the Hudson, a Jersey City, NJ based arts non-profit. I spent nights and weekends learning Django and the ins and outs of web hosting, transitioning the Arts on the Hudson website from Wix to Django, in the process developing the whole site from scratch.</p>
								<p>Back at Epic, I was offered an opportunity to build and maintain an internal data management web portal. I quickly learned C# ASP.NET and MS SQL Server, and significantly honed my vanilla JS skills to support this portal.  </p>
								<p>I recently moved to Seattle with his lovely fiancee, and am looking for a development position in the Seattle area.</p>
								<div class = "row">
									<div class = "col-sm-6">
										 <router-link to="/portfolio"> <span class = "icon fa-laptop"/>My Portfolio</router-link>
									</div>
									<div class = "col-sm-6">
										 <router-link to="contact"><span class = "icon fa-envelope"/>Contact Me</router-link>
									</div>
								</div>
							</div>
						</div>
					</article>
</template>

<script>
import Skills from "./Skills"
export default {
	components:{
		Skills
	}
	
}
</script>

