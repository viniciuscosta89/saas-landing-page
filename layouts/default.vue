<template>
  <div>
    <header>
      <Nav logo="main-logo.png" :links="links" />
    </header>
    <Nuxt />
  </div>
</template>

<script>
// import { Fragment } from 'vue-fragment'

export default {
  // components: { Fragment },
  data() {
    return {
      links: [
        {
          name: 'Free Landing Pages',
          url: 'free-landing-pages',
        },
        {
          name: 'Features',
          url: 'features',
        },
        {
          name: 'Services',
          url: 'services',
        },
        {
          name: 'Pricing',
          url: 'pricing',
        },
        {
          name: 'Contact',
          url: 'contact',
        },
      ],
    }
  },
}
</script>
