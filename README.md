# Payslip Generator

## Description

This is a simple program to calculate employees' gross monthly income, monthly income tax and net monthly income.
|Taxable Income|Tax on this Income|
|---------------------------:|---------------------------:|
|$0-$20,000|$0|
|$20,001-$40,000|10c for each $1 over $20,000|
|$40,001-$80,000|20c for each $1 over $40,000|
|$80,001-$180,000|30c for each $1 over $80,000|
|$180,001 and over|40c for each $1 over $180,000|

## Assumption

- The program is run on node - v12
- The payslip represents monthly of the annual figures.
- There is a capability to extend the change of tax bracket.

## Implemetation

### Design

- The program is broken down into small modules so they are easier to test and maintain.
- Have chosen json to store the tax bracket data. This will enhance our maintainability. When there is a change in tax table, we only need to modify the Json file.

#### Solution

- Calculation folder : calculation code, taxTable.json & tests
- Formatter folder : payslip format code & tests
- Model folder : payslip model and tax bracket model
- Validator folder : contains validation & tests

### Big.js

Big.js is a small, fast JavaScript library for arbitrary-precision decimal arithmetic. By using Big js, it will give us a more accurate calculation and avoid problems like
0.1 + 0.2 not being equal to 0.3. Have chosen this library as it is a popular library. Around 3.5K people has starred this.

## Run Application

- Install Node.js
- git clone git@github.com:yktse/console-app.git
- npm install
- npm link
- GenerateMonthlyPayslip "Mary Song" 60000

## Run Test

- npm install
- npm run test
