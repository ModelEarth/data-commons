# Data Retrieval and Processing Overview

## I. Fetch Scope

To start, you can fetch all zip codes, counties, states, and countries using the provided code snippets. The returned places will include their respective 'dcid' identifiers. Depending on your use case, you may need to reformat these identifiers.

### FIPS Codes Overview

- **State FIPS Codes:** Two-digit codes that uniquely identify each U.S. state and territory.
  - Example: `01` is the FIPS code for Alabama.
  - Example: `06` is the FIPS code for California.

- **County FIPS Codes:** Five-digit codes where:
  - The first two digits represent the state FIPS code.
  - The next three digits represent the county code within that state.
  - Example: `01001` is the FIPS code for Autauga County, Alabama (`01` for Alabama and `001` for Autauga County).

### Identifier Formats for Retrieved Data

- **Zipcodes:** Returned in the format `'zip/02908'`.
- **Counties:** Returned in the format `'geoId/01001'`.
- **States:** Returned in the format `'geoId/01'`.
- **Countries:** Returned in the format `'country/ABW'` (ISO 3166-1 alpha-3 code, e.g., `ABW` for Aruba).

### Get Methods

- `get_states()`: Fetches the list of states.
- `get_counties()`: Fetches the list of counties.
- `get_zipcodes()`: Fetches the list of zip codes.
- `get_countries()`: Fetches the list of countries.

## II. Fetch Target

In this section, we will retrieve target variables using the `datacommons_pandas` package. This approach is organized and straightforward, as we have all the necessary DCIDs for the places within our specified scope. The main method used is `fetch_data_and_process_dpd(places, target_variable_dcid, api_key, threshold=0.8)`, where the threshold parameter defaults to 20% but can be adjusted according to your needs. Depending on specific requirements, additional steps may be needed to clean and transform the DataFrame.

The resulting DataFrame will include the following columns:

- **PlaceDCID**
- **PlaceName**
- **Target** (0/1): This column contains the classified value.
- **Variable_DCID**: For instance, 'Count_Person', which contains the raw value.

The target variable is classified based on a threshold that defaults to 20%:

- **0** for values below the top 20%
- **1** for values in the top 20%

To meet different needs, you can easily create a new DataFrame with only the desired columns.

## III. Appendix

Fetch zip-code data using the REST v2 API. This method is now deprecated and is included for reference only.

---

**Important Note:** Always start by fetching the places within your specified scope, and then use the relevant fetch methods to obtain the corresponding data.

## IV. How to Use the `scope_data_utils.py`

The `scope_data_utils.py` module provides a set of utility functions for fetching and processing geographical data using the Google Data Commons API. This module allows users to classify target values based on specified thresholds and retrieve in-arcs for various geographic scopes, including zip codes, counties, states, and countries.

### 1. Installation

Before using the module, ensure you have the required packages installed. You can install them via pip:

```bash
pip install requests pandas datacommons_pandas
```

### 2. Importing the Module

To use the functions in `scope_data_utils.py`, import the module in your Python script or Jupyter Notebook:

```python
from scope_data_utils import (
    fetch_data_and_process_dpd,
    get_zipcodes,
    get_counties,
    get_states,
    get_countries,
)
```

### 3. Example Usage

```python
import requests
from scope_data_utils import fetch_data_and_process_dpd, get_zipcodes

# Set your API key
api_key = 'YOUR_API_KEY'

# Fetch zip codes
zipcodes = get_zipcodes(api_key)

# Process data for a specific target variable
target_variable_dcid = 'YOUR_TARGET_VARIABLE_DCID'
data_df = fetch_data_and_process_dpd(zipcodes, target_variable_dcid, api_key)

# Display the processed data
print(data_df.head())
```
