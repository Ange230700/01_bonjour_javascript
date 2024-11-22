// javascript\functions\sayHello.js

function sayHello(firstName, hour) {
  let greeting = "Bonjour";
  if (hour >= 18) {
    greeting = "Bonsoir";
  }

  const message = `${greeting} ${firstName} !`;
  document.querySelector("h1").innerText = message;
}

export default sayHello;
