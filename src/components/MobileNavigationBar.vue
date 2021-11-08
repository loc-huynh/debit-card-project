<template>
  <div class="lt-md mobile-navigation-bars shadow-up-3">
    <span class="button-component__wrapper">
      <img
        :src="require('assets/imgs/Logo-trans.svg')"
        alt="icon"
        class="button-container__img"
      >
      <div>Home</div>

    </span>

    <span class="button-component_wrapper">
      <img
        style="padding:3px"
        :src="require('assets/imgs/pay.svg')"
        alt="icon"
        class="button-container__img"
      >
      <div>Cards</div>
    </span>

    <span class="button-component_wrapper">
      <img
        :src="require('assets/imgs/Payments.svg')"
        alt="icon"
        class="button-container__img"
      >
      <div>Payments</div>
    </span>

    <span class="button-component_wrapper">
      <img
        :src="require('assets/imgs/Credit.svg')"
        alt="icon"
        class="button-container__img"
      >
      <div>Credit</div>
    </span>

    <span class="button-component_wrapper">
      <img
        :src="require('assets/imgs/Account.svg')"
        alt="icon"
        class="button-container__img"
      >
      <div>Profile</div>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MobileNavigationBar',
});
</script>

<style lang="scss">
.mobile-navigation-bars {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: $white;
  color: $black;
  text-align: center;
  padding-top: 9pt;
  padding-bottom: 9pt;
  z-index: 2;
}
</style>
