import { csvParse, csvFormat } from "d3-dsv";
import { range } from "d3-array";

// Function to fetch and return text content from a given URL
async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

// Assuming your CSV data URL
const csvDataUrl = "./data/emission_country.csv";

// Fetch and parse emission data.
const rawCsvData = await fetchText(csvDataUrl);
const emissionData = csvParse(rawCsvData);

// Skip the first three rows (metadata or headers)
const relevantEmissionData = emissionData.slice(4);

// Create a range of years for the time series data (1960-2023)
const years = range(1960, 2024);

// Transform the data into the desired format for D3 visualization
const transformedData = relevantEmissionData.map(d => {
  // Map each row to a new object with country name, code, and time-series values
  const countryData = {
    name: d['Country Name'],
    code: d['Country Code'],
    emissions: years.map(year => ({
      year: year,
      value: +d[year] || 0 // Convert to number and handle missing data as 0
    }))
  };
  return countryData;
});

// Optionally, you can convert the transformed data back to CSV if needed
const csvOutput = csvFormat(transformedData.flatMap(d =>
  d.emissions.map(e => ({
    CountryName: d.name,
    CountryCode: d.code,
    Year: e.year,
    EmissionValue: e.value
  }))
));

console.log(csvOutput);
