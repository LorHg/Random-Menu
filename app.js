const menu = {
_courses: {
 appetizers: [],
  mains: [], 
  desserts:[],
  },
  get appetizers() {
    return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
      },
    get desserts() {
      return this._courses.desserts;
      },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers, 
      mains: this.mains, 
      desserts: this.desserts 
    };
  },
addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  return this._courses[courseName].push(dish);
 },
 getRandomDishFromCourse(courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random()* dishes.length);
   return dishes[randomIndex];
 },
generateRandomMeal() {
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price
 return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price of your meal is: ${totalPrice}. `;
 }
 };

menu.addDishToCourse('appetizers', 'nachos', 3.50);
menu.addDishToCourse('appetizers', 'ali oli potatoes', 3.00);
menu.addDishToCourse('appetizers', 'hummus with crudites', 2.50);
menu.addDishToCourse('mains', 'pad thai', 6.00);
menu.addDishToCourse('mains', 'roasted chicken', 5.00);
menu.addDishToCourse('mains', 'miso soup', 4.00); 
menu.addDishToCourse('desserts', 'ice cream', 3.00); 
menu.addDishToCourse('desserts', 'cheese cake', 3.50); 
menu.addDishToCourse('desserts', 'firewater shot', 2.50); 

let meal = menu.generateRandomMeal();
console.log(meal);