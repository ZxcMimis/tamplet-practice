import pizzaList from "./tamplates/pizza.hbs";
import pizzaData from "./data/menu.json";

console.log(pizzaData.pizzas)
const pizzas = pizzaData.pizzas;
const pizzaLayoat = pizzaList(pizzaData.pizzas);

document.querySelector(".box").innerHTML = {pizzaLayoat}