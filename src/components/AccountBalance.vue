<template>
  <div class="col-12 account-balance__wrapper">

    <div class="account-balance__header">
      <img
        v-if="$q.screen.lt.sm"
        :src="require('assets/imgs/Logo.svg')"
      />
    </div>

    <div class="account-balance__container q-px-md col-12">
      <p class="account-balance__title">Account balance</p>
      <div class="account-balance">
        <div class="account-balance__number">
          <q-btn
            class="account-balance__badge"
            size="sm"
            label="S$"
          >
          </q-btn>
          <span class="account-balance__total">3,000</span>
        </div>

        <!-- add card button component -->
        <q-btn class="account-balance__new-button">
          <q-icon
            name="add_circle"
            :color="$q.screen.lt.sm ? 'light-blue' : 'white'"
            style="font-size: 16px;"
          />
          <p class="account-balance__new-button__text">New card</p>
        </q-btn>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountBalance',
});
</script>

<style lang="scss">
.account-balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 9pt;

  &__wrapper {
    @media (min-width: $breakpoint-sm-min) {
      margin-top: 59pt;
    }
  }

  &__container {
    padding-left: 24pt;
    padding-right: 24pt;
  }

  &__new-button {
    background-color: $primary;
    text-transform: none;
    display: flex;
    align-items: center;

    &__text {
      margin: 0;
      margin-left: 6pt;
      font-weight: bold;
      color: $light-blue;

      @media (min-width: $breakpoint-sm-min) {
        color: $white;
      }
    }
  }

  &__number {
    display: flex;
    align-items: center;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
  }
  &__title {
    font-size: 14pt;
    margin-bottom: 0;

    @media (min-width: $breakpoint-sm-min) {
      font-weight: normal;
    }
  }
  &__badge {
    width: 40pt;
    height: 22pt;
    background-color: $lighter-green;
    color: white;
  }
  &__total {
    font-size: 24pt;
    // font-family: Opensan;
    font-weight: bold;
    margin-left: 10pt;
    // color: white;
  }
}
</style>
