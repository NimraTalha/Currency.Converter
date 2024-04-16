import inquirer from 'inquirer';
const currency = {
    USD: 1, //base currency
    EURO: 0.94,
    GBP: 0.80,
    INR: 83.58,
    PKR: 278.25
};
(async () => {
    const userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EURO", "GBP", "INR", "PKR"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "EURO", "GBP", "INR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "Number",
        },
    ]);
    const userFromCurrency = userAnswer.from;
    const userToCurrency = userAnswer.to;
    const fromAmount = currency[userFromCurrency];
    const toAmount = currency[userToCurrency];
    const amount = userAnswer.amount;
    const baseAmount = amount / fromAmount;
    const convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
})();
