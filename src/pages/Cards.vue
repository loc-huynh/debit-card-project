<template>

  <debit-cards></debit-cards>

</template>

<script>
import DebitCards from 'src/components/DebitCards.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { DebitCards },
});
</script>
