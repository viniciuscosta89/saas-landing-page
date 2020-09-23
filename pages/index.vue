<template>
  <main>
    <Hero />
    <section class="o-section o-section--next-step">
      <div class="o-section__shape">
        <img
          class="o-section__img"
          :src="getImg('landing-1-shape.svg')"
          alt=""
        />
      </div>
      <div class="o-container">
        <h2 class="o-heading o-heading--big o-heading--center">
          Mark your next step
        </h2>

        <Cards :cards="cards" />
      </div>
    </section>

    <section class="o-section o-section__content--01">
      <div class="o-container">
        <article class="c-2-col-content c-2-col-content--img-text">
          <img
            class="c-2-col-content__img"
            :src="getImg('content-image-1.png')"
            alt=""
          />
          <div class="c-2-col-content__content">
            <h3 class="c-2-col-content__title">
              Response on a chat wherever you are
            </h3>
            <div class="c-2-col-content__text">
              Create custom landing pages with Shades that convert more visitors
              than any website, no coding required.
            </div>
            <NuxtLink  to="/" class="c-2-col-content__link">
              <span class="c-2-col-content__label">Learn more</span>
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="o-section o-section__content--02">
      <div class="o-container">
        <article class="c-2-col-content c-2-col-content--text-img">
          <img
            class="c-2-col-content__img"
            :src="getImg('content-image-2.png')"
            alt=""
          />
          <div class="c-2-col-content__content">
            <h3 class="c-2-col-content__title">
              Never miss a thing
            </h3>
            <div class="c-2-col-content__text">
              Event is not like most tech conferences. We want our presentations
              to engage the audience, spark discussion and inspire new ideas.
            </div>
            <ul class="o-list">
              <li class="o-list__item">
                <font-awesome-icon
                  class="o-list__icon o-list__icon--colored"
                  :icon="['fas', 'check']"
                />
                <span class="o-list__label">Unlimited design possibility </span>
              </li>
              <li class="o-list__item">
                <font-awesome-icon
                  class="o-list__icon o-list__icon--colored"
                  :icon="['fas', 'check']"
                />
                <span class="o-list__label">Completely responsive </span>
              </li>
              <li class="o-list__item">
                <font-awesome-icon
                  class="o-list__icon o-list__icon--colored"
                  :icon="['fas', 'check']"
                />
                <span class="o-list__label">Easy to customize </span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="o-section o-section__content--03">
      <div class="o-section__shape">
        <img class="o-section__img" :src="getImg('landing-4.svg')" alt="" />
      </div>
      <div class="o-container">
        <article class="c-2-col-content c-2-col-content--img-text">
          <img
            class="c-2-col-content__img"
            :src="getImg('content-image-3.png')"
            alt=""
          />
          <div class="c-2-col-content__content">
            <h3 class="c-2-col-content__title">
              Increase Customer Support Productivity
            </h3>
            <div class="c-2-col-content__text">
              Event is not like most tech conferences. We want our presentations
              to engage the audience, spark discussion and inspire new ideas.
            </div>
            <hr class="c-2-col-content__separator" />

            <div class="c-2-col-content__text--bottom">
              Interested to see how it works? Schedule a free demo to get to
              learn everything you need to know.
            </div>
            <NuxtLink  to="/" class="c-btn c-btn--secondary">
              Schedule A Demo
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section class="o-section o-section--pricing">
      <div class="o-section__shape">
        <img
          class="o-section__img"
          :src="getImg('landing-2-shape.svg')"
          alt=""
        />
      </div>
      <div class="o-container">
        <h2 class="o-heading o-heading--big o-heading--center">
          Mark your next step
        </h2>
        <p class="u-text--gray o-section__subtext u-text-center">
          We designed and tested prototypes that helped identify pain points in
          the account creation process. Together, we shaped the new standard.
        </p>

        <div class="c-toogle">
          <span class="c-toogle__option">Monthly</span>

          <label class="c-toogle__switch" for="pay-method">
            <input
              id="pay-method"
              v-model="isPlanYearly"
              class="c-toogle__input"
              type="checkbox"
              name="pay-method"
            />
            <span class="c-toogle__slider"></span>
          </label>

          <span class="c-toogle__option">Yearly</span>
        </div>

        <PricingCards
          :cards-list="pricingCardsList"
          :chosen-plan-is-yearly="isPlanYearly"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'
import PricingCards from '@/components/PricingCards.vue'
import { getImg } from '@/middleware/helpers'

export default {
  name: 'Home',
  components: {
    Cards,
    Hero,
    PricingCards,
  },
  data() {
    return {
      isPlanYearly: false,
      cards: [
        {
          title: 'Targeted Marketing',
          description:
            'Whether it’s a small internal app or a new for millions of customers, our design and development teams.',
          iconName: 'user',
        },
        {
          title: 'Easy Communicaton',
          description:
            'Whether it’s a small internal app or a new for millions of customers, our design and development teams.',
          iconName: 'paper-plane',
        },
        {
          title: 'Fastest Setup',
          description:
            'Whether it’s a small internal app or a new for millions of customers, our design and development teams.',
          iconName: 'tools',
        },
      ],
      pricingCardsList: [
        {
          packagePrice: 'Basic',
          badge: false,
          price: {
            month: 19,
            year: 14,
          },
          description:
            'Good for small business launching their products less then once a year',
          list: [
            {
              text: 'Unlimited Blocks',
            },
            {
              text: '5GB Clould Storages',
            },
            {
              text: 'Custom Domain Names',
              notThisPackage: true,
            },
            {
              text: 'Unlimited Emails',
              notThisPackage: true,
            },
          ],
        },
        {
          packagePrice: 'Pro',
          badge: true,
          price: {
            month: 29,
            year: 25,
          },
          description:
            'Good for small business launching their products less then once a year',
          list: [
            {
              text: 'Unlimited Blocks',
            },
            {
              text: '5GB Clould Storages',
            },
            {
              text: 'Custom Domain Names',
            },
            {
              text: 'Unlimited Emails',
              notThisPackage: true,
            },
          ],
        },
        {
          packagePrice: 'Exclusive',
          badge: false,
          price: {
            month: 59,
            year: 49,
          },
          description:
            'Good for small business launching their products less then once a year',
          list: [
            {
              text: 'Unlimited Blocks',
            },
            {
              text: '5GB Clould Storages',
            },
            {
              text: 'Custom Domain Names',
            },
            {
              text: 'Unlimited Emails',
            },
          ],
        },
      ],
    }
  },
  methods: {
    getImg,
  },
}
</script>
