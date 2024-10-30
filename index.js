function displayRecipe (response) {

    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 5,
      curser: "",
    });
}


function generateRecipe (event) {
  event.preventDefault ();

let instructionsInput = document.querySelector("#instructions");

let apiKey = "9f3o6449dc310bta33096fd85b205350";
let prompt = `You are a top chef AI Assistant and can give a short and simple recipe with ingredients at the top and the instructions at the bottom with the title on a different line based off ${instructionsInput.value}`;
let context = "generage a recipe with ingredients and instructions";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiURL).then(displayRecipe);
}


let recipeFormElement =document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener ("submit", generateRecipe);