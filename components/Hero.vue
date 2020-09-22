<template>
  <section class="c-hero">
    <div class="o-container">
      <div class="c-hero__body">
        <img
          class="c-hero__img"
          :src="getImg('hero-image.png')"
          alt="Hero image"
        />

        <div class="c-hero__content">
          <h1 class="c-hero__title o-heading">
            Live chat support for your customers.
          </h1>
          <p class="c-hero__text">
            Create custom landing pages with Shades that convert more visitors
            than any website—no coding required.
          </p>
          <form action="" class="o-form">
            <input
              id="c-hero__form"
              class="o-form__input o-form__input--block"
              type="email"
              name="c-hero__form"
              placeholder="Enter your email address"
            />
            <button class="c-hero__btn c-btn c-btn--primary c-btn--block">
              Get Started
            </button>
          </form>
          <p class="u-text--gray">
            Already using Shade?
            <a
              class="o-link o-link--primary"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              >Sign In</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getImg } from '@/middleware/helpers'

export default {
  name: 'Hero',
  methods: {
    getImg,
  },
}
</script>
