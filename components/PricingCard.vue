<template>
  <article
    :class="[
      'c-pricing-card',
      {
        'c-pricing-card--popular': badge === true,
      },
    ]"
  >
    <header class="c-pricing-card__header">
      <div class="c-pricing-card__tags">
        <h5 class="c-pricing-card__package">{{ packagePrice }}</h5>
        <span v-if="badge" class="c-pricing-card__badge">Popular</span>
      </div>

      <h2 class="c-pricing-card__price">
        <span class="c-pricing-card__text c-pricing-card__text--medium">$</span>
        <span class="c-pricing-card__text c-pricing-card__text--big">
          <transition mode="out-in">
            <span v-if="chosenPlanIsYearly === true" key="year">
              {{ price.year }}
            </span>
            <span v-if="chosenPlanIsYearly === false" key="month">
              {{ price.month }}
            </span>
          </transition>
        </span>

        <span class="c-pricing-card__text c-pricing-card__text--small">/</span>

        <transition mode="out-in">
          <span
            v-if="chosenPlanIsYearly === true"
            key="year"
            class="c-pricing-card__text c-pricing-card__text--small"
            >year</span
          >
          <span
            v-else
            key="month"
            class="c-pricing-card__text c-pricing-card__text--small"
            >month</span
          >
        </transition>
      </h2>

      <p class="c-pricing-card__description">{{ description }}</p>
    </header>

    <main class="c-pricing-card__main">
      <ul class="c-pricing-card__list">
        <li
          v-for="(item, index) in itemsList"
          :key="index"
          :class="[
            'c-pricing-card__item',
            {
              'c-pricing-card__item--cancelled': item.notThisPackage === true,
            },
          ]"
        >
          <font-awesome-icon class="o-list__icon" :icon="['fas', 'check']" />
          {{ item.text }}
        </li>
      </ul>
    </main>

    <footer class="c-pricing-card__footer">
      <NuxtLink to="/" class="c-btn c-btn--primary">
        Start Free Trial
      </NuxtLink>
      <div
        class="c-pricing-card__text c-pricing-card__text--smaller u-text--gray"
      >
        No credit card required
      </div>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    packagePrice: {
      type: String,
      default: '',
    },
    badge: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Object,
      month: Number,
      year: Number,
      default: () => {},
    },
    description: {
      type: String,
      default: '',
    },
    itemsList: {
      type: Array,
      default: () => [],
    },
    chosenPlanIsYearly: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
