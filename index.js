function addCategory(category) {
  categories.push(category);
}

function addNewItem(productName, category) {
  list.push({ name: productName, category: category });
}

function getItemsFromCategory(category) {
  const items = [];
  if (!categories.includes(category)) throw new Error("category not found");
  for (let i = 0; i < list.length; i++) {
    if (category == list[i].category) {
      items.push(list[i].name);
    }
  }
  return items;
}

function deleteItemFromCategory(productName, category) {
  if (!categories.includes(category)) throw new Error("category not found");
  if (!list.find((product) => product.name === productName)) {
    throw new Error("Product not found");
  }
  const filteredList = list.filter(
    (product) => product.name !== productName || product.category !== category
  );
  return filteredList;
}

function deleteAllItemsFromCategory(category) {
  if (!categories.includes(category)) throw new Error("category not found");
  const filteredList = list.filter((product) => product.category !== category);
  return filteredList;
}

const categories = ["fruits", "meat", "vegetables"];

let list = [
  { name: "apple", category: "fruits" },
  { name: "banana", category: "fruits" },
  { name: "chorizo", category: "meat" },
  { name: "lettuce", category: "vegetables" },
  { name: "plums", category: "fruits" },
];
console.log("categories before adding fish",categories);
addCategory("fish");
console.log("categories after adding fish",categories);
addNewItem("salmon", "fish");
const fish = getItemsFromCategory("fish");
console.log("Items from category fish", fish);

let fruits = getItemsFromCategory("fruits");
console.log("before delete apple");
console.log("Items from category fruits", fruits);
list = deleteItemFromCategory("apple", "fruits");
fruits = getItemsFromCategory("fruits");
console.log("after delete apple");
console.log("Items from category fruits", fruits);

list = deleteAllItemsFromCategory("fruits");
fruits = getItemsFromCategory("fruits");
console.log("after delete all products from the category fruits");
console.log("Items from category fruits", fruits);

