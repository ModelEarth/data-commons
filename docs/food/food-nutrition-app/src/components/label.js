import React, { useState } from 'react';
import './Label.css';

const USDA_REQUIRED_NUTRIENTS = [
  'Total lipid (fat)',
  'Fatty acids, total saturated',
  'Cholesterol',
  'Sodium, Na',
  'Carbohydrate, by difference',
  'Fiber, total dietary',
  'Total Sugars',
  'Protein',
  'Vitamin D (D2 + D3), International Units',
  'Calcium, Ca',
  'Iron, Fe',
  'Potassium, K',
];

const VITAMIN_NUTRIENTS = [
  'Vitamin A, IU',
  'Vitamin C, total ascorbic acid',
  'Vitamin D (D2 + D3), International Units',
  'Vitamin E (alpha-tocopherol)',
  'Vitamin K (phylloquinone)',
  'Thiamin',
  'Riboflavin',
  'Niacin',
  'Vitamin B-6',
  'Folate, total',
  'Vitamin B-12',
  'Choline, total',
];

// share / download/ copy of menus 
// keto sets diet 

const Label = ({ searchResults }) => {
  return (
    <div className="label-container">
      {searchResults.map((result, index) => (
        <NutritionLabel key={index} result={result} />
      ))}
    </div>
  );
};

const NutritionLabel = ({ result }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const getNutrientValue = (result, nutrientName) => {
    const nutrient = result.foodNutrients.find(n => n.nutrient.name === nutrientName);
    return nutrient ? `${nutrient.amount} ${nutrient.nutrient.unitName}` : 'N/A';
  };

  const usdaNutrients = result.foodNutrients.filter(nutrient =>
    USDA_REQUIRED_NUTRIENTS.includes(nutrient.nutrient.name)
  );

  const vitaminNutrients = result.foodNutrients.filter(nutrient =>
    VITAMIN_NUTRIENTS.includes(nutrient.nutrient.name)
  );

  const otherNutrients = result.foodNutrients.filter(
    nutrient => !USDA_REQUIRED_NUTRIENTS.includes(nutrient.nutrient.name) && !VITAMIN_NUTRIENTS.includes(nutrient.nutrient.name)
  );

  return (
    <div className="nutrition-label">
      <h2>{result.description}</h2>
      <p>Brand: {result.brandName || 'N/A'}</p>

      <div className="serving">
        <span>Serving Size</span>
        <span>{result.servingSize ? `${result.servingSize} ${result.servingSizeUnit}` : 'N/A'}</span>
      </div>

      <div className="calories">
        <span>Calories</span>
        <span>{getNutrientValue(result, 'Energy')}</span>
      </div>
      <div className="nutrition-facts">
        <h3>Nutrition Facts</h3>

        {usdaNutrients.map((nutrient, index) => (
          <div key={index} className="nutrition-item">
            <span>{nutrient.nutrient.name}</span>
            <span>{`${nutrient.amount} ${nutrient.nutrient.unitName}`}</span>
          </div>
        ))}

        <h4>Vitamins</h4>
        {vitaminNutrients.map((nutrient, index) => (
          <div key={index} className="nutrition-item">
            <span>{nutrient.nutrient.name}</span>
            <span>{`${nutrient.amount} ${nutrient.nutrient.unitName}`}</span>
          </div>
        ))}

        {showAll &&
          otherNutrients.map((nutrient, index) => (
            <div key={index} className="nutrition-item">
              <span>{nutrient.nutrient.name}</span>
              <span>{`${nutrient.amount} ${nutrient.nutrient.unitName}`}</span>
            </div>
          ))}
        <div className="nutrition-item">
          <button onClick={toggleShowAll}>{showAll ? 'Show Less' : '...More'}</button>
        </div>
      </div>

      <p className="date">Publication Date: {result.publicationDate || 'N/A'}</p>
    </div>
  );
};

export default Label;




// import React from 'react';
// import loadDataCommons_list from '../../../api_to_path';

// const label = () => {

//   return (
//     <div class="content contentpadding">

//     <div style="float:left; padding-right:30px">
//     <div id="test2"></div>
//     </div>
    
//     <div style="overflow: auto;">
       
//         <p>Giving specific nutrition label values and hiding some of the parts of the nutrition label</p>
//     <pre id="pre2">
//     $('#test2').nutritionLabel({
//         showServingUnitQuantity : false,
//         itemName : 'Bleu Cheese Dressing',
//         ingredientList : 'Bleu Cheese Dressing',
    
//         decimalPlacesForQuantityTextbox : 2,
//         valueServingUnitQuantity : 1,
    
//         allowFDARounding : true,
//         decimalPlacesForNutrition : 2,
    
//         showPolyFat : false,
//         showMonoFat : false,
    
//         valueCalories : 450,
//         valueFatCalories : 430,
//         valueTotalFat : 48,
//         valueSatFat : 6,
//         valueTransFat : 0,
//         valueCholesterol : 30,
//         valueSodium : 780,
//         valueTotalCarb : 3,
//         valueFibers : 0,
//         valueSugars : 3,
//         valueProteins : 3,
//         valueVitaminD : 12.22,
//         valuePotassium_2018 : 4.22,
//         valueCalcium : 7.22,
//         valueIron : 11.22,
//         valueAddedSugars : 17,
//         valueCaffeine : 15.63,
//         showLegacyVersion : false
//     });
//     </pre>
//     </div>
    
//     <div style="clear:both"></div>
    
//     </div>
    
    
//   )
// }

// export default label;