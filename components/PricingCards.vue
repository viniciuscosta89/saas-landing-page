<template>
  <div class="c-pricing-cards">
    <PricingCard
      v-for="(card, index) in cardsList"
      :key="index"
      :package-price="card.packagePrice"
      :badge="card.badge"
      :price="card.price"
      :description="card.description"
      :items-list="card.list"
      :chosen-plan-is-yearly="chosenPlanIsYearly"
    />

    <p class="c-pricing-cards__extra-info">
      <span class="u-text--gray">Still confused?</span>
      <NuxtLink  to="/" class="c-pricing-cards__link"
        >Check our full feature list</NuxtLink
      >
    </p>
  </div>
</template>

<script>
import PricingCard from '@/components/PricingCard.vue'

export default {
  name: 'PricingCards',
  components: {
    PricingCard,
  },
  props: {
    cardsList: {
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
