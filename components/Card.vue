<template>
  <article class="c-card">
    <header class="c-card__header">
      <div class="c-card__icon">
        <font-awesome-icon :icon="[iconStyle, iconName]" />
      </div>
    </header>
    <main class="c-card__main">
      <h4 class="c-card__title">{{ title }}</h4>
      <span class="c-card__description">{{ description }}</span>
    </main>

    <footer class="c-card__footer">
      <NuxtLink  class="c-card__link" to="/">
        <span class="c-card__link--label">{{ link }}</span>
        <font-awesome-icon
          class="c-card__link-icon"
          :icon="['fas', 'chevron-right']"
        />
      </NuxtLink>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    iconStyle: {
      type: String,
      default: 'fas',
    },
    iconName: {
      type: String,
      default: 'user',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: 'Learn more',
    },
  },
}
</script>
