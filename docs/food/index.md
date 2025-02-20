[Data Commons](../)

# Healthy Food

Goal 2. Healthy Food, No Hunger and [GHG mitigation](/profile/) - [balance repo](/balance/) - [Why Modern Food Lost its Nutrition](https://www.bbc.com/future/bespoke/follow-the-food/why-modern-food-lost-its-nutrients/)

[International FHIR Nutrition Product json](https://build.fhir.org/nutritionproduct.html) - [About FHIR Fast Healthcare Interoperability](https://en.wikipedia.org/wiki/Fast_Healthcare_Interoperability_Resources)
<!--
	https://confluence.hl7.org/display/FHIR/FHIR+Spreadsheet+Authoring#FHIRSpreadsheetAuthoring-ExcelSpreadsheet

	Download spreadsheets
	https://build.fhir.org/definitions.xlsx.zip
-->
## Food Nutrition Labels (YAML locally)

Source: [USDA API](https://fdc.nal.usda.gov/api-guide.html)

In the "fdc" subfolder we have two yaml samples for each of the 5 food groups (protein, dairy, vegetable, fruit, grains)

**Protein**  
[CHICKEN THIGH](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/1899680.yaml)  
[CHEDDAR CHEESE](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2015943.yaml)  

**Dairy**  
[MILK](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2501185.yaml)  
[SPINACH](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2099349.yaml)  

**Vegetable**  
[TOFU](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2294522.yaml)  
[Lettuce, raw](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2345309.yaml)  

**Fruit**  
[APPLE](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2117388.yaml)  
[CHERRY](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2135570.yaml)  

**Grains**  
[SPAGHETTI](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/2099117.yaml)  
[RICE](/io/template/parser/#yaml=/data-commons/docs/food/fdc/samples/356554.yaml)  


## Specific Food Profiles (JSON directly from FDA API)

Each food's nutrition data path is passed to our Feed-Player:

**Fruits** 
[APPLE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/454004?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BANANA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2012128?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[ORANGE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1864680?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[STRAWBERRY](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2388788?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[GRAPES](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2388443?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WATERMELON](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2193119?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PINEAPPLE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2282543?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[MANGO](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2629151?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BLUEBERRY](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2116605?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[RASPBERRY](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2038855?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PEACH](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2053614?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CHERRY](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2135570?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Pear, raw](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2344749?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Plum, canned](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2344761?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[KIWI](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1662236?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[LEMON](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2038425?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Lime souffle](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2344800?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[GRAPEFRUIT](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2156170?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CANTALOUPE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1568209?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[APRICOT](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2107589?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BLACKBERRY](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2121828?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[POMEGRANATE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2541400?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PAPAYA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2670269?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Dragon fruit](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2344729?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[FIG](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2216672?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)  

**Vegetables**
[SPINACH](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2617829?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[KALE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1602525?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Lettuce, raw](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345309?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Cabbage, kimchi](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/170392?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[ONION](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2438059?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[GARLIC](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1662203?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Potato patty](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345004?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[SWEET POTATO](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/477475?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[ZUCCHINI](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2428955?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Eggplant dip](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345576?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PUMPKIN](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2434324?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Spaghetti squash, cooked](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345528?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CAULIFLOWER](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2409200?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BRUSSELS SPROUTS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2609688?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[ASPARAGUS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2390911?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[GREEN BEANS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2426624?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PEAS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2030118?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CORN](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2194089?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[MUSHROOM](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2310033?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BEETROOT CHIPS, BEETROOT](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2321499?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Radish, raw](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345323?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Turnip greens and turnips, frozen, unprepared](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/170470?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Parsnips, cooked](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345478?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[RUTABAGA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/577891?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)

**Proteins**
[CHICKEN BREAST](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2187885?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[SALMON](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1028841?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[EGGS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1663044?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[GREEK YOGURT](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2035482?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[TOFU](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2294522?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[LEAN BEEF](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1605879?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[TURKEY BREAST](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2440897?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[COTTAGE CHEESE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2025821?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[SARDINES](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2029597?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[LENTILS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2425458?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[QUINOA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1858805?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BLACK BEANS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2078991?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CHICKPEAS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2068232?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[TUNA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2068771?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Peanut butter](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2343014?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[ALMONDS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2433310?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[MILK](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1909132?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHEY PROTEIN](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/776020?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[PORK CHOPS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2524489?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Soy milk](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2340784?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Tempeh](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/174272?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[SEITAN WHEAT PROTEIN CUBED, SEITAN](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2012995?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)

**Carbohydrates**
[OATS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2020713?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BROWN RICE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2431690?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[QUINOA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1858805?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHOLE GRAIN BREAD](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2070778?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHOLE GRAIN PASTA](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2456103?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[SWEET POTATO](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/477475?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Potato patty](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2345004?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Barley](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2343845?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Buckwheat](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/170286?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Millet](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2343861?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHOLE WHEAT COUSCOUS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2156255?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHOLE WHEAT TORTILLAS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2668934?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHOLE WHEAT BAGELS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2093351?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WILD RICE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/1940942?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BULGUR](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2017935?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[FARRO](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2659627?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[POPCORN](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2105052?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CORNMEAL](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2601092?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[COUSCOUS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2388834?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHITE RICE](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2488703?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[WHITE BREAD](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2456464?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[Pasta, cooked](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2343841?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[BAGELS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2487760?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CEREAL](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2070798?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)
[CRACKERS](/feed/view/#path=https://api.nal.usda.gov/fdc/v1/food/2055557?api_key=bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml)



[Data.world nutrition data for raw fruits, vegetables](https://data.world/adamhelsinger/food-nutrition-information) - from Rakesh

**Food Health and Impacts**
- [3D Force Graph](https://github.com/vasturiano/3d-force-graph) for [Balanced Diets](/balance/)<!--Rakesh, Anshit-->

TO DO: Create 3D Force-Directed Graph mockup for the [Uncovering the Nutritional Landscape of Food](https://www.researchgate.net/figure/The-nutrient-nutrient-network-Each-node-represents-a-nutrient-and-nodes-are-connected_fig4_264826549) visualizations below (we will then contact researches to get data) - In the nutrient-nutrient network. Each node represents a nutrient, and nodes are connected through correlations between abundances of nutrients across all foods. The network is composed of three major groups of nutrients densely connected to one another through positive correlations. 

The shape of each node indicates a hierarchical or ‘taxonomic’ level of a nutrient, from ‘ Highest ’ (a general class of nutrients) to ‘Lowest’ (a specific nutrient). Color and thickness of each link correspond to the sign and magnitude of the correlation, respectively. Seven nutrients are omitted which don’t have significant correlations with any others. We also omit amino acids, because their correlations with other nutrients are very similar to correlations of total protein with others, and thus redundant for visualization.

<a href="../../docs/food/network/img/The-nutrient-nutrient-network-Each-node-represents-a-nutrient-and-nodes-are-connected.png"><img src="../../docs/food/network/img/The-nutrient-nutrient-network-Each-node-represents-a-nutrient-and-nodes-are-connected.png" style="width:100%;max-width:800px;"></a>

<a href="../../docs/food/network/img/The-food-food-network-A-C-Large-scale-to-small-scale-overviews-of-the-network-Each.png"><img src="../../docs/food/network/img/The-food-food-network-A-C-Large-scale-to-small-scale-overviews-of-the-network-Each.png" style="width:100%;max-width:800px;"></a>

