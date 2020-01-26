<template>
  <article id="contact" class="panel secondary">
    <div class="image">
      <img src="../assets/img/contactImage.jpg" alt data-position="bottom center" />
    </div>
    <div class="content">
      <ul class="actions spinX">
        <li>
          <router-link to="/" class="button small back">Back</router-link>
        </li>
      </ul>
      <div class="inner">
        <header>
          <div>
            <h2 class="mb-0">Contact</h2>
            <p class="field">
              <span class="icon fa-envelope" /> nate.spilman@gmail.com
            </p>
          </div>
        </header>
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      message: null,
      messageSent: false
    };
  },
  methods: {
    submitEmail(event) {
      event.preventDefault();
      const emailData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      axios
        .post("https://natespilman.tech/jobhunt/contactPageEmail", emailData)
        .then(res => {
          if (res.status === 200) {
            this.messageSent = true;
          }
        });
    },
    resetSent() {
      this.messageSent = false;
      this.name = null;
      this.email = null;
      this.subject = null;
      this.message = null;
    }
  }
};
</script>

<style scoped>
.resend {
  cursor: pointer;
}
</style>

