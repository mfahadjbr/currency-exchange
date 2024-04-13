import inquirer from "inquirer";
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277,
};
let user_answer = await inquirer.prompt([
    {
        type: 'list',
        name: 'from_currency',
        message: 'select the currency to convert from :',
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        type: 'list',
        name: 'to_currency',
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to convert :'
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_currency = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let convert_amount = base_amount * to_currency;
console.log(`CONVERTED AMOUNT = ${convert_amount}`);
