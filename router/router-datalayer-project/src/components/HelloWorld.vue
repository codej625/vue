<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <!-- 
    <h1>{{ message }}</h1>
    <h1>{{ content }}</h1> 
  -->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     message: 'Data Layer Test',
  //     content: 'Content'
  //   };
  // },
  mounted() {
    window.addEventListener("beforeunload", function() {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'Pageview',
        'pagePath': 'https://www.googleanalytics.dev/pancakes',
        'pageTitle': 'Pancake Event Signup',
        'visitorType': 'customer'
      });
    });
  },
  props: {
    msg: String
  },
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 { margin: 40px 0 0; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }
</style>
