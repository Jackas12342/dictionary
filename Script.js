// Sample dictionary data
const dictionary = {
  "apple": "A round fruit with red or green skin and a whitish interior.",
  "banana": "A long, curved fruit with a yellow skin and soft, sweet flesh.",
  "orange": "A round citrus fruit with a tough orange skin and sweet, tangy flesh.",
  "grape": "A small, round, smooth-skinned fruit, typically purple or green, that grows in clusters on vines.",
  "kiwi": "A small, fuzzy, brown fruit with green flesh and tiny black seeds."
};

// Function to search for the word
function searchWord() {
  const wordInput = document.getElementById('wordInput').value.toLowerCase();
  const definition = document.getElementById('definition');

  if (dictionary[wordInput]) {
    definition.textContent = `Definition: ${dictionary[wordInput]}`;
  } else {
    definition.textContent = "Sorry, that word is not in the dictionary.";
  }
}