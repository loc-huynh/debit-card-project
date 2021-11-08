<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer
      show-if-above
      side="left"
      bordered
    >
      <navigation />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from 'src/components/Navigation.vue';

export default defineComponent({
  name: 'DebitsLayout',

  components: { Navigation },

  setup() {
    return {};
  },
});
</script>
