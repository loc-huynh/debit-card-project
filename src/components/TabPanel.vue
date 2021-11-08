<template>
  <div class="q-px-md tab-panel__wrapper">
    <div
      class="q-gutter-y-md"
      style="max-width: 600px"
    >

      <!-- start -->
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab
            name="debitCards"
            label="My debit cards"
            class="tab-panel__tab-label"
          />
          <q-tab
            name="allCards"
            label="All company cards"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels
          v-model="tab"
          animated
          class="tab-panels__container"
        >
          <q-tab-panel
            name="debitCards"
            class="q-px-md"
          >
            <slot name="item1"></slot>
          </q-tab-panel>

          <q-tab-panel name="allCards">
            <slot name="item2"></slot>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>
      <!-- end -->
      <slot></slot>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TabPanel',
  setup() {
    return {
      tab: ref('debitCards'),
    };
  },
});
</script>

<style lang="scss">
.tab-panel {
  &__wrapper {
    background-color: $primary;
    // color: $white;

    @media (min-width: $breakpoint-sm-min) {
      background-color: $white;
      color: $black;
    }

    .q-tabs__content {
      background-color: $primary;
      // color: $white;
      @media (min-width: $breakpoint-sm-min) {
        background-color: $white;
      }

      &--align-justify .q-tab {
        flex: none;
      }
    }
  }

  &__tab-label {
    color: $white;

    @media (min-width: $breakpoint-sm-min) {
      color: $black;
    }
  }
}
.tab-panels__container {
  .q-tab-panel {
    padding-top: 0;
    padding-bottom: 0;
    background-color: $primary;

    @media (min-width: $breakpoint-sm-min) {
      background-color: $white;
      color: $black;
    }
  }
  .q-carousel__slide {
    padding-left: 0;
    padding-right: 0;
  }
}

.tab-panel {
  &__wrapper {
    padding-top: 26pt;
    padding-top: 0;

    .q-card {
      box-shadow: none;
      background-color: #fff0;
      hr {
        display: none;
      }
    }

    .q-tab__label {
      font-weight: bold;
      font-size: 13pt;
      text-transform: none;
    }

    .q-tab__indicator {
      color: $light-blue !important;
    }
    .q-tab-panels {
      background-color: #fff0;
    }
  }
}
</style>
