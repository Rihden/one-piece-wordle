<template>
  <div class="h-screen flex flex-col px-3 py-10 bg-gray-900 text-gray-200">
    <h1 class="mx-auto inline-block text-cyan-200 text-4xl text-center font-bold mb-10">
      One Piece Wordle
    </h1>
    <h3 class="text-l text-gray-200 text-center mx-auto mb-4">
      Guess the correct one piece character
    </h3>

    <div class="flex gap-2 mb-6 justify-center items-start">
      <div class="flex flex-col justify-center items-center relative">
        <input
          class="px-1 py-2 outline-none text-gray-800 rounded-sm"
          type="text"
          placeholder="Take a guess"
          @input="filterList()"
          v-model="guessText"
        />
        <div class="w-full z-10 absolute top-10 left-0">
          <div v-for="(suggestion, suggestionIndex) in suggestions" :key="suggestionIndex">
            <div
              @click="selectSuggestion(suggestionIndex)"
              class="hover:bg-gray-400 bg-gray-700 hover:cursor-pointer p-2 hover:text-gray-500"
            >
              {{ suggestion.name }}
            </div>
          </div>
        </div>
      </div>

      <button class="px-1 py-2 bg-gray-500 rounded-sm" @click="testGuess()">Guess</button>
    </div>

    <div class="scroll-y mx-auto">
      <div v-for="(kridi, tryIndex) in tries" :key="tryIndex">
        <div class="flex gap-2 items-stretch mb-4">
          <div
            :class="{
              'bg-gray-500': true,

              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.name }}
          </div>
          <div
            :class="{
              'bg-red-500': kridi.gender != correctAnswer.gender,
              'bg-green-400': kridi.gender == correctAnswer.gender,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.gender }}
          </div>
          <div
            :class="{
              'bg-red-500': kridi.race != correctAnswer.race,
              'bg-green-400': kridi.race == correctAnswer.race,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.race }}
          </div>

          <div
            :class="{
              'bg-red-500': kridi.islandOrigin != correctAnswer.islandOrigin,
              'bg-green-400': kridi.islandOrigin == correctAnswer.islandOrigin,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.islandOrigin }}
          </div>

          <div
            :class="{
              'bg-red-500': kridi.affiliation != correctAnswer.affiliation,
              'bg-green-400': kridi.affiliation == correctAnswer.affiliation,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.affiliation }}
          </div>

          <div
            :class="{
              'bg-red-500': kridi.title != correctAnswer.title,
              'bg-green-400': kridi.title == correctAnswer.title,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.title }}
          </div>

          <div
            :class="{
              'bg-red-500': kridi.isDevilFruitUser != correctAnswer.isDevilFruitUser,
              'bg-green-400': kridi.isDevilFruitUser == correctAnswer.isDevilFruitUser,
              'text-gray-50': true,
              'hover:text-gray-400': true,
              flex: true,
              'flex-row': true,
              'justify-center': true,
              'items-center': true,
              'p-4': true,
              'text-md': true,
              'border-gray-200': true,
              'border-solid': true,
              'border-2': true,
              'rounded-sm': true
            }"
          >
            {{ kridi.isDevilFruitUser ? 'Fruit user' : 'non-Fruit User' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guessText: '',
      answersList: [
        {
          name: 'Monkey D. Luffy',
          addedDate: 1997,
          gender: 'Male',
          race: 'Human',
          islandOrigin: 'East Blue',
          affiliation: 'Pirate',
          title: 'Yonko',
          isDevilFruitUser: true
        },
        {
          name: 'Vinsmoke Sanji',
          addedDate: 1997,
          gender: 'Male',
          race: 'Human',
          islandOrigin: 'North Blue',
          affiliation: 'Pirate',
          title: 'Crew member',
          isDevilFruitUser: false
        },
        {
          name: 'Roronoa Zoro',
          addedDate: 1997,
          gender: 'Male',
          race: 'Human',
          islandOrigin: 'East Blue',
          affiliation: 'Pirate',
          title: 'Vice captain',
          isDevilFruitUser: false
        },
        {
          name: 'Nami',
          addedDate: 1997,
          gender: 'Female',
          race: 'Human',
          islandOrigin: 'East Blue',
          affiliation: 'Pirate',
          title: 'Crew member',
          isDevilFruitUser: false
        }
      ],
      correctAnswer: null,
      suggestions: [],
      guess: null,
      tries: []
    }
  },
  methods: {
    clearSuggestionList() {
      this.suggestions = new Array()
      return
    },
    filterList() {
      console.log(this.guessText)
      if (this.guessText === '') {
        this.clearSuggestionList()
        return
      }
      this.suggestions = this.answersList.filter((answer) => {
        return answer.name.toLowerCase().indexOf(this.guessText.toLowerCase()) > -1
      })
    },
    selectSuggestion(index) {
      this.guess = this.suggestions[index]
      this.guessText = this.suggestions[index].name
      this.clearSuggestionList()
    },
    startGame() {
      this.tries = new Array()
      this.guess = null
      this.suggestions = new Array()
      this.correctAnswer = this.answersList[Math.floor(Math.random() * this.answersList.length)]
      this.clearSuggestionList()
    },
    testGuess() {
      if (!this.guess) return
      this.tries.push(this.guess)
      if (this.guess.name === this.correctAnswer.name) {
        alert('GJ')
      }
    }
  },
  created() {
    this.startGame()
  }
}
</script>
<style>
span {
  color: green;
}
.wrong {
  color: red;
}
.suggestion-container:hover {
  cursor: pointer;
  background-color: #ffffff40;
}

.suggestion-container {
  padding: 10px 10px;
  background-color: #ffffff10;
}
</style>
