<template>
  <div class="home">
    <HelloWorld msg="흥국 화재 테스트 페이지1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted() {
    window.addEventListener("beforeunload", function () {
      var dataLayer = window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'Pageview',
        'pagePath': 'https://www.googleanalytics.dev/pancakes',
        'pageTitle': 'Pancake Event Signup',
        'visitorType': 'customer'
      });
    });
  }
}

</script>

<style scoped>

</style>