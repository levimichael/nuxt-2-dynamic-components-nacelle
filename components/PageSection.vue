<template>
  <section>
    <component
      v-bind="component.props"
      :is="component.name"
      v-for="component in sectionData.componentsList"
      :key="component.id"
    ></component>
  </section>
</template>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
    },
  },
}
</script>

<style>
section {
  display: flex;
  background: #e2e8f0;
}
section > :first-child {
  margin-right: 2rem;
}

section:last-child {
  background: #f8fafc;
}
</style>
