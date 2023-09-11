import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fusionCalculator(action) {
   
  let arcanaInput = [
    "Fool",       "Magician",   "Priestess",  "Empress",    "Emperor",    "Hierophant", "Lovers",     "Chariot",    "Justice",    "Hermit",     "Fortune",    "Strength",   "Hanged",     "Death",      "Temperance", "Devil",      "Tower",      "Star",       "Moon",       "Sun",        "Judgement"
  ]

  let table = [
    ["Fool",       "Hierophant", "Justice",    "Fortune",    "Chariot",    "Hermit",     "Priestess",  "Magician",   "Chariot",    "Priestess",  "Justice",    "Hanged",     "Magician",   "Strength",   "Hierophant", "Hermit",     "Moon",       "Priestess",  "Fortune",    "Empress",    "Star"],
    ["Emperor",    "Magician",   "Hierophant", "Hanged",     "Temperance", "Hermit",     "Emperor",    "Devil",      "Emperor",    "Chariot",    "Emperor",    "-",          "Devil",      "-",          "Death",      "Temperance", "Empress",    "Empress",    "Priestess",  "Lovers",     "-"],
    ["Magician",   "Devil",      "Priestess",  "Lovers",     "Justice",    "Chariot",    "Magician",   "Magician",   "Hierophant", "Strength",   "Magician",   "Hermit",     "Strength",   "Emperor",    "Empress",    "-",          "-",          "Justice",    "Star",       "Star",       "Empress"],
    ["Fortune",    "Hanged",     "Lovers",     "Empress",    "Lovers",     "Priestess",  "Fortune",    "Devil",      "Emperor",    "Lovers",     "Strength",   "Chariot",    "Chariot",    "Devil",      "Lovers",     "Lovers",     "Chariot",    "Temperance", "Lovers",     "Lovers",     "-"],
    ["Lovers",     "Lovers",     "Hierophant", "Fool",       "Emperor",    "Chariot",    "Chariot",    "Priestess",  "Devil",      "Strength",   "-",          "Hanged",     "Hermit",     "Moon",       "Hanged",     "-",          "-",          "Justice",    "-",          "Empress",    "Hierophant"],
    ["Hermit",     "Hermit",     "Chariot",    "Priestess",  "Chariot",    "Hierophant", "Magician",   "Justice",    "Chariot",    "Chariot",    "Emperor",    "Priestess",  "Lovers",     "Empress",    "Strength",   "-",          "Temperance", "Priestess",  "Temperance", "Temperance", "Lovers"],
    ["Temperance", "Devil",      "Hermit",     "Fortune",    "Strength",   "Temperance", "Lovers",     "Emperor",    "Chariot",    "Justice",    "Magician",   "Hierophant", "Hermit",     "Devil",      "Priestess",  "Magician",   "Star",       "Hierophant", "Empress",    "Hierophant", "-"],
    ["Devil",      "Moon",       "Emperor",    "Devil",      "Justice",    "Sun",        "Strength",   "Chariot",    "Hermit",     "Temperance", "Strength",   "Justice",    "Fortune",    "-",          "Death",      "Hanged",     "Moon",       "-",          "Fortune",    "-",          "-"],
    ["Chariot",    "Fool",       "Hierophant", "Emperor",    "Chariot",    "Magician",   "Hanged",     "Magician",   "Justice",    "Priestess",  "Chariot",    "Temperance", "Priestess",  "Moon",       "Moon",       "-",          "Star",       "Emperor",    "-",          "Emperor",    "Hermit"],
    ["Priestess",  "Hanged",     "Fool",       "Lovers",     "Lovers",     "Chariot",    "Hierophant", "Hanged",     "Strength",   "Hermit",     "Emperor",    "Fortune",    "Fortune",    "-",          "Hanged",     "Death",      "-",          "Chariot",    "Magician",   "-",          "-"],
    ["Justice",    "Emperor",    "Magician",   "Strength",   "Sun",        "Emperor",    "Fool",       "Hermit",     "Chariot",    "Emperor",    "Fortune",    "-",          "Strength",   "-",          "Lovers",     "Moon",       "Moon",       "Moon",       "Chariot",    "Temperance", "-"],
    ["Hanged",     "Star",       "Chariot",    "Chariot",    "Hanged",     "Emperor",    "Hierophant", "Justice",    "Temperance", "Fortune",    "Sun",        "Strength",   "Hermit",     "Hanged",     "Moon",       "Fortune",    "Devil",      "Priestess",  "Hanged",     "Priestess",  "Hanged"],
    ["Magician",   "Devil",      "Strength",   "Chariot",    "Temperance", "Fortune",    "Hermit",     "Fortune",    "Priestess",  "Fortune",    "Strength",   "Fortune",    "Hanged",     "Devil",      "Hierophant", "Moon",       "Death",      "Strength",   "Empress",    "-",          "-"],
    ["Strength",   "Tower",      "Emperor",    "Devil",      "Moon",       "Empress",    "Devil",      "Fool",       "Moon",       "Tower",      "Judgement",  "Hanged",     "Devil",      "Death",      "-",          "-",          "-",          "-",          "Star",       "-",          "-"],
    ["Hierophant", "Death",      "Empress",    "Lovers",     "Hanged",     "Strength",   "Priestess",  "Death",      "Moon",       "Hanged",     "Lovers",     "Moon",       "Hierophant", "Tower",      "Temperance", "Death",      "Devil",      "Moon",       "Empress",    "Star",       "Moon"],
    ["Justice",    "Temperance", "Tower",      "Magician",   "Tower",      "Fool",       "Death",      "Star",       "Tower",      "Death",      "Hermit",     "Empress",    "Death",      "Judgement",  "Moon",       "Devil",      "-",          "-",          "-",          "-",          "-"],
    ["Moon",       "Empress",    "Death",      "Chariot",    "Death",      "Temperance", "Star",       "Moon",       "Sun",        "Death",      "Moon",       "Judgement",  "Death",      "Sun",        "Devil",      "Judgement",  "Tower",      "-",          "Fortune",    "-",          "-"],
    ["Priestess",  "Empress",    "Justice",    "Temperance", "Hermit",     "Priestess",  "Hierophant", "Sun",        "Emperor",    "Chariot",    "Moon",       "Priestess",  "Strength",   "Tower",      "Moon",       "Magician",   "Judgement",  "Star",       "Death",      "Justice",    "Temperance"],
    ["Fortune",    "Fortune",    "Star",       "Lovers",     "Tower",      "Temperance", "Empress",    "Fortune",    "Tower",      "Magician",   "Chariot",    "Hanged",     "Empress",    "Star",       "Empress",    "Judgement",  "Fortune",    "Sun",        "Moon",       "Temperance", "-"],
    ["Empress",    "Lovers",     "Star",       "Lovers",     "Empress",    "Temperance", "Hierophant", "Justice",    "Emperor",    "Star",       "Temperance", "Priestess",  "Judgement",  "Moon",       "Judgement",  "Death",      "Moon",       "Justice",    "Temperance", "Sun",        "Star"],
    ["Star",       "Tower",      "Justice",    "Devil",      "Hierophant", "Lovers",     "Sun",        "Tower",      "Hermit",     "Tower",      "Star",       "Hanged",     "Tower",      "Devil",      "Moon",       "Moon",       "Sun",        "Temperance", "Priestess",  "Star",       "Judgement"]
  ]

  const arcanaOne = action.payload.personaOne.race
  const arcanaTwo = action.payload.personaTwo.race

  const indexOne = arcanaInput.indexOf(arcanaOne)
  console.log(indexOne)
  const indexTwo = arcanaInput.indexOf(arcanaTwo)
  console.log(indexTwo)

function getFusionArcana(arc1, arc2) {
    if (arc1 < arc2 || arc1 == arc2) {
      return table[arc1][arc2]
    }
    if (arc1 > arc2) {
      return table[arc2][arc1]
    }
  }

  const arcanaResult = getFusionArcana(indexOne, indexTwo)
  console.log(arcanaResult)
}



function* calculatorSaga() {
  yield takeLatest('FUSE', fusionCalculator)
}

export default calculatorSaga