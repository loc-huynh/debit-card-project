<template>
  <div
    class="user-card"
    :style="{backgroundColor: color}"
  >
    <div class="user-card__logo">
      <img :src="require('assets/imgs/Logo-in-card.svg')" />
    </div>
    <h3 class="user-card__name">Mark Henry</h3>
    <div class="user-card__serial-number">
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div style="padding:0 12px"></div>

      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div style="padding:0 12px"></div>

      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div class="user-card__serial-number--hide"></div>
      <div style="padding:0 12px"></div>
      <div class="user-card__serial-number--show">2</div>
      <div class="user-card__serial-number--show">0</div>
      <div class="user-card__serial-number--show">2</div>
      <div class="user-card__serial-number--show">0</div>
    </div>
    <div class="user-card__info">
      <span class="user-card__info-date">
        Thru: 12/20
      </span>
      <span class="user-card__info-cvv">
        CVV: <span class="user-card__info-cvv__asterisk">&#65290;&#65290;&#65290;</span>
      </span>
    </div>
    <div class="user-card__type">
      <img :src="require('assets/imgs/Visa-logo.svg')" />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss">
.user-card {
  // height: 220px;
  width: 100%;
  border-radius: 15pt;
  background-color: $lighter-green;
  color: white;
  position: relative;
  padding: 24pt;

  &__logo {
    position: absolute;
    top: 24pt;
    right: 24pt;
  }

  &__type {
    position: absolute;
    bottom: 18px;
    right: 24px;
  }

  &__name {
    margin: 0;
    margin-top: 45pt;
    font-size: 22pt;
    font-weight: bold;
  }

  &__serial-number {
    height: 14px;
    margin-top: 24px;
    display: flex;
    align-items: center;

    &--hide {
      width: 8px;
      height: 8px;
      margin-right: 4px;
      background: white;
      border-radius: 50px;
    }

    &--show {
      margin-right: 4px;
    }
  }

  &__info {
    margin-top: 19px;
    margin-bottom: 24px;

    &-date {
      font-weight: bold;
    }

    &-cvv {
      margin-left: 30pt;
      display: inline-flex;
      align-items: center;
      font-weight: bold;

      &__asterisk {
        font-size: 12pt;
        font-weight: bold;
      }
    }
  }
}
</style>
