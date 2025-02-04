[UN Goal Timelines](../../) - [Data Commons](../)

# Goal #1: Great Jobs

## Data Commons API via Javascript

[Timeline charts using the GDC Javascript API](/data-commons/docs/data/).

<!--
Using [Javascript](../../docs/jobs/) and [NodeJS](../../dist/jobs/) to call Google Data Commons API.
-->

You can find the DCID and property value using:

- [Data Commons Google Sheets add-on](https://docs.datacommons.org/api/sheets/)
- [Data Commons Place Browser](https://datacommons.org/place)
- [Data Commons StatVar Browser](https://datacommons.org/tools/statvar)
- [Data Commons Browser](https://datacommons.org/browser/)

[Based on REST API v2/observation example 3](https://docs.datacommons.org/api/rest/v2/observation)

<!--
DCID Examples: geoId/13, PowerPlant, Count\_Jobs\_EconomicDevelopmentAdministration\_JobsCreated
-->

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 20px;
  padding: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

label {
  display: block;
  margin: 10px 0;
}

input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

#resultContainer {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.suggestion-container {
  margin-top: 5px;
}

.suggestion-bubble {
  display: inline-block;
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid white; /* Changed border color to white */
}

.suggestion-bubble:hover {
  background-color: yellow;
}
.bottomInput {
  background-color: #ccc;
  padding: 18px;
  /*
  position: fixed;
  right: 0;
  top: 0;
  */
}
</style>

<div style="background-color: #ddd; padding:20px; font-size:16px;">

<a href="https://github.com/modelearth/data-commons" style="float:right">Fork our repo to edit</a>

TO DO: Add intuitive dropdown menus for selecting properties.<br><br>

NOTE: Including a <a href="https://docs.datacommons.org/api/rest/v2#relation-expressions" target="relexp">Relation Expression</a> (property value) currently calls v2/node API.  Add a dropdown for switching the API.<br><br>


<b>Parent to children</b><br>

<span style="font-size:20px;font-family: var(--monospace);">-&gt;&ast;</span> means an 'out' arc with all the properties (children) linked to this node.<br><br>

<b>Child to parent</b><br>
<span style="font-size:20px;font-family: var(--monospace);">&lt;-</span> means an 'in' arc of a child to it's parent nodes.

</div>

<div class="bottomInput">

<!-- Hid these until javascript modified -->
<!--
<div>
  <label for="dcidInput">Enter DCID:</label>
  <div class="suggestion-container" id="dcidSuggestions">
    <span class="suggestion-bubble">geoId/06</span>
    <span class="suggestion-bubble">Count_Jobs_EconomicDevelopmentAdministration_JobsCreated</span>
    <span class="suggestion-bubble">geoId/13</span>
   
  </div>
  
</div>

<div>
  <label for="propertyInput">Enter Property:</label>
  <div class="suggestion-container" id="propertySuggestions">
    <span class="suggestion-bubble"><-</span>
    <span class="suggestion-bubble">-></span>
    <span class="suggestion-bubble">->*</span>
    <span class="suggestion-bubble">->[nearbyPlaces,landArea]</span>
  </div>
  
</div>
-->

<div>
<b>variable.dcids:</b> Count_Person, Count_Farm, LandCoverFraction_Forest<br><br>
</div>

<div style="float:left">
Variable DCIDs:<br>
<input type="text" id="dcidInput" style="min-width:200px;" placeholder="e.g., geoId/13" value="LandCoverFraction_Forest">
</div>

<div style="float:left;"><!-- show when not timeline which used v2/observation API -->
Property (v2/node)<br>
<input type="text" id="propertyInput" style="font-family: var(--monospace);" placeholder="" value="">
</div>

<div style="float:left; padding-left:10px; padding-top:13px">
<button id="loadDataButton" style="float:left;margin-right:10px">View Data</button>
<button id="downloadButton" style="float:left;background-color:#999;">Download</button>
</div>

<div style="clear:both;"></div>
<button id="feedplayerButton" style="float:right;margin-right:10px;background-color:darkblue;margin-top:0px">Feed Player</button>
<div style="overflow:auto;padding-right:6px">
<textarea rows="3" type="text" id="apiURL" class="textInput" style="line-height:22px;font-size: 14px;width:100%;max-width:1000px;color:#555;background-color:rgba(0, 0, 0, 0);border:1px solid #fff;min-height:100px" placeholder="API URL" value="" autofocus onfocus="this.select()"></textarea>
</div>

<div style="clear:both"></div>

</div>


<div id="resultContainer" style="max-height:400px;overflow-y:scroll;">JSON Output from Google Data Commons API</div>
<br>

<!--
### API Examples

**To find the properties related to `geoId/06`**  
Display a list of properties using the symbol `->`.

    DCID: geoId/06
    Property: ->


**To display all the properties of JobsCreated**  
Display all values of its properties using `->*` to indicate all records.

    DCID: Count_Jobs_EconomicDevelopmentAdministration_JobsCreated
    Property: ->*


**To display `nearbyPlaces` and `landArea` of Georgia**  
Pass a list in the properties column.

    DCID: geoID/13
    Property: ->[nearbyPlaces, landArea]
-->

## NodeJS

Yarn Build into [dist/jobs folder](../../dist/jobs/)

The client-side version of the following resides within [docs/jobs/index.html](../../docs/jobs/) and uses  
[components/data-loader-earth.js](../../docs/components/data-loader-earth.js).

<!--
The following is only functional when built into the "dist" repo. [View built version](../../dist/jobs/).
-->

```js
  function addSuggestionToInput(suggestion, inputId) {
    document.getElementById(inputId).value = suggestion;
  }

  // TO DO - Avoid use of event.target.parentNode

  // Event listeners for suggestion bubbles
  document.querySelectorAll('.suggestion-bubble').forEach(item => {
    item.addEventListener('click', event => {
      // Get the suggestion bubble text
      const suggestion = event.target.innerText;
      // Get the corresponding input field id
      const inputId = event.target.parentNode.nextElementSibling.id;
      // Add suggestion to the input field
      addSuggestionToInput(suggestion, inputId);
    });
  });

  // Sends file to dist/_import/components/data_loader.081307e4.js
  import {loadDataCommons,displayJsonData} from "../components/data_loader.js";

  document.getElementById('loadDataButton').addEventListener('click', () => {
    loadData();
  });
  function loadData() {
      const apiKey = 'AIzaSyCTI4Xz-UW_G2Q2RfknhcfdAnTHq5X5XuI';
      const dcidInput = document.getElementById('dcidInput').value;
      const propertyInput = document.getElementById('propertyInput').value;

      console.log('DCID:', dcidInput);
      console.log('Property:', propertyInput);

      loadDataCommons(apiKey, dcidInput, propertyInput).then(data => {
          console.log(data);
          displayJsonData(data);
      }).catch(error => {
          console.error('Error loading data:', error);
      });
  }
  loadData();

  // This code is also duplicated in index.html
  document.getElementById('feedplayerButton').addEventListener('click', () => {
    const apiURL = document.getElementById('apiURL').value;
    window.location = "/feed/view/#path=" + apiURL.replace(/&/g, encodeURIComponent("&"));
  });
  // Download JSON button click event
  document.getElementById("downloadButton").addEventListener("click", function() {
    const resultData = document.getElementById("resultContainer").textContent;
    const data = "data:text/json;charset=utf-8," + encodeURIComponent(resultData);
    const downloadButton = document.createElement("a");
    downloadButton.setAttribute("href", data);
    downloadButton.setAttribute("download", "data.json");
    downloadButton.click();
  });
```
