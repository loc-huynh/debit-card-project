<template>
  <q-page class="row items-center justify-evenly index-page">

    <div
      class="q-pa-md"
      style="max-width: 400px"
    >

      <label class="text-black">total money you currently have</label>
      <h3 class="text-black text-center bordered ">${{ total }}</h3>

      <q-form
        v-if="repayTimes === 0"
        ref="myForm"
        @submit.prevent="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          type="number"
          v-model="loanAmount"
          hint="Amount of money you want to loan"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Please type amount of money to loan',
          val => val >= 100 && val <= 2000 || 'loan amount must at least 100 and less or equal 2000'
        ]"
        />

        <q-select
          class="text-black"
          standout="bg-teal text-black"
          v-model="selectedItem"
          :options="rateOptions"
          label="Months to repay"
          :popup-content-style="{ backgroundColor: '#000000' }"
        />

        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
          />
        </div>
      </q-form>

      <q-btn
        v-if="repayTimes > 0"
        label="Repay"
        color="primary"
        @click="onRepay"
      />

      <p
        v-if="repayTimes > 0"
        class="text-green"
      >You still need to repay {{ repayTimes }} time(s)</p>
      <p
        v-if="repayTimes > 0"
        class="text-green"
      >You need to repay ${{ perRepay }} per month</p>

      <p
        v-if="isValid"
        class="text-red"
      >You don't have enough money to repay</p>

    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

import { computed, onMounted } from 'vue';
import { useStore } from 'src/store';
// import { mapState } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    onMounted(async () => {
      await $store.dispatch('example/getRates', {});
    });

    const $store = useStore();

    // selected period of months and rates item in select
    let selectedItem = ref(null);

    // form handle
    const $q = useQuasar();
    const loanAmount = ref(0);

    const total = computed({
      get: () => $store.state.example.total,
      set: (val) => {
        $store.commit('applyLoan', val);
      },
    });

    const rateOptions = computed({
      get: () => $store.state.example.rateOptions,
      set: (val) => {
        $store.commit('applyLoan', val);
      },
    });

    const repayTimes = computed({
      get: () => $store.state.example.repayTimes,
      set: (val) => {
        $store.commit('applyLoan', val);
      },
    });

    const isValid = computed({
      get: () => $store.state.example.isValid,
      set: (val) => {
        $store.commit('applyLoan', val);
      },
    });

    const perRepay = computed({
      get: () => $store.state.example.perRepay,
      set: (val) => {
        $store.commit('applyLoan', val);
      },
    });

    return {
      loanAmount,

      // handle submit form
      onSubmit: async () => {
        if (!selectedItem.value) {
          $q.notify({
            color: 'red',
            message: 'Please select months to repay with fixed interest rate',
          });
          return;
        }

        await $store.dispatch('example/applyLoan', {
          ...$store.state.example,
          loanAmount: loanAmount.value,
          selectedItem: selectedItem.value,
        });
        // .catch((err) => console.log(err));

        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
      },

      // select box
      selectedItem,
      rateOptions,

      total,
      repayTimes,
      isValid,
      perRepay,

      onRepay: async () => {
        await $store.dispatch('example/repayAction', {});
      },
    };
  },
});
</script>
