<template>
  <nav class="c-nav">
    <div class="o-container c-nav__container">
      <NuxtLink to="/">
        <img :src="getImg(logo)" alt="Logo" />
      </NuxtLink>
      <ul class="c-nav__list">
        <li v-for="(link, index) in links" :key="index" class="c-nav__item">
          <NuxtLink class="c-nav__link" :to="link.url">{{
            link.name
          }}</NuxtLink>

          <ul v-if="link.children" class="c-nav__sublist">
            <li
              v-for="(subItem, subKey) in link.children"
              :key="subKey"
              class="c-nav__subitem"
            >
              <NuxtLink class="c-nav__sublink" :to="subItem.url">
                <strong class="c-nav__subtitle">{{ subItem.name }}</strong>
                <span class="c-nav__subdescription">{{
                  subItem.description
                }}</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="c-nav__user">
        <ul class="c-nav__list">
          <li class="c-nav__item">
            <NuxtLink class="c-nav__link" to="/sign-in">Sign In</NuxtLink>
            <NuxtLink
              class="c-btn c-btn--primary c-btn--medium"
              to="/get-started"
              >Get Started</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getImg } from '@/middleware/helpers'

export default {
  name: 'Nav',
  props: {
    logo: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getImg,
  },
}
</script>
