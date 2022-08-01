<template>
  <div v-for="(item, index) in tiles" :key="index">
    <span :key="index" :className="item.className">{{ item.char }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'MobileUI',
  components: {},
  props: {
    word: {
      type: String,
      default: '',
    },
    isFinal: Boolean,
    chosenWord: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const WORD_LENGTH = 6;
    let tiles = ref<any[]>([]);

    watch(
      () => props.word,
      () => {
        const { word, isFinal, chosenWord } = props;
        /* const tempArr = []; */
        for (let i = 0; i < WORD_LENGTH; i++) {
          const char = word[i];
          let className = 'tile';

          if (isFinal) {
            if (char === chosenWord[i]) {
              className += ' correct';
            } else if (chosenWord.includes(char)) {
              className += ' close';
            } else {
              className += ' incorrect';
            }
          }
          /* tempArr.push({ className, char }); */
          tiles.value.push({className, char});
        }
      }
    );

    /* watch( */
    /*   () => props.isFinal, */
    /*   () => { */
    /*     const { word, isFinal, chosenWord } = props; */
    /*     /1* const tempArr = []; *1/ */
    /*     for (let i = 0; i < WORD_LENGTH; i++) { */
    /*       const char = word[i]; */
    /*       let className = 'tile'; */

    /*       if (isFinal) { */
    /*         if (char === chosenWord[i]) { */
    /*           className += ' correct'; */
    /*         } else if (chosenWord.includes(char)) { */
    /*           className += ' close'; */
    /*         } else { */
    /*           className += ' incorrect'; */
    /*         } */
    /*       } */
    /*       /1* tempArr.push({ className, char }); *1/ */
    /*       tiles.value.push({className, char}); */
    /*     } */
    /*   } */
    /* ) */

    /* watch( */
    /*   () => props.chosenWord, */
    /*   () => { */
    /*     const { word, isFinal, chosenWord } = props; */
    /*     /1* const tempArr = []; *1/ */
    /*     for (let i = 0; i < WORD_LENGTH; i++) { */
    /*       const char = word[i]; */
    /*       let className = 'tile'; */

    /*       if (isFinal) { */
    /*         if (char === chosenWord[i]) { */
    /*           className += ' correct'; */
    /*         } else if (chosenWord.includes(char)) { */
    /*           className += ' close'; */
    /*         } else { */
    /*           className += ' incorrect'; */
    /*         } */
    /*       } */
    /*       /1* tempArr.push({ className, char }); *1/ */
    /*       tiles.value.push({className, char}); */
    /*     } */
    /*   } */
    /* ) */

    return {
      tiles,
    };
  },
  methods: {
    /* restartGame() { */
    /*   console.log('restart game clicked'); */
    /*   this.allWords = Array(6).fill(null); */
    /*   this.allChosenWords = this.ALL_WORDS; */
    /*   this.chosenWord = this.randomWord(this.allChosenWords); */
    /*   this.currentWord = ''; */
    /*   this.isGameOver = false; */
    /*   this.correctTime = 0; */
    /* }, */
  },
  /* mounted() { */

  /* }, */
});
</script>

<style lang="scss">
.game {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-transform: uppercase;
}

.tiles {
	display: flex;
	gap: 10px;
}

.tile {
	width: 30px;
	height: 30px;
	border: 1px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
}

.tile.correct {
	background-color: green;
}
.tile.close {
	background-color: #FC9D04;
}
.tile.incorrect {
	background-color: #706D68;
}

button {
  padding: 15px;
  background-color: #706D68;
  color: white;
  border-radius: 10px;
}
</style>
