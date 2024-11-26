[Air and Climate](../)

# Weather

## Prerender api.weather.gov with .js

Saves a file when Observable builds using data/forecast.json.js.  
Added "async function fetchData()" since "display (forecast)"" returned "Promise{}"

```js

const url = "https://model.earth/localsite/js/localsite.js?showheader=true&showsearch=true";
console.log("loadScript seeking: " + url);
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = url;
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

// Important: Remove ".js" from forecast.json.js below:
// Pre-render json from the .js file into dist _file/air/data
//const apiWeatherForecast = "data/forecast.json"
//const forecast = FileAttachment(apiWeatherForecast).json();

//display (forecast); // BUG: Displays: Promise {}
//display (temperaturePlot(forecast));

async function fetchData() {
    const forecast = await FileAttachment("data/forecast.json").json()
    .then(response => {
      console.log("got it")
      display(temperaturePlot(response));
    })
    .catch(error => {
        console.error('Error fetching forecast data:', error);
        //return null; or handle the error appropriately
    });
    // return forecast;
}
fetchData();

function temperaturePlot(data, {width} = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: {type: "utc", ticks: "day", label: null},
    y: {grid: true, inset: 10, label: "Degrees (F)"},
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  });
}


/*
display(
  Plot.plot({
    title: "Hourly temperature forecast",
    x: {type: "utc", ticks: "day", label: null},
    y: {grid: true, inset: 10, label: "Degrees (F)"},
    marks: [
      Plot.lineY(forecast.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  })
);
*/
```
