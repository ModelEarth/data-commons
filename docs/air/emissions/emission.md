# Emission Reports

**View data formats**  
[API_EN.ATM.CO2E.PC_DS2_zh_csv_v2_45186.csv](https://github.com/ModelEarth/data-commons/blob/main/docs/air/emissions/data/API_EN.ATM.CO2E.PC_DS2_zh_csv_v2_45186.csv) - below  
[emission.csv](https://github.com/ModelEarth/data-commons/blob/main/docs/air/emissions/data/emission.csv) - has gap, more decline  

```js
//const emissionData = FileAttachment("data/emission.csv").csv({typed: true});
const emissionData = FileAttachment("data/API_EN.ATM.CO2E.PC_DS2_zh_csv_v2_45186.csv").csv({typed: true});
```
```js
display(emissionData)
```

```js
function transformEmissionData(emissionData) {
  // Initialize the transformed data array
  let transformedData = [];
  
  // Define the range of years you're interested in
  // Assuming you start from 1990 since your data seems to have valid entries from then
  const startYear = 1990;
  const endYear = 2023; // Adjust based on your needs
  const years = Array.from({length: endYear - startYear + 1}, (v, k) => k + startYear);

  // Create a template object for each year
  years.forEach(year => {
    let yearData = {year: year};
    
    // Populate the year object with emission data from each country
    emissionData.forEach(countryData => {
      const emissionValue = countryData[year];
      // Check if the emission data for the year exists; if not, you might skip or set a default
      if (emissionValue !== null && emissionValue !== undefined) {
        const countryCode = countryData['Country Code']; // Or use 'Country Code' if preferable
        yearData[countryCode] = emissionValue;
      }
    });
    
    // Add the populated year object to the transformed data array
    transformedData.push(yearData);
  });
  
  return transformedData;
}

```

```js
const transformedEmissionData = transformEmissionData(emissionData);
```

```js
display(transformedEmissionData)
```

```js
// Assuming `transformedEmissionData` is the output from the previous transformation,
// and D3 library is already included in your environment.

// 1. Determine keys: all country names, assuming they are consistent across all years.
// If your data structure ensures all years have the same countries, you can just take the keys from the first year.
let keys = Object.keys(transformedEmissionData[0]).filter(key => key !== 'year');

// If your environment supports dynamic imports or if d3 is already in scope, you can proceed with the stack.
// Otherwise, ensure d3 is correctly imported and accessible here.

// 2. Prepare the data for D3 stack.
// Ensure the data is in an array of objects format, each representing a year.
let dataReadyForStack = transformedEmissionData; // This assumes data is already in the correct format.

// 3. Apply D3 stack
let series = d3.stack()
  .keys(keys)
  .offset(d3.stackOffsetExpand) // This normalizes the stack.
  (dataReadyForStack);

display(series)
```

```js
```

```js
const continentRank = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America"
];

```

```js
async function countryByContinent() {
  // URL to your CSV data source
  const url = "https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.csv";
  
  // Fetching and parsing the CSV data
  const data = await d3.csv(url);

 // Creating a map where each country ('code') is associated with its 'region'
  return new Map(data.map(d => [d['alpha-3'], d['region']]).filter(([code, region]) => region && region.trim().length > 0));

}

countryByContinent().then(map => console.log(map));
```

```js
const countryContinentMap = await countryByContinent();
function emissionChart(transformedEmissionData, {width}) {
  // Prepare the data - assuming transformedEmissionData is ready for plotting
  // For example, let's plot the total emissions per continent over the years
  
  // Aggregate emissions data by continent
  const dataByContinent = transformedEmissionData.map(yearData => {
    const output = {year: yearData.year};
    for (const country of Object.keys(yearData).filter(k => k !== 'year')) {
      const continent = countryContinentMap.get(country);
      if (!output[continent]) output[continent] = 0;
      output[continent] += yearData[country];
    }
    return output;
  });

  // Flatten data for Plot
  const flatData = [];
  dataByContinent.forEach(yearData => {
    for (const [continent, value] of Object.entries(yearData).filter(([k, v]) => k !== 'year')) {
      flatData.push({year: yearData.year, continent, value});
    }
  });

  return Plot.plot({
    title: "Emission by Continent Over Years",
    width,
    height: 300,
    marginLeft: 50,
    x: {
      label: "Year →",
      domain: transformedEmissionData.map(d => d.year),
      grid: true
    },
    y: {
      label: "Emissions →",
      grid: true
    },
    color: {
      legend: true
    },
    marks: [

      Plot.areaY(flatData, {x: "year", y: "value", fill: "continent", title: "continent"}),
      Plot.ruleY([0])
    ]
  });
}

```

<div class="grid grid-cols-1">
  <div class="card">
    ${resize((width) => emissionChart(transformedEmissionData, {width}))}
  </div>
</div>

```js
display("This is Co2 Emission data")
```