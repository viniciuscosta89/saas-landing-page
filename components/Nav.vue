<template>
  <nav class="c-nav">
    <div class="o-container c-nav__container">
      <router-link to="/">
        <img :src="getImg(logo)" alt="Logo" />
      </router-link>
      <ul class="c-nav__list">
        <li v-for="(link, index) in links" :key="index" class="c-nav__item">
          <router-link class="c-nav__link" :to="link.url">{{
            link.name
          }}</router-link>

          <ul v-if="link.children" class="c-nav__sublist">
            <li
              v-for="(subItem, subKey) in link.children"
              :key="subKey"
              class="c-nav__subitem"
            >
              <router-link class="c-nav__sublink" :to="subItem.url">
                <strong class="c-nav__subtitle">{{ subItem.name }}</strong>
                <span class="c-nav__subdescription">{{
                  subItem.description
                }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>

      <div class="c-nav__user">
        <ul class="c-nav__list">
          <li class="c-nav__item">
            <router-link class="c-nav__link" to="/sign-in">Sign In</router-link>
            <router-link
              class="c-btn c-btn--primary c-btn--medium"
              to="/get-started"
              >Get Started</router-link
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
