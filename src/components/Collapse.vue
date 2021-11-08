<template>
  <q-list class="collapse__wrapper">
    <q-expansion-item
      group="somegroup"
      class="collapse-item__header shadow-box shadow-1"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <img :src="require('assets/imgs/card-detail.svg')">
        </q-item-section>
        <q-item-section>
          Card details
        </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          <slot name="item1"></slot>
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-separator />

    <q-expansion-item
      group="somegroup"
      class="collapse-item__header shadow-box shadow-1"
      default-opened
    >
      <template v-slot:header>
        <q-item-section avatar>
          <img :src="require('assets/imgs/recent-trans.svg')">
        </q-item-section>
        <q-item-section>
          Recent transaction
        </q-item-section>
      </template>
      <q-card>
        <q-card-section class='no-padding'>
          <slot name="item2"></slot>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Collapse',
});
</script>

<style lang="scss">
.collapse-item {
  &__header {
    background-color: $lighter-gray;
    color: $text-blue;
    border-radius: 8px;
  }
}
.collapse {
  &__wrapper {
    padding-left: 24pt;
    padding-right: 24pt;

    @media (min-width: $breakpoint-sm-min) {
      margin-top: 60px;
      padding-left: 0;
    }

    .q-list {
      border: 0;
    }

    .q-expansion-item {
      border: none;

      &:first-child {
        margin-bottom: 16pt;
      }
    }

    .q-item {
      margin-bottom: 16pt;
      padding: 26px;
    }
  }
}
</style>
