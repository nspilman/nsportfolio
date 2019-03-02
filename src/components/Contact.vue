<template>
    <article id="contact" class="panel secondary">
						<div class="image">
							<img src="../assets/img/contactImage.jpg" alt="" data-position="bottom center" />
						</div>
						<div class="content">
							<ul class="actions spinX">
					<li><router-link to="/" class="button small back">Back</router-link></li>		</ul>
							<div class="inner">
								<header>
									<h2>Contact</h2>
								</header>
								<form method="post" action="#">
									<div class="field half first">
										<label for="name">Name</label>
										<input type="text" name="name" id="name" v-model="name"/>
									</div>
									<div class="field half">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" v-model="email" />
									</div>
									<div class="field">
										<label for="email">subject</label>
										<input type="text" name="subject" id="subject" v-model="subject" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="5" v-model="message"></textarea>
									</div>
									<ul class="actions">
										<li><a @click="submitEmail" class="button submit">Send Message</a></li>
									</ul>
								</form>
							</div>
						</div>
					</article>
</template>

<script>
export default {
	data(){
		return{
			name:null,
			email:null,
			subject:null,
			message:null,
		}
	},
	methods:{
		submitEmail(event){
			event.preventDefault();
			const emailData = {
				name : this.name,
				email : this.email,
				subject : this.subject,
				message : this.message,
			}
			console.log(emailData)
		}
	}
}
</script>
