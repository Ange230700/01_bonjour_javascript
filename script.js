// script.js

import sayHello from "./javascript/functions/sayHello.js";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const firstNameInput = document.getElementById("first-name-input");
    const firstName = firstNameInput.value.trim() || "Inconnu";
  sayHello(firstName, new Date().getHours());
});
