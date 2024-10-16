function sayHello(firstName, hour) {
    let greeting = "Bonjour";
    if (hour >= 18) {
        greeting = "Bonsoir";
    }

    const message = `${greeting} ${firstName} !`;
    document.querySelector('h1').innerText = message;
}

sayHello(`Beyoncé`, 11); // expected: Bonjour Beyoncé !
sayHello(`Beyoncé`, 18); // expected: Bonsoir Beyoncé !
sayHello(`Beyoncé`, 17); // expected: Bonjour Beyoncé !