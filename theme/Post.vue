<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ post.title }}</h3>
      {{ post.content }}
    </div>              
   </div>
</template>
<script>
export default {
  props: ['post']
}
</script>
<style scoped>
    .card {
        padding-bottom: 40px;
        height: 100%;
    }
    .footer {
        position:absolute;
        bottom: 0;
        width: 100%;
        left:0;
    }
</style>


