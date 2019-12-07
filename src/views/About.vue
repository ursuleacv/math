<template>
  <div class="about">
    <h1>Contact us</h1>
    <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
      <p>
        <label>Your Name: <input type="text" name="name" class="form-control" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" class="form-control"/></label>
      </p>
      <p>
        <label>Message: <textarea name="message" class="form-control"></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit" class="btn btn-primary">Send</button>
      </p>
    </form>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'about',
  components: {
    
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Contact us',
    meta: [
      {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'Contact us'}
    ]
  }
}
</script>
