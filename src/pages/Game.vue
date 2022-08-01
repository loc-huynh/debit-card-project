<template>

  <GameComponent></GameComponent>

</template>

<script>
import { defineComponent } from 'vue';
import GameComponent from 'src/components/GameComponent.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    GameComponent
  },
});
</script>
