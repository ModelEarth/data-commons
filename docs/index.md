[UN Goal Timelines](../)
# Data Commons

We're automating [multi-country timelines](data) using [Google's UN Goals Data](https://datacommons.org/tools/statvar#s=dc%2Fs%2FUnitedNationsUn&d=dc%2Fd%2FUnitedNationsUn_SdgIndicatorsDatabase) (widen browser to see nav on left).

Our javascript [Feed Player](/feed/view/#feed=gdc) loads and displays data from the Google Data Commons API.

## Goal Visualization

The [UN's seventeen 30-year goals](/data-pipeline/international/), plus five subsets of Goal 9: Innovation.

<span style="color:#999">★</span> [Groundwater Recharged](water)
1\. [Great Jobs](jobs)
2\. [Healthy Food](food)
3\. [Excellent Health](health)
4\. [Quality Education](education)
5\. [More Opportunities](opportunities)
6\. [Clean Water](water)
7\. [Clean Energy](energy)
8\. [Vibrant Economies](economy)
9\. [Local Innovation](innovation)
10\. [Open and Inclusive](open)
11\. [Biodiverse Development](biodiversity)
12\. [Restoring Treecover](conservation)
13\. [Air and Climate](air)
14\. [Aquatic Life](aquatic)
15\. [Abundant Wildlife](wildlife)
16\. [Peace and Justice](peace)
17\. [Partnerships](partners)
18\. [Balanced Budgets](balanced)
19\. [Fast Reliable Transit](transit)
20\. [High Speed Internet](internet)
21\. [More Livable Zones](space)


TO DO: Pull a simplified hierarchy from Google consisting of timeline data feeds. [GDC Python API samples](https://docs.datacommons.org/tutorials/)
One of our UX goals is to avoid deep [hierarchy levels](https://datacommons.org/tools/statvar#s=dc%2Fs%2FUnitedNationsUn&d=dc%2Fd%2FUnitedNationsUn_SdgIndicatorsDatabase&sv=sdg%2FSI_POV_EMP1.AGE--Y15T24) by using simple [navigation filters](#geoview=countries) instead.

Identify titles for data with country timelines in the [UN Data Commons (unstats.un.org)](https://unstats.un.org/UNSDWebsite/undatacommons/sdgs) created by Google.

[Our Air and Climate section](air) has sample Python and an [emissions timeline chart](/data-commons/dist/air/emissions/emission.html).
Check out how we use titles with the API call for our upcoming [Forest Coverage timeline](conservation).

In [Google's Statistical Variable Explorer](https://datacommons.org/tools/statvar) you can filter by date and location on more than 10,000 statistical variables.


Here are our two CoLabs for the Google Data Commons API:
1. [GDC-API-Caller CoLab](https://colab.research.google.com/drive/1phXc8z9IwmG9w83JTU4pXRv6XAV9a8BB?usp=sharing) - Directly calls the Google Data Commons API<!--Anna-->  
2. [GDC-Parameters CoLab](https://colab.research.google.com/drive/1mZC2Pn4oKau9Sz1Q16_qnOK7Tai09uEo?usp=sharing) - Sends parameters to our caller, then works with fetched json data<!--Paul-->

<!--
Copy the GDC-Parameters CoLab and rename it in your goal folder: GDC-Parameters-Air, etc.
-->

TO DO: Call the python CoLabs from Javascript in a webpage using REST.


[The Python Data Loaders](https://docs.datacommons.org/tutorials/) require running in advance.  
We're using Javascript to load in real-time using a single timeline widget.

TO DO: Find a means to load DCID and property in JavaScript. Handle different JSON structures, which is not an issue when using the Python libraries, as can be seen in this [CoLab&nbsp;for&nbsp;Census&nbsp;Data](https://colab.research.google.com/github/datacommonsorg/api-python/blob/master/notebooks/analyzing_census_data.ipynb).


**Our Universal Filter Menus:**  
Age  
Income  
Gender  
Education  
<!--
The gender filter options could be:
- Male and Female (two lines)
- Female Only
- Male Only
- Combined (one line)
-->
<style>
table {
    display: block;
    width: 100%;
    width: max-content;
    max-width: 100%;
    overflow: auto;
    border: 1px solid #ccc;
}
table th {
	text-align: left;
	font-size: 16px;
	padding: 6px;
	border-bottom: 1px solid #ccc;
}
table td {
	padding: 6px;
}
</style>

## Commands

You'll use `yarn build` the most.  
`yarn dev` invokes https which requires installing a cert locally. (Ugh)

Instead, after you've run `python -m http.server 8887` in your webroot, view at:

[http://localhost:8887/data-commons/docs](http://localhost:8887/data-commons/docs/)  
[http://localhost:8887/data-commons/dist](http://localhost:8887/data-commons/dist/)


| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `yarn install`    | Install or reinstall dependencies. Same as `yarn`        |
| `yarn dev`        | Start local preview server                               |
| `yarn build`      | Build your static site, generating `./dist`              |
| `yarn deploy`     | Deploy your project to Observable                        |
| `yarn clean`      | Clear the local data loader cache                        |
| `yarn observable` | Run commands like `observable help`                      |

<br>
When running "yarn build" the content of the docs folder is built into the dist folder.  The dist folder gets deleted each time the build is run. ("npm run build" is the equivalent cmd to use when the repo wasn't initiated with a yarn.lock file.) 

Note that deployment of /dist is prevented within .ignore to avoid merge conflicts.

index.html does not get built to dist. We add index.html to repos so we can insert localsite.js navigation. Sometimes we also put standard html in the index.html file, especially if it's not working in the build to dist.

Placing a span or div tag around the GDC-embeds in index.md allows them to work in the built dist output.

We can probably auto-build to dist when deploying to GitHub.
Try using the deploy.js sample Mike Bostock posted:
https://github.com/observablehq/framework/discussions/1030

[Our Setup Notes](../) &nbsp;|&nbsp; [Feed Player](/feed/view/#feed=gdc)
