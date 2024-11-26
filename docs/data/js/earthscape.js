// EARTHSCAPE
// A single function that calls multiple visualizations for a dataset

function loadEarthScape(my) {
    loadScript(theroot + 'js/d3.v5.min.js', function (results) {
        waitForVariable('customD3loaded', function () {
            d3.csv(my.dataset).then(function (data) {
                console.log("File loaded " + my.dataset);
                $(document).ready(function () {
                    earthscape_TableDisplay(my, data);
                });
            });
        });
    });
}

function loadEarthScape2(my) {
    loadScript(theroot + 'js/d3.v5.min.js', function (results) {
        waitForVariable('customD3loaded', function () {

            // Initialize an empty array to store the data for each year
            let allData = [];

            // Load data for years 2017 to 2021
            for (let year = 2017; year <= 2021; year++) {
                let dataset = my.dataset.replace(/this_is_year/g, year.toString());
                d3.csv(dataset).then(function (data) {
                    console.log("File loaded " + dataset);
                    // Add the year to each row of data
                    data.forEach(function (row) {
                        row['Year'] = year;
                    });
                    // Add the data for this year to the array
                    allData = allData.concat(data);
                    // Check if this is the last year, then display the table
                    if (year === 2021) {
                        $(document).ready(function () {
                            // Display the table after all years' data is loaded
                            earthscape_TableDisplay2(my, allData);
                        });
                    }
                });
            }
        });
    });
}

// Tabulator grid below diagram
function earthscape_TableDisplay(my, data) {
    console.log("Python file data:");
    console.log(data); // An array of objects
    console.log("Python file columns:");
    //columns = data["columns"];
    //console.log(columns);

    let table = new Tabulator("#" + my.elementID, {
        data: data,
        //layout:"fitColumns",      //fit columns to width of table
        //responsiveLayout:"hide",  //hide columns that dont fit on the table
        //tooltips:true,          //show tool tips on cells
        maxHeight: "300px",        // For frozenRows
        addRowPos: "top",          //when adding a new row, add it to the top of the table
        history: true,             //allow undo and redo actions on the table
        paginationSize: 7,         //allow 7 rows per page of data
        movableColumns: true,      //allow column order to be changed
        //cellHozAlign:"right",   //Not compatible with autoColumns:true
        resizableRows: true,       //allow row order to be changed
        //initialSort:[             //set the initial sort order of the data
        //    {column:"progress", dir:"desc"},
        //],
        autoColumns: true,
        scrollHorizontal: true,
        //columnMinWidth: 300,      //all columns

    });
}


function earthscape_TableDisplay2(my, data) {
    // Group data by Fips code
    let groupedData = groupDataByFips(data);

    // Create a new array to hold the final data
    let finalData = [];

    // Iterate over the grouped data and construct the final data array
    for (let fips in groupedData) {
        let rowData = {
            "Fips": fips,
            "Name": groupedData[fips][0].Name, // Assume the name is the same for all rows with the same Fips
        };

        // Add the UrbanDensity values for each year
        for (let year = 2017; year <= 2021; year++) {
            let urbanDensity = getUrbanDensityForYear(groupedData[fips], year);
            rowData["UrbanDensity" + year] = urbanDensity;
        }

        // Add the row to the final data array
        finalData.push(rowData);
    }

    let table = new Tabulator("#" + my.elementID, {
        data: finalData,
        headerVisible: true,
        maxHeight: "300px",
        addRowPos: "top",
        history: true,
        paginationSize: 7,
        movableColumns: true,
        resizableRows: true,
        scrollHorizontal: true,
        layout: "fitColumns",
        columns: [
            { title: "Fips", field: "Fips" },
            { title: "Name", field: "Name" },
            { title: "2017", field: "UrbanDensity2017" },
            { title: "2018", field: "UrbanDensity2018" },
            { title: "2019", field: "UrbanDensity2019" },
            { title: "2020", field: "UrbanDensity2020" },
            { title: "2021", field: "UrbanDensity2021" },
        ],
    });
}

// Helper function to group data by Fips code
function groupDataByFips(data) {
    let groupedData = {};
    data.forEach(function (item) {
        if (!groupedData[item.Fips]) {
            groupedData[item.Fips] = [];
        }
        groupedData[item.Fips].push(item);
    });
    return groupedData;
}

// Helper function to get UrbanDensity for a specific year
function getUrbanDensityForYear(data, year) {
    let result = data.find(function (item) {
        return item.Year == year;
    });
    return result ? result.UrbanDensity : "";
}



// Function to get multi-location timelines
// For county chart - entityId is geoId of the state, eg, geoId/06 for California
// TO DO - Make genertic by making county interchangable with country, state and zip code datasets.

async function getTimelineChart(chartVariable, entityId, showAll, chartText) {
    // Fetch all geoIds for counties
    const response = await fetch(`https://api.datacommons.org/v2/observation?key=AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI&entity.expression=${entityId}%3C-containedInPlace%2B%7BtypeOf%3ACounty%7D&select=date&select=entity&select=value&select=variable&variable.dcids=${chartVariable}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "dates": ""
        })
    });
    const data = await response.json();

    // Use the geoId list to fetch respective county + state names
    const geoIds = Object.keys(data.byVariable[chartVariable].byEntity);
    const response2 = await fetch('https://api.datacommons.org/v2/node?key=AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nodes": geoIds,
            "property": "->[containedInPlace, name]"
        })
    });
    const data2 = await response2.json();

    // Put county info together
    const countyData = {};
    Object.keys(data2.data).forEach(geoId => {
        node = data2.data[geoId].arcs;
        stateName = node.containedInPlace.nodes[0]['name'];
        countyName = node.name.nodes[0]['value'];
        countyData[geoId] = {
            name: countyName,
            state: stateName
        };
    })

    // Fetch observational data using geoIds list
    const url = `https://api.datacommons.org/v2/observation?key=AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI&variable.dcids=${chartVariable}&${geoIds.map(id => `entity.dcids=${id}`).join('&')}`
    const response3 = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "date": "",
            "select": ["date", "entity", "value", "variable"]
        })
    })
    const data3 = await response3.json();

    // Format data
    const formattedData = [];
    for (const geoId in countyData) {
        formattedData.push({
            county: `${countyData[geoId].name}, ${countyData[geoId].state}`,
            observations: data3.byVariable[chartVariable].byEntity[geoId].orderedFacets[0]['observations']
        })
    }

    // Get unique years
    let yearsSet = new Set();
    formattedData.forEach(county => {
        county.observations.forEach(obs => {
            yearsSet.add(obs.date);
        });
    });
    const years = [...yearsSet].sort((a, b) => a - b);
    
    // Showing all or top 5 or bottom 5
    let selectedData;
    formattedData.forEach(county => {
        county.averageLandCover = county.observations.reduce((sum, obs) => sum + obs.value, 0) / county.observations.length;
    });
    if (showAll == 'showTop5') {
        selectedData = formattedData.sort((a, b) => b.averageLandCover - a.averageLandCover).slice(0, 5);
    } 
    else if (showAll == 'showBottom5') {
        selectedData = formattedData.sort((a, b) => a.averageLandCover - b.averageLandCover).slice(0, 5);
    }
    else {
        selectedData = formattedData;
    }

    // Get datasets
    const datasets = selectedData.map(county => {
        return {
            label: county.county,
            data: years.map(year => {
                const observation = county.observations.find(obs => obs.date === year);
                return observation ? observation.value : null;
            }),
            borderColor: 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')',
            backgroundColor: 'rgba(0, 0, 0, 0)',
        };
    });

    const datasets1 = selectedData.map(county => {
        return {
            label: county.county,
            data: years.map(year => {
                const observation = county.observations.find(obs => obs.date === year);
                return observation ? observation.value : null;
            }),
            backgroundColor: 'rgba(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ',0.2)',
            borderColor: 'rgba(0,0,0,0)',
            fill: true
        };
    });

    const config = {
        type: 'line',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: chartText
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: chartText
                    }
                }
            }
        }
    };

      const data1 = {
        labels: years,
        datasets: datasets1
      };

    const config1 = {
            type: 'line',
            data: data1,
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: (ctx) => 'County Populations'
                },
                tooltip: {
                  mode: 'index'
                },
              },
              interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
              },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Years'
                }
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: 'County Population'
                } 
              }
            }
            }
    }

    // Delete chart if it already exists
    if (timelineChart instanceof Chart) {
        timelineChart.destroy();
    }
    const ctx = document.getElementById('timelineChart').getContext('2d');
    timelineChart = new Chart(ctx, config);

    if (lineAreaChart instanceof Chart) {
        lineAreaChart.destroy();
    }
    const ctx1 = document.getElementById('lineAreaChart');
    lineAreaChart = new Chart(ctx1, config1);
}
