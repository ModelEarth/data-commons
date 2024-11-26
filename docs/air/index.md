[Data Commons](../)

# Air and Climate

Goal 13. Greenhouse Gas Reduction Climate Action

## International Emissions Time

<!--
Pointing timeline link at https://model.earth because 
/emission.html gets shortened to /emission in dist folder, 
which does not work with python localhost. 
TO DO: Add steps for installing https cert to run: npx http-server
https://model.earth/localsite/start/steps/
-->

[View Emissions Timeline](https://model.earth/data-commons/dist/air/emissions/emission.html) - [View Code](../../docs/air/emissions/) on [GitHub](https://github.com/ModelEarth/data-commons/blob/main/docs/air/emissions/emission.md)

## Embedded Stacked Plot for Multiple Country Codes:

```html
<div id="observablehq-13ca3fe9"></div>
<p>Credit: <a href="https://observablehq.com/@me-test/plot-stacked-plots">Plot: Stacked Plots based on the country codes found in the DCID</a></p>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@observablehq/inspector@5/dist/inspector.css">
<script type="module">
  import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@5/dist/runtime.js";
  import define from "https://api.observablehq.com/@me-test/plot-stacked-plots.js?v=4";
  new Runtime().module(define, Inspector.into("#observablehq-13ca3fe9"));
</script>
```


## Weather Data Loader

[View Weather Forecast](../../dist/air/weather) - Caches data from api.weather.gov.&nbsp; [View our Javacript](https://github.com/ModelEarth/data-commons/blob/main/docs/air/weather/index.md)

To refresh the weather forecast, delete the file at: dist/\_file/air/weather/data/forecast.867a89c9.json, then `yarn build`


## Python for Google Data Commons API

[Our CoLab for emission timelines](https://colab.research.google.com/drive/1mZC2Pn4oKau9Sz1Q16_qnOK7Tai09uEo#scrollTo=2gMBtmu1MGfq&line=19&uniqifier=1) - Loads from GDC API with Python - Paul

Learn about [Datacommons.org API used in Python](https://docs.datacommons.org/api/python/)

TO DO: Document how we invoke our CoLab with REST JSON for Web interactivity.


## Building json and Fetching with Data Loader

[Observable data loaders](https://observablehq.com/framework/loaders) 

Javascript and python [Data Loader samples from Observable](https://observablehq.com/framework/getting-started#next-steps).

The javascript fetches json with this cmd

  node docs/air/data/forecast.json.js

The python requires running "python" external to Observable build.

  python docs/air/data/forecast.json.py

Python cannot be built from the `yarn build` &nbsp;node.js cmd, but it can be run directly using the command above, or within GitHub Pages or through a Google CoLab API.

<br>

## Embed of GDC Component

Placed in a span or div tag for [built version](../../dist/air/).

<span>
<script src="https://datacommons.org/datacommons.js"></script>
<datacommons-line  header="Population for USA, India, and China" places="country/USA country/IND country/CHN" variables="Count_Person">Chart not visible until built.</datacommons-line>
</span>
<span style="font-size: 11px;">
<a href="https://docs.datacommons.org/api/web_components/">Data Commons Web Components</a> - 
<a href="https://docs.datacommons.org/api/web_components/line">Line Chart Web Component</a>
</span>

## More

[Paul's How To](https://docs.google.com/document/d/1Xn5LCwlf8hEGsfJ_mAZEfLtNLopSGIeTJkMn90_RzQ8/edit?usp=sharing) - under development. We also need a javascript version.

