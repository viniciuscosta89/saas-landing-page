<template>
  <div class="c-mobile-nav">
    <div class="c-mobile-nav__left">
      <router-link to="/">
        <img :src="getImg(logo)" alt="Logo" class="c-mobile-nav__logo" />
      </router-link>
    </div>

    <div class="c-mobile-nav__right">
      <div v-if="windowWidth > 500" class="c-nav__user">
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

      <button
        :class="[
          'c-mobile-nav__btn',
          {
            'c-mobile-nav__btn--close': isMenuOpen,
          },
        ]"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav
      :class="[
        'c-mobile-nav__menu',
        {
          'c-mobile-nav__menu--open': isMenuOpen,
        },
      ]"
    >
      <ul class="c-mobile-nav__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="c-mobile-nav__item"
        >
          <router-link
            v-if="!link.children"
            class="c-mobile-nav__link"
            :to="link.url"
            >{{ link.name }}
          </router-link>
          <router-link
            v-else
            class="c-mobile-nav__link"
            to="#"
            @click.native="toggleSubmenu"
            >{{ link.name }}
            <span
              :class="[
                'o-icon',
                'o-icon__arrow',
                'o-icon__arrow--down',
                {
                  'o-icon__arrow--open': isSubmenuOpen,
                },
              ]"
            >
              >
            </span>
          </router-link>

          <ul
            v-if="link.children"
            :class="[
              'c-mobile-nav__sub-list',
              {
                'c-mobile-nav__sub-list--open': isSubmenuOpen,
              },
            ]"
          >
            <li
              v-for="(sublink, subindex) in link.children"
              :key="subindex"
              class="c-mobile-nav__sub-item"
            >
              <strong class="c-mobile-nav__sub-title">{{
                sublink.name
              }}</strong>
              <span class="c-mobile-nav__sub-description">{{
                sublink.description
              }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { getImg } from '@/middleware/helpers'

export default {
  name: 'MobileNav',
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
  data() {
    return {
      isMenuOpen: false,
      isSubmenuOpen: false,
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

    this.onResize()
  },
  methods: {
    getImg,
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    toggleSubmenu() {
      this.isSubmenuOpen = !this.isSubmenuOpen
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>
