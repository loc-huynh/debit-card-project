<template>
  <div>
    <!-- navigtion bars section -->
    <mobile-navigation-bar v-if="$q.screen.lt.md" />
    <!-- end of navigtion bars section -->

    <div class="mobile-wrapper row">
      <!-- account balance component -->
      <account-balance />
      <!-- end of account-balance -->

      <div class="mobile__top col-12 col-md-6">

        <!-- tab panel section -->
        <tab-panel>
          <template v-slot:item1>
            <!-- carousel component -->
            <!-- <div class="q-pa-md"> -->
            <carousel>
              <template v-slot:item1>
                <user-card />
              </template>

              <template v-slot:item2>
                <user-card></user-card>
              </template>

              <template v-slot:item3>
                <user-card></user-card>
              </template>
            </carousel>
            <!-- end of carousel component -->
          </template>

          <template v-slot:item2>
            <carousel>
              <template v-slot:item1>
                <user-card color="#536DFF" />
              </template>

              <template v-slot:item2>
                <user-card></user-card>
              </template>

              <template v-slot:item3>
                <user-card color="#536DFF" />
              </template>
            </carousel>
          </template>

        </tab-panel>
        <!-- end tab panel section -->

        <!-- component contains 5 buttons -->
        <action-container />
      </div>
      <!-- end of mobile-top -->

      <div class="mobile__scroll-section q-pt-none col-12 col-md-6">
        <!-- component contains collapses section -->

        <!-- start of collapse section -->
        <!-- style="max-width: 350px" -->
        <div class="q-py-md">
          <collapse>
            <template v-slot:item1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </template>
            <template v-slot:item2>
              <transaction-card />
            </template>
          </collapse>
        </div>
        <!-- end of collapse section -->
      </div>
      <!-- end of mobile__scroll-section -->

    </div>
    <!-- end of mobile-wrapper -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCard from 'components/UserCard.vue';
import MobileNavigationBar from 'components/MobileNavigationBar.vue';
import AccountBalance from 'components/AccountBalance.vue';
import ActionContainer from 'components/ActionContainer.vue';
import TransactionCard from 'components/TransactionCard.vue';
import Collapse from 'components/Collapse.vue';
import TabPanel from 'components/TabPanel.vue';
import Carousel from 'components/Carousel.vue';

export default defineComponent({
  name: 'MobileUI',
  components: {
    UserCard,
    MobileNavigationBar,
    AccountBalance,
    ActionContainer,
    TransactionCard,
    Collapse,
    TabPanel,
    Carousel,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.mobile-wrapper {
  margin-top: 30pt;

  @media (min-width: $breakpoint-sm-min) {
    margin-top: 0;
  }
}

// TODO: temporary set 86pt, would update when have exact height of fixed sections
.mobile__scroll-section {
  padding-bottom: calc(77pt + 86pt);
  border-radius: 0 0 20pt 20pt;
  background-color: $white;
  margin-top: -16pt;

  @media (min-width: $breakpoint-sm-min) {
    margin-top: 0;
    padding-bottom: 60px;
  }
}
</style>
