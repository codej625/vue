<template>
  <div class="fourth">
    <h1>흥국 화재 테스트 페이지5</h1>
  </div>
</template>

<script>
export default {
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