<template>
  <div>
    <header class="c-header">
      <Nav v-if="windowWidth >= 1024" logo="main-logo.png" :links="links" />
      <MobileNav v-else logo="main-logo.png" :links="links" />
    </header>
    <Nuxt />

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Free Landing Pages',
          url: '',
          children: [
            {
              name: 'Mobile Application',
              url: 'mobile-application',
              description: 'Best for Mobile App Presentation',
            },
            {
              name: 'Web Application',
              url: 'web-application',
              description: 'Best for Mobile App Presentation',
            },
            {
              name: 'SaaS Application',
              url: '',
              description: 'Best for Mobile App Presentation',
            },
            {
              name: ' SaaS Subscription',
              url: '',
              description: 'Best for Mobile App Presentation',
            },
          ],
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
      windowWidth: 0,
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      return { newWidth, oldWidth }
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>
