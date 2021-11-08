<template>
  <div
    class="gt-sm padding-48 navigation-bars"
    style="max-width: 350px"
  >
    <img :src="require('assets/imgs-web/Aspire Logo.svg')" />
    <div class="navigation-bars__sub-text">Trusted way of banking for 3,000+ SMEs and startups in Singapore</div>

    <q-list class="navigation-bars__list">
      <q-item
        clickable
        v-ripple
        @click="navigate('/')"
      >
        <q-item-section avatar>
          <img :src="require('assets/imgs-web/Home.svg')">
        </q-item-section>
        <q-item-section>Home</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        @click="navigate('/cards')"
      >
        <q-item-section avatar>
          <img :src="require('assets/imgs/pay.svg')">
        </q-item-section>

        <q-item-section>Cards</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <img :src="require('assets/imgs/Payments.svg')">
        </q-item-section>

        <q-item-section>Payments</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <img :src="require('assets/imgs/Credit.svg')" />
        </q-item-section>

        <q-item-section>Credit</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <img :src="require('assets/imgs/Account.svg')" />
        </q-item-section>

        <q-item-section>Profile</q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavigationBars',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    const router = useRouter();

    return {
      navigate: (path: string) => {
        router.push({ path }).catch((err) => console.log(err));
      },
    };
  },
});
</script>

<style lang="scss">
.navigation-bars {
  height: 770pt;
  background-color: $primary;

  &__sub-text {
    font-size: 15px;
    color: $white;
    opacity: 50%;
  }

  &__list {
    margin-top: 80px;
    color: $white;
  }
}
.padding-48 {
  padding: 48px;
}
.q-item {
  padding: 0;
}
.mobile-navigation-bars {
  display: flex;
  justify-content: space-evenly;

  &__img {
    border-radius: 50%;
    display: inline-block;
  }
}
</style>
