import React from 'react';
import loadDataCommons_list from './api_to_path';

const label = () => {

  return (
    <div class="content contentpadding">

    <div style="float:left; padding-right:30px">
    <div id="test2"></div>
    </div>
    
    <div style="overflow: auto;">
       
        <p>Giving specific nutrition label values and hiding some of the parts of the nutrition label</p>
    <pre id="pre2">
    $('#test2').nutritionLabel({
        showServingUnitQuantity : false,
        itemName : 'Bleu Cheese Dressing',
        ingredientList : 'Bleu Cheese Dressing',
    
        decimalPlacesForQuantityTextbox : 2,
        valueServingUnitQuantity : 1,
    
        allowFDARounding : true,
        decimalPlacesForNutrition : 2,
    
        showPolyFat : false,
        showMonoFat : false,
    
        valueCalories : 450,
        valueFatCalories : 430,
        valueTotalFat : 48,
        valueSatFat : 6,
        valueTransFat : 0,
        valueCholesterol : 30,
        valueSodium : 780,
        valueTotalCarb : 3,
        valueFibers : 0,
        valueSugars : 3,
        valueProteins : 3,
        valueVitaminD : 12.22,
        valuePotassium_2018 : 4.22,
        valueCalcium : 7.22,
        valueIron : 11.22,
        valueAddedSugars : 17,
        valueCaffeine : 15.63,
        showLegacyVersion : false
    });
    </pre>
    </div>
    
    <div style="clear:both"></div>
    
    </div>
    
    
  )
}

export default label;