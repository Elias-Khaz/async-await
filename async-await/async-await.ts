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

async function playGame() {
    try {
        const result = await flipCoin();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

playGame();