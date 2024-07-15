import React from 'react';
import './Label.css';

const Label = ({ searchResults }) => {
  return (
    <div className="label-container">
      {searchResults.map((result, index) => (
        <div key={index} className="nutrition-label">
          <h2>{result.description}</h2>
          <p>Category: {result.foodCategory || 'N/A'}</p>
          <p>Brand: {result.brandName || 'N/A'}</p>
          <div className="nutrition-facts">
            <h3>Nutrition Facts</h3>
            <div className="nutrition-item">
              <span>Serving Size</span>
              <span>{result.servingSize ? `${result.servingSize} ${result.servingSizeUnit}` : 'N/A'}</span>
            </div>
            <div className="nutrition-item">
              <span>Calories</span>
              <span>{getNutrientValue(result, 'Energy')}</span>
            </div>
            <div className="nutrition-item">
              <span>Total Fat</span>
              <span>{getNutrientValue(result, 'Total lipid (fat)')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Saturated Fat</span>
              <span>{getNutrientValue(result, 'Fatty acids, total saturated')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Trans Fat</span>
              <span>{getNutrientValue(result, 'Fatty acids, total trans')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Cholesterol</span>
              <span>{getNutrientValue(result, 'Cholesterol')} mg</span>
            </div>
            <div className="nutrition-item">
              <span>Sodium</span>
              <span>{getNutrientValue(result, 'Sodium, Na')} mg</span>
            </div>
            <div className="nutrition-item">
              <span>Total Carbohydrates</span>
              <span>{getNutrientValue(result, 'Carbohydrate, by difference')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Dietary Fiber</span>
              <span>{getNutrientValue(result, 'Fiber, total dietary')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Total Sugars</span>
              <span>{getNutrientValue(result, 'Total Sugars')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Protein</span>
              <span>{getNutrientValue(result, 'Protein')} g</span>
            </div>
            <div className="nutrition-item">
              <span>Vitamin D</span>
              <span>{getNutrientValue(result, 'Vitamin D (D2 + D3), International Units')} IU</span>
            </div>
            <div className="nutrition-item">
              <span>Calcium</span>
              <span>{getNutrientValue(result, 'Calcium, Ca')} mg</span>
            </div>
            <div className="nutrition-item">
              <span>Iron</span>
              <span>{getNutrientValue(result, 'Iron, Fe')} mg</span>
            </div>
            <div className="nutrition-item">
              <span>Potassium</span>
              <span>{getNutrientValue(result, 'Potassium, K')} mg</span>
            </div>
          </div>

          <p className='date'>PublicationDate: {result.publicationDate || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

// Helper function to get nutrient value
const getNutrientValue = (result, nutrientName) => {
  const nutrient = result.foodNutrients.find(n => n.nutrient.name === nutrientName);
  return nutrient ? nutrient.amount : 'N/A';
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