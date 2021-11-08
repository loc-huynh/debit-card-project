<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      :padding="false"
      control-color="white"
      navigation
      arrows
      class="text-white shadow-1 rounded-borders carousel__wrapper"
    >
      <template v-slot:navigation-icon="{ active, onClick }">
        <q-btn
          v-if="active"
          size="lg"
          class="carousel__active-icon"
          color="green"
          flat
          round
          dense
          @click="onClick"
        />
        <q-btn
          v-else
          size="sm"
          :class="['carousel__normal-icon', {'carousel__normal-icon--desktop': $q.screen.gt.sm}]"
          color="white"
          flat
          round
          dense
          @click="onClick"
        />
      </template>

      <q-carousel-slide
        name="style"
        class="column no-wrap carousel-slide"
      >
        <slot name="item1"></slot>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap"
      >
        <slot name="item2"></slot>
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="column no-wrap"
      >
        <slot name="item3"></slot>
      </q-carousel-slide>

    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Carousel',
  setup() {
    return {
      slide: ref('style'),
    };
  },
});
</script>

<style lang="scss">
.carousel {
  &__wrapper {
    background-color: $primary;

    @media (min-width: $breakpoint-sm-min) {
      background-color: $white;
    }

    &.q-carousel {
      height: 280pt;
      box-shadow: none;
    }
  }

  &-slide {
    padding-top: 24pt;
    padding-bottom: 0;
  }
  &__active-icon {
    min-height: 8pt !important;
    min-width: 16pt !important;
    border-radius: 7px;
    background: $green;
  }
  &__normal-icon {
    min-height: 8pt !important;
    min-width: 8pt !important;
    background-color: #145389 !important;

    &--desktop {
      background-color: $green !important;
      opacity: 20%;
    }
  }
}
</style>
