[Data Pipeline](../data-pipeline/)
# UN Goal Timelines

[Our Development Folders (docs)](docs/) and [Built Output (dist)](dist/)

[Google UN Data Commons Nav for API](https://datacommons.org/tools/statvar#s=dc%2Fs%2FUnitedNationsUn&d=dc%2Fd%2FUnitedNationsUn_SdgIndicatorsDatabase) - Widen your screen to explore root of 17 UN Goals.  
Display 21 "GOALS" in our left navigation by turning on "Dev Mode" under Settings in the upper right.

## Projects

TO DO: Generate timeline data from Google Data Commons - See our [Data Commons Timelines CoLab](https://colab.research.google.com/drive/1PF8wojIOHxDCdmadsAdkpHnb-An1ymEh?usp=sharing)

TO DO: Load the UN Goals nav tree with Python via the GDC API, save as a json file. Create a clean hierarchy with only 2 or 3 levels. Narrow to data usable in visualizations. The Colab above might use this process.

TO DO: Use the upcoming timeline CSV files in docs/innovation data with an [Observable Data Loader](https://observablehq.com/framework/loaders). See our [Weather Data Loader notes](docs/air/). 

TO DO: Display our [US Industry Timelines](../data-pipeline/timelines/) within the same timeline display process.

<!--[worldbank.org indicators](https://github.com/phiresky/world-development-indicators-sqlite/)-->

<!--
	TO DO: Display all 17 Global Goal indicator lines on one large 30-year timeline chart with projections.<br><br>
-->

[More Active Projects](/projects)


## Making Updates

After [creating your webroot](../../localsite/start/steps/) and pulling down [data-commons](https://github.com/modelearth/data-commons), edit pages and build your static site to update the local "dist" folder.

	cd data-commons
	yarn build	

Visit the following to view built: <http://localhost:8887/data-commons/dist> and source <http://localhost:8887/data-commons/docs>  
The "dist" folder is only deployed live by Loren to avoid file conflicts.

## UN Sustainable Development Goals</h2>

[UN Data Commons: SDG Data by Goal](https://unstats.un.org/UNSDWebsite/undatacommons/sdgs)
The UN Sustainable Development Goals (SDG) data resides in the [Google Data Commons API](https://docs.datacommons.org/api/).

[Blog: Google Data Commons API for UN Global Goals](https://blog.google/technology/ai/google-ai-data-un-global-goals/)

<!-- https://globalgoalsmarks.org/app/ -->
<a href="https://www.globalgoals.org/goals/">About the 17 Global Goals</a> - <a href="https://www.globalgoals.org/news/">Latest Goal News</a> - <a href="https://worldslargestlesson.globalgoals.org/">World's Largest Lesson</a>

[UN Comtrade Data Pull](/data-pipeline/international/comtrade) and [Intergovernmental Panel on Climate Change (IPCC)](https://www.ipcc.ch) - The UN body for climate change data assessments.

<img src="docs/components/img/goals.png" style="width:100%; max-width:1200px;"><br>
TO DO: Replace the above image with linked images and interactivity by finding a GitHub repo containing UN Goal marketing material, including icons and related images.<br><br>



## Install and Build Locally

This is an [Observable Framework](https://observablehq.com/framework) project. 
Run once daily when you start - updates dependencies defined in [package.json](package.json):

	yarn install

To build - this pulls from APIs and outputs from "[docs](docs)" to static files in "[dist](dist)":

	yarn build

The following is an alternative to using `yarn dev` (which you'd use if only viewing dist)

This setup allows you to view multiple repos in one webroot.
If you haven't yet, start an http server in your webroot, external to the data-commons folder.

	cd ../ && python -m http.server 8887

If you haven't yet, pull down the [localsite repo](https://github.com/modelearth/localsite).
This provides navigation when you view src files in the "[docs](docs)" folder.

	git clone https://github.com/modelearth/localsite localsite &&
	cd data-commons

Then visit the following to view:
<http://localhost:8887/data-commons/dist>
<http://localhost:8887/data-commons/docs>

Turn on GitHub Pages for both repos so we can preview changes.


For more, see <https://observablehq.com/framework/getting-started>.

## Project structure

In our project, folders for components and data reside in multiple "goal" folders.
Add the [localsite repo](https://github.com/modelearth/localsite/) external to the [data-commons repo](https://github.com/modelearth/data-commons/). Your [webroot setup](https://model.earth/localsite/start/steps/) with 2 folders:

```ini
localsite
data-commons
├─ README.md
├─ docs
│  ├─ space
│  │  ├─ components
│  │  │ 	└─ timeline.js     # an importable module
│  │  ├─ data
│  │  │ 	└─ events.json     # a static data file
│  │  └─ launches.csv.js       # a data loader
│  ├─ jobs
│  ├─ transit
│  ├─ innovation
│  ├─ education
│  ├─ economy
│  ├─ index.html               # a localsite page visible in docs
│  └─ index.md                 # a dist page
├─ dist
├─ observablehq.config.ts      # the project config file
├─ package.json
└─ .gitignore
```

**`docs`** - This is the “source root” — where your source files live. Pages go here. Each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/routing), which means that the name of the file controls where the page is served. You can create as many pages as you like. Use folders to organize your pages.

**`docs/index.md`** - This is the home page for your site. You can have as many additional pages as you’d like, but you should always have a home page, too.

**`docs/data`** - You can put [data loaders](https://observablehq.com/framework/loaders) or static data files anywhere in your source root, but we recommend putting them here.

**`docs/components`** - You can put shared [JavaScript modules](https://observablehq.com/framework/javascript/imports) anywhere in your source root, but we recommend putting them here. This helps you pull code out of Markdown files and into JavaScript modules, making it easier to reuse code across pages, write tests and run linters, and even share code with vanilla web applications.

**`observablehq.config.ts`** - This is the [project configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the project’s title.

## Command reference

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `yarn install`    | Install or reinstall dependencies. Same as just `yarn`   |
| `yarn dev`        | Start local preview server                               |
| `yarn build`      | Build your static site, generating `./dist`              |
| `yarn deploy`     | Deploy your project to Observable                        |
| `yarn clean`      | Clear the local data loader cache                        |
| `yarn observable` | Run commands like `observable help`                      |
