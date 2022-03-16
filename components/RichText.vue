<template>
  <div
    class="rich-text"
    :class="{ 'col-1': columns == 1, 'col-2': columns == 2 }"
    v-html="content"
  ></div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
    },
    columns: {
      type: Number,
    },
  },
}
</script>

<style>
.rich-text {
  padding: 1rem;
  border-radius: 0.5rem;
}
.col-1 {
  width: 33.33%;
  background: #fca5a5;
  color: #7f1d1d;
}
.col-2 {
  width: 66.66%;
  background: #7dd3fc;
  color: #075985;
}
</style>
