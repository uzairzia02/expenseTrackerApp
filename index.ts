#! /usr/bin/env node

import inquirer from "inquirer";

const currencyExchangeRates: any = 
{
    USD: 1, // base currency
    EUR: 0.9,
    GBP: 0.8,
    PKR: 270,
    SAR: 3.75,
    AED: 3.67,
    CAD: 1.33,
    JPY: 110,
    CNY: 6.77,
    INR: 78,
    KWD: 3.3,
    QAR: 3.5,
    BDT: 84,
    NZD: 1.47
    
};


console.log(`Welcome to my Expense Tracker App
`);

const expenseType: any = 
{
    food: "Food",
    clothing: "Clothing",
    entertainment: "Entertainment",
    transport: "Transport",
    medical: "Medical",
    other: "Other"
}

let expenseAmount: any = await inquirer.prompt([
    {
        name: "expenseType",
        type: "list",
        message: "Enter the expense type: ",
        choices: Object.keys(expenseType),
    },
    {
        name: "from",
        type: "list",
        message: "Please choose the currency you want to convert from: ",
        choices: Object.keys(currencyExchangeRates),
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter the expense amount: "
    },
    
    {
        name: "to",
        type: "list",
        message: "Please choose the currency you want to convert to: ",
        choices: Object.keys(currencyExchangeRates),
    },
    
    {
        name: "expenseDescription",
        type: "input",
        message: "Enter the expense description: "
    },
    {
        name: "persons",
        type: "list",
        message: "Enter the number of persons involved in the expense: ",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    {
        name: "daysOfStay",
        type: "list",
        message: "Enter the number of days of stay: ",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11","12", "13", "14", "15"]
    },
    {
        name: "expenseDate",
        type: "input",
        message: "Enter the expense date: "
    },
    
]);
let fromAmount = currencyExchangeRates[expenseAmount.from];
let toAmount = currencyExchangeRates[expenseAmount.to];
let amount = expenseAmount.amount;
let convertedAmount = amount * (toAmount / fromAmount);
let totalAmount = convertedAmount * expenseAmount.persons * expenseAmount.daysOfStay;
console.log(`
The expense done in currency ${expenseAmount.from} of amount ${amount} will cost you ${convertedAmount.toFixed(2)} in ${expenseAmount.to}. The details of expense are below:`);
console.log(`
Expense type: ${expenseAmount.expenseType}`);
console.log(`Expense Description: ${expenseAmount.expenseDescription}`);
console.log(`Expense Date: ${expenseAmount.expenseDate}`);
console.log(`Total expense amount for ${expenseAmount.persons} person(s) staying for ${expenseAmount.daysOfStay} day(s) is ${totalAmount.toFixed(2)} ${expenseAmount.to}`);

