const firstName = prompt("Quel est votre prénom ?");

function sayHello(firstName, hour) {
    let greeting = "Bonjour";
    if (hour >= 18) {
        greeting = "Bonsoir";
    }

    const message = `${greeting} ${firstName} !`;
    document.querySelector('h1').innerText = message;
}

const hour = new Date().getHours();
sayHello(firstName, hour); // dynamic use of the function by passing the current hour with new Date().getHours()