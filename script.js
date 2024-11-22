// script.js

import sayHello from "./javascript/functions/sayHello.js";

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  const firstNameInput = document.getElementById("firstNameInput");
  const firstName = firstNameInput.value.trim() || "Inconnu";
  sayHello(firstName, new Date().getHours());
});
