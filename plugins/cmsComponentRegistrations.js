import Vue from 'vue'
import Hero from '~/components/Hero'
import PageSection from '~/components/PageSection'
import RichText from '~/components/RichText'

const components = { Hero, PageSection, RichText }

Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
