<template>
  <div v-if="pageData">
    <!-- 
    For more info on dynamic components, check out the Vue 2 docs: https://v2.vuejs.org/v2/guide/components.html?redirect=true#Dynamic-Components
  -->
    <component
      v-bind="component.props"
      :is="component.name"
      v-for="component in pageData.componentsList"
      :key="component.id"
    ></component>
  </div>
</template>

<script>
import mockData from '~/static/mock.json'
export default {
  data() {
    return {
      pageData: mockData,
    }
  },
}
</script>
