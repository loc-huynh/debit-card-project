<template>
  <!-- card section -->
  <div>
    <q-list bordered>
      <q-item>
        <q-item-section
          top
          avatar
        >
          <q-avatar
            color="blue-1"
            text-color="white"
            size="48px"
          >
            <img
              style="width:16px"
              :src="require('assets/imgs/file-storage.svg')"
            >
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Hamleys</q-item-label>
          <q-item-label
            caption
            lines="2"
          >
            20 May 2020
          </q-item-label>
          <div class="card__bottom">
            <q-avatar
              color="primary"
              text-color="white"
              icon="credit_card"
              size="sm"
            />
            <span class="card__title">
              Charged to debit card
            </span>
          </div>
        </q-item-section>

        <q-item-section
          side
          top
        >
          <q-item-label
            class="card__transition"
            caption
          >
            <span class="card__transition__positive">+ S$ 150</span>
            <q-icon
              name="chevron_right"
              color="gray"
            />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item>
        <q-item-section
          top
          avatar
        >
          <q-avatar
            color="cyan-1"
            text-color="white"
            size="48px"
          >
            <img
              style="width:16px"
              :src="require('assets/imgs/flights.svg')"
            >
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Hamleys</q-item-label>
          <q-item-label
            caption
            lines="2"
          >
            20 May 2020
          </q-item-label>
          <div class="card__bottom">
            <q-avatar
              color="primary"
              text-color="white"
              icon="credit_card"
              size="sm"
            />
            <span class="card__title">
              Charged to debit card
            </span>
          </div>
        </q-item-section>

        <q-item-section
          side
          top
        >
          <q-item-label
            class="card__transition"
            caption
          >
            <span class="card__transition__negative">- S$ 150</span>
            <q-icon
              name="chevron_right"
              color="gray"
            />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-item>
        <q-item-section
          top
          avatar
        >
          <q-avatar
            color="pink-1"
            text-color="white"
            size="48px"
          >
            <img
              style="width:16px"
              :src="require('assets/imgs/megaphone.svg')"
            >
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Hamleys</q-item-label>
          <q-item-label
            caption
            lines="2"
          >
            20 May 2020
          </q-item-label>
          <div class="card__bottom">
            <q-avatar
              color="primary"
              text-color="white"
              icon="credit_card"
              size="sm"
            />
            <span class="card__title">
              Charged to debit card
            </span>
          </div>
        </q-item-section>

        <q-item-section
          side
          top
        >
          <q-item-label
            class="card__transition"
            caption
          >
            <span class="card__transition__negative">- S$ 150</span>
            <q-icon
              name="chevron_right"
              color="gray"
            />
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-btn
        label="View all card transactions"
        class="full-width q-px-md card__button--see-all"
      />

    </q-list>
  </div>
  <!-- end of card section -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TransactionCard',
});
</script>

<style lang="scss">
.card {
  &__title {
    font-size: 12pt;
    color: $dark-blue;
  }
  &__button {
    &--see-all {
      background-color: $light-green;
      color: $green;
      text-transform: lowercase;
      font-size: 13pt;
      padding: 16px;
    }
  }

  &__bottom {
    margin-top: 14px;
  }

  &__transition {
    font-size: 14px;
    font-weight: bold;
    &__positive {
      color: $green;
    }
    &__negative {
      color: #222222;
    }
  }
}
</style>
