console.log("Grocery shopping list");
const shoppingList = [];
console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}
console.log(getShoppingListMsg (shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg (shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable oil");
console.log(getShoppingListMsg (shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato chips");
console.log(shoppingList);
console.log(getShoppingListMsg (shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(shoppingList);

console.log(getShoppingListMsg (shoppingList));
console.log("It might be nice to get some dessert.");

shoppingList.push("Chocolate Cake");
console.log(getShoppingListMsg (shoppingList));

console.log("On second thought, mahybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola oil";
console.log(getShoppingListMsg (shoppingList)); 
