function generateRecipe (event) {
  event.preventDefault ();

  new Typewriter("#recipe", {
    strings: `recipe`,
    autoStart: true,
    delay: 5,
    curser: "",
  });
}

let recipeFormElement =document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener ("submit", generateRecipe);