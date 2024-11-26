//import { displayJsonData } from '../data_loader.js';

async function loadDataCommonsbyId(apiKey, fdcid) 
{ 
      const url =`https://api.nal.usda.gov/fdc/v1/food/${fdcid}?api_key=${apiKey}`;
      const response = await fetch(url);
      return await response.json();
}

async function loadDataCommons_list(apiKey) 
{ 
      const url = `https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Foundation,SR%20Legacy&pageSize=100&pageNumber=1&api_key=${apiKey}`;
      const response = await fetch(url);
      return await response.json();
}

// Get a list of food that matched search keywords
async function loadDataCommons_search(apiKey,keyword) 
{ 
      const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${keyword}`;
      const response = await fetch(url);
      return await response.json();
}

function loadDataFood() {
    //console.log("read data")
    //loadDataCommonsbyId('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml', '2015943').then(data => {
    loadDataCommons_list('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml').then(data => {
    //loadDataCommons_search('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml','turkey sandwich').then(data => {
        //console.log("new step");
        //console.log(data);
        //document.getElementById('resultContainer').innerText = JSON.stringify(data, null, 2);
        //displayJsonData(data)
        const ids = data.map(item => item.fdcId);
        const food_name = data.map(item => item.description);
        const foodNutrients = data.map(item => item.foodNutrients);
      // Log the list of fdcId values
        console.log(ids);
        console.log(food_name);
        console.log(foodNutrients);

        $("#resultJson").html(JSON.stringify(foodNutrients));

        console.log("---------")
      }).catch(error => {
        console.error('Error loading data:', error);
    });
}

const commonFruits = [
  'Apple',
  'Banana',
  'Orange',
  'Strawberry',
  'Grapes',
  'Watermelon',
  'Pineapple',
  'Mango',
  'Blueberry',
  'Raspberry',
  'Peach',
  'Cherry',
  'Pear',
  'Plum',
  'Kiwi',
  'Lemon',
  'Lime',
  'Grapefruit',
  'Cantaloupe',
  'Apricot',
  'Blackberry',
  'Pomegranate',
  'Papaya',
  'Dragon Fruit',
  'Fig'
];

const commonVeggie = [
  "Spinach",
  "Kale",
  "Lettuce",
  "Cabbage",
  "Onion",
  "Garlic",
  "Potato",
  "Sweet potato",
  "Zucchini",
  "Eggplant",
  "Pumpkin",
  "Squash",
  "Cauliflower",
  "Brussels sprouts",
  "Asparagus",
  "Green beans",
  "Peas",
  "Corn",
  "Mushroom",
  "Beetroot",
  "Radish",
  "Turnip",
  "Parsnip",
  "Rutabaga"
];

const commonProtein = [
  "Chicken breast",
  "Salmon",
  "Eggs",
  "Greek yogurt",
  "Tofu",
  "Lean beef",
  "Turkey breast",
  "Cottage cheese",
  "Sardines",
  "Lentils",
  "Quinoa",
  "Black beans",
  "Chickpeas",
  "Tuna",
  "Peanut butter",
  "Almonds",
  "Cottage cheese",
  "Milk",
  "Whey protein",
  "Cottage cheese",
  "Pork chops",
  "Soy milk",
  "Tempeh",
  "Cottage cheese",
  "Seitan"
];

const commonCarbs = [
  "Oats",
  "Brown rice",
  "Quinoa",
  "Whole grain bread",
  "Whole grain pasta",
  "Sweet potato",
  "Potato",
  "Barley",
  "Buckwheat",
  "Millet",
  "Whole wheat couscous",
  "Whole wheat tortillas",
  "Whole wheat bagels",
  "Wild rice",
  "Bulgur",
  "Farro",
  "Popcorn",
  "Cornmeal",
  "Couscous",
  "White rice",
  "White bread",
  "White pasta",
  "Bagels",
  "Cereal",
  "Crackers"
];

async function get_food_map(commonCarbs) {
  //const foodMap = new Map();
  const foodMap = {};
  for (const food of commonCarbs) {
    try {
      const data = await loadDataCommons_search('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml', food);
      if (data.foods.length > 0) {
        //console.log(`Food: ${food}, ID: ${data.foods[0].fdcId}`);
        const id = data.foods[0].fdcId;
        const food_name = data.foods[0].description;
        //console.log(`Food: ${food_name}`)
        //foodMap.set(food_name, id);
        foodMap[food_name] = id;
      } else {
        console.log(`Food: ${data.foods[0].description}`);
      }
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
  //console.log(foodMap);
  return foodMap;
}

//const foodMap = await get_food_map(commonCarbs); //Error: await is only valid in async functions and the top level bodies of modules
const foodMap = get_food_map(commonCarbs);
console.log(foodMap);

function food_to_webpage(name,fdcid){
  //var link = document.getElementById("myLink");
  const url =`[${name}](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/${fdcid}?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)`;
  return url;
}
for (const [name, id] of Object.entries(foodMap)) {
  const url =food_to_webpage(name, id);
  console.log(url);
}