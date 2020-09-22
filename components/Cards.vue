<template>
  <div class="c-cards">
    <Card
      v-for="(card, index) of cards"
      :key="index"
      :icon-style="card.iconStyle"
      :icon-name="card.iconName"
      :title="card.title"
      :description="card.description"
    />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Cards',
  components: {
    Card,
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
