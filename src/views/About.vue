<template>
  <div class="container">
    <h1>Contact us</h1>
    <div class="row">
      <div class="col-md-6 offset-md-3 text-left">
        <form name="contact-form" method="POST" action="/" @submit.prevent="handleSubmit" netlify netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true">
          <p>
            <label>Your Name: </label>
            <input type="text" name="name" v-model="name" class="form-control" />   
          </p>
          <p>
            <label>Your Email: </label>
            <input type="email" name="email" v-model="email" class="form-control"/>
          </p>
          <p>
            <label>Message: </label>
            <textarea name="message" v-model="message" class="form-control"></textarea>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p class="text-center">
            <button type="submit" class="btn btn-primary">Send</button>
          </p>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "contact-form",
  components: {
    
  },
  data: function() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Contact us',
    meta: [
      // {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'Contact us'}
    ]
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post('/', this.encode({
          "form-name": "contact-form",
          "name": this.name,
          "email": this.email,
          "message": this.message
        }),
        axiosConfig
      )
      .then(() => {
        alert('thanks');
      })
      .catch(() => {
        alert('404');
      })
    }
  }
}
</script>
