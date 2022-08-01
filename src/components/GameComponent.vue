<template>
  <div class="app">
    <div class="demo-wrapper">
      <div class="demo-item">
        <div class="demo demo-correct">A</div>
        <h5>correct character and position</h5>
      </div>
      <div class="demo-item">
        <div class="demo demo-close">A</div>
        <h5>correct but wrong position</h5>
      </div>
      <div class="demo-item">
        <div class="demo demo-wrong">A</div>
        <h5>wrong</h5>
      </div>
    </div>
    <p>==================================================================</p>
    <h5>+ you have 6 guess times for each word</h5>
    <h5>+ please add 'z' add the end of guess word if word length &lt; 6</h5>
    <h5>
      EX: <b><em>test</em></b> =&gt;

      <b><i>testzz</i></b>
    </h5>
    <h5>+ click "Next" button when you guess correct</h5>
    <p>==================================================================</p>
    <h5>there are <b>12</b> words in total</h5>
    <h5 v-if="correctTime > 0">
      you got <span class="correct-time">{{ correctTime }}</span> words in a
      row!!!
    </h5>
    <p>==================================================================</p>

    chosenWord: {{ chosenWord }}<br />
    <div class="current-word">
      your guess word: <span class="current-word__text">{{ currentWord }}</span>
      <input id="something" type="text" ref="something" @keydown="handleType" />
      <button v-if="isNext" @click="handleNext(correctTime)" class="next">
        Next
      </button>
      <div v-if="isFail" class='game-over'>GAME OVER!!! còn <span
          class="game-over__impress game-over__small">non</span> và  <span
          class="game-over__impress">xanh</span> lắm :D,
        đoán j nữa mà đoán, restart hộ</div>
    </div>

    <!--
    -->

    <div class="game" v-for="(char, index) in allWords" :key="index">
      <LineComponent
        :key="increaseNumber"
        :word="test(char, index).word"
        :isFinal="test(char, index).isFinal"
        :chosenWord="chosenWord"
      />
    </div>

    <!--
    allWords.map((char, i) => {
      const isGuess = i === allWords.findIndex((val) => val === null);
      const word = isGuess ? currentWord : (char ? char : '');
      const isFinal = !isGuess && char != null;
      return (
        <line-component
        key={{i}}
        word={{word}}
        isFinal={{isFinal}}
        chosenWord={{chosenWord}}
        ></line-component>
      );
    })
    -->

    <button @click="restartGame">Restart</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LineComponent from 'components/LineComponent.vue';

export default defineComponent({
  name: 'MobileUI',
  components: {
    LineComponent,
  },
  setup() {
    const ALL_WORDS = [
      'helloz',
      'tienzz',
      'recipe',
      'benauz',
      'colenz',
      'muadoz',
      'quanzz',
      'hotvit',
      'bapxao',
      'shopee',
      'theduc',
      'nhogau',
    ];
    const chosenWord = ref('');
    const allWords: string[] | null[] = [];
    let currentWord = ref('');
    let isGameOver = ref(false);

    const allChosenWords = ALL_WORDS;
    const correctTime = ref(0);
    const isNext = ref(false);
    let increaseNumber = 1;
    const isFail = ref(false);

    /* let tempWord= ref(''); */
    /* let tempIsFinal = ref(false); */
    const test = function (char: string, index: number) {
      const isGuess: boolean =
        index === allWords.findIndex((val) => val === null);
      const word = isGuess ? currentWord.value : char ? char : '';
      const isFinal = !isGuess && char !== null;
      return { word, isFinal };
    };

    return {
      chosenWord,
      allWords,
      currentWord,
      isGameOver,
      test,
      allChosenWords,
      correctTime,
      isNext,
      ALL_WORDS,
      increaseNumber,
      isFail,
    };
  },
  methods: {
    randomWord(words: Array<string>) {
      const randIndex = Math.floor(Math.random() * words.length);
      return words[randIndex];
    },
    /* test(char: string, index: number) { */
    /*   const isGuess:boolean = index === this.allWords.findIndex((val) => val === null); */
    /*   const word:string = isGuess ? this.currentWord : (char ? char : ''); */
    /*   const isFinal:boolean = !isGuess && char !== null; */
    /*   console.log({word}); */
    /*   return {word, isFinal} */
    /* }, */
    handleType(event: KeyboardEvent) {
      if (this.isGameOver) {
        return;
      }

      if (
        event.keyCode >= 65 &&
        event.keyCode <= 90 &&
        this.currentWord.length <= 5
      ) {
        this.currentWord = this.currentWord + event.key;
      }

      // if (currentWord.length > 5) {
      //   setCurrentWord(currentWord.slice(0,5));
      // }

      if (event.key === 'Backspace') {
        this.currentWord = this.currentWord.slice(0, -1);
      }

      if (event.key === 'Enter') {
        if (this.currentWord.length !== 6) {
          return;
        }

        const index = this.allWords.findIndex((val) => val === null)
        if (index === -1) {
           this.isFail = true;
        }

        /* const cloneAllWord = [...this.allWords]; */
        /* cloneAllWord[this.allWords.findIndex((val) => val === null)] = this.currentWord; */
        /* this.allWords = this.allWords[this.allWords.findIndex((val) => val === null)] = this.currentWord; */

        this.allWords[this.allWords.findIndex((val) => val === null)] =
          this.currentWord;
        const isCorrect = this.currentWord === this.chosenWord;
        this.currentWord = '';

        if (isCorrect) {
          this.isGameOver = true;

          this.correctTime++;
          const i = this.allChosenWords.findIndex(
            (val) => val === this.chosenWord
          );
          this.allChosenWords.splice(i, 1);
          this.isNext = true;
        }

        (this.$refs['something'] as HTMLInputElement).value = '';
      }
    },

    restartGame() {
      console.log('restart game clicked');
      this.allWords = Array(6).fill(null);
      this.allChosenWords = this.ALL_WORDS;
      this.chosenWord = this.randomWord(this.allChosenWords);
      this.currentWord = '';
      this.isGameOver = false;
      this.correctTime = 0;
      this.increaseNumber++;
      this.isFail = false;
      /* this.$forceUpdate(); */
      (this.$refs['something'] as HTMLInputElement).value = '';
    },

    handleNext(correctTime: number) {
      this.restartGame();
      this.isNext = false;
      this.correctTime = correctTime;
      this.increaseNumber++;
      (this.$refs['something'] as HTMLInputElement).value = '';
    },
  },
  mounted() {
    this.chosenWord = this.randomWord(this.allChosenWords);
    this.allWords = Array(6).fill(null);
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

.game {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.demo-wrapper {
  display: flex;
  gap: 30px;
  flex-direction: column;
}
.demo-item {
  display: flex;
  align-items: center;
}
.demo-item h5 {
  font-size: 25px;
  margin: 0;
}

h5 {
  margin: 10px;
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

.demo-correct {
  background-color: green;
}
.demo-close {
  background-color: #fc9d03;
}
.demo-wrong {
  background-color: #706d68;
}

button {
  padding: 12px;
  background-color: brown;
  color: white;
  border-radius: 10px;
}
button.next {
  margin-left: 10px;
}
.current-word {
  font-size: 20px;
  margin-bottom: 20px;

  &__text {
    font-weight: bold;
    color: cyan;
  }

  input {
    margin-left: 10px;
  }
}

.correct-time {
  font-weight: bold;
  font-size: 50px;
  color: yellow;
}

.game-over {
  color: brown;
  font-style: italic;
  font-size: 30px;

  &__impress {
    font-size: 50px;
    color: green;
    text-transform: uppercase;
  }

  &__small {
    font-size: 10px;
    color: yellow;
  }
}

.app {
  background-color: #0b365a;
  color: white;
  padding: 50px;
}
</style>
