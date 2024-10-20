/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

/*
var transactionsExample = [
    { itemName: "Pepsi",
      category: "Drink",
      price: 20,
      timestamp: "12 June 2024" },

    { itemName: "Samosa",
      category: "Food",
      price: 15,
      timestamp: "13 June 2024" },

    { itemName: "Five Star",
      category: "Food",
      price: 10,
      timestamp: "13 June 2024" },

    { itemName: "Coke",
      category: "Drink",
      price: 20,
      timestamp: "14 June 2024" }
]

var categoryWiseExpenditure = [
    { category: "Food",
      amountSpent: 25},

    { category: "Drink",
      amountSpent: 40 }
]
*/

function calculateTotalSpentByCategory(transactions) {
   var spendEstimates = {};
   for(var i=0; i<transactions.length; i++) {
        t=transactions[i];
        if(spendEstimates[t.category]) {
            spendEstimates[t.category]+=t.price
        } else {
            spendEstimates[t.category]=t.price;
        }
   }

   /*
   spendEstimates will now look like-
   { "Drink": 40,
     "Food": 25 }
   */

   var keys=Object.keys(spendEstimates);
   let answer=[];
   for(var i=0; i<keys.length; i++) {
        var obj = {
            category: keys[i],
            amountSpend: spendEstimates[keys[i]]
        }
        answer.push(obj);
   }

   /*
   answer will look like this-
   [ { category: "Drink",
       amountSpent: 40 },

     { category: "Food",
       amountSpend: 25 } ]
   */
}

module.exports = calculateTotalSpentByCategory;
