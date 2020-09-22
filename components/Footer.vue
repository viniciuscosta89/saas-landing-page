<template>
  <footer class="c-footer o-section">
    <div class="o-container">
      <div class="o-newsletter">
        <h2 class="o-heading o-heading--big o-heading--center">
          Join our rich newsletter now
        </h2>
        <p class="o-newsletter__text">
          We designed and tested prototypes that helped identify pain points in
          the account creation process. Together, we shaped the new standard.
        </p>
        <form action="" class="o-form">
          <input
            id="o-newsletter__form"
            class="o-form__input o-form__input--block"
            type="email"
            name="c-hero__form"
            placeholder="Enter your email address"
          />
          <button class="c-btn c-btn--primary c-btn--big c-btn--block">
            Subscribe
          </button>
        </form>
        <p class="o-newsletter__info u-text-center">
          <font-awesome-icon :icon="['fas', 'lock']" />
          <span>Your data is protected. We never spam in your inbox</span>
        </p>
      </div>

      <div class="c-footer-bottom">
        <div class="c-footer-bottom__col">
          <img
            class="c-footer-bottom__img"
            :src="getImg('footer-logo.png')"
            alt="Logo"
          />

          <div class="c-footer-bottom__text">
            Big, small, online, offline, local. Size doesn't matter. We work on
            diverse projects for top brands as well as for cool startups.
          </div>

          <ul class="c-social-networks">
            <li class="c-social-networks__item">
              <a href="#" target="_blank" class="c-social-networks__link">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </li>

            <li class="c-social-networks__item">
              <a href="#" target="_blank" class="c-social-networks__link">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </li>

            <li class="c-social-networks__item">
              <a href="#" target="_blank" class="c-social-networks__link">
                <font-awesome-icon :icon="['fab', 'google']" />
              </a>
            </li>
          </ul>
        </div>

        <div class="o-sitemap">
          <div class="o-sitemap__help">
            <h6 class="o-sitemap__subtitle">Help Menu</h6>
            <ul class="o-sitemap-list">
              <li
                v-for="(item, index) in helpItems"
                :key="index"
                class="o-sitemap-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="o-sitemap__support">
            <h6 class="o-sitemap__subtitle">Support</h6>
            <ul class="o-sitemap-list">
              <li
                v-for="(item, index) in supportItems"
                :key="index"
                class="o-sitemap-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="o-sitemap__products">
            <h6 class="o-sitemap__subtitle">Products</h6>
            <ul class="o-sitemap-list">
              <li
                v-for="(item, index) in productItems"
                :key="index"
                class="o-sitemap-list__item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { getImg } from '@/middleware/helpers'

export default {
  name: 'Footer',
  data() {
    return {
      helpItems: ['About', 'Features', 'Works', 'Career'],
      supportItems: [
        'Contact',
        'Help & Support',
        'Privacy Policy',
        'Terms & Conditions',
      ],
      productItems: [
        'Shades Pro',
        'Essential Blocks',
        'Avasta Dash',
        'vApp Landing Page',
      ],
    }
  },
  methods: {
    getImg,
  },
}
</script>
