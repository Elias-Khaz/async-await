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

        console.log("Fetching advice...");

        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json();

        console.log("Your advice:", data.slip.advice);

    } catch (error) {
        console.log(error);
    }
};

playGame();