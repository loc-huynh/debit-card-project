<template>
  <div class="action-container__wrapper">
    <span class="action-container__button_wrapper">
      <img
        :src="require('assets/imgs/Freeze-card.svg')"
        alt="icon"
        class="action-container__img"
      >
      <div class="action-container__text">Freeze card</div>

    </span>

    <span class="action-container__button_wrapper">
      <img
        :src="require('assets/imgs/Set-spend-limit.svg')"
        alt="icon"
        class="action-container__img"
      >
      <div class="action-container__text">Set spend limit</div>
    </span>

    <span class="action-container__button_wrapper">
      <img
        :src="require('assets/imgs/GPay.svg')"
        alt="icon"
        class="action-container__img"
      >
      <div class="action-container__text">Add to GPay</div>
    </span>

    <span class="action-container__button_wrapper">
      <img
        :src="require('assets/imgs/Replace-card.svg')"
        alt="icon"
        class="action-container__img"
      >
      <div class="action-container__text">Replace card</div>
    </span>

    <span class="action-container__button_wrapper">
      <img
        :src="require('assets/imgs/Deactivate-card.svg')"
        alt="icon"
        class="action-container__img"
      >
      <div class="action-container__text">Cancel card</div>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActionContainer',
});
</script>

<style lang="scss">
.action-container {
  &__wrapper {
    display: flex;
    justify-content: space-evenly;
    background-color: $lighter-blue;
    padding: 20pt 24pt;
    color: $black;
    border-radius: 10pt;

    @media (min-width: $breakpoint-sm-min) {
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  &__img {
    border-radius: 50%;
    display: inline-block;
  }

  &__text {
    font-size: 13pt;
    font-weight: normal;
  }

  &__button_wrapper {
    text-align: center;
    max-width: 18%;
  }
}
</style>
