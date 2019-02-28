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
										<input type="text" name="name" id="name" />
									</div>
									<div class="field half">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" />
									</div>
									<div class="field">
										<label for="message">Message</label>
										<textarea name="message" id="message" rows="5"></textarea>
									</div>
									<ul class="actions">
										<li><a href="" class="button submit">Send Message</a></li>
									</ul>
								</form>
							</div>
						</div>
					</article>
</template>
