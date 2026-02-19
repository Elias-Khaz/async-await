function flipCoin() {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        if (random > 0.5) {
            resolve("You won!");
        } else {
            reject("You lost!");
        }
    });
}

flipCoin()
    .then(result => console.log(result))
    .catch(error => console.log(error));