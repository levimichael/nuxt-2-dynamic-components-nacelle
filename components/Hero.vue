<template>
  <div class="hero">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style>
.hero {
  background: #64748b;
  color: #f8fafc;
}
</style>
