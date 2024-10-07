import requests
import pandas as pd
import datacommons_pandas as dcpd
import urllib

def classify_target(raw_value: float, threshold_val: float):
    """Classify the raw value based on the specified threshold.

    Parameters:
    - raw_value: The value to classify.
    - threshold_val: The threshold value to compare against.

    Returns:
    - 1 if raw_value is greater than or equal to threshold_val, else 0.
    """
    return 1 if raw_value >= threshold_val else 0

def fetch_data_and_process_dpd(places, target_variable_dcid, api_key, threshold=0.8):
    """
    Fetch and process data for the specified places and target variable.

    Parameters:
    - places: List of geoIds or place identifiers.
    - target_variable_dcid: Variable DCID to fetch.
    - api_key: Google Data Commons API key.

    Returns:
    - DataFrame containing Place DCID, Place Name, Target, and Raw Value.
    """
    df = dcpd.build_multivariate_dataframe(places, target_variable_dcid)
    df.reset_index(inplace=True)
    df.rename(columns={'place': 'PlaceDCID'}, inplace=True)

    threshold_val = df[target_variable_dcid].quantile(threshold)
    df['Target'] = df[target_variable_dcid].apply(lambda value: classify_target(value, threshold_val))

    unique_dcids = df['PlaceDCID'].unique().tolist()
    names_dict = dcpd.get_property_values(unique_dcids, 'name')
    df['PlaceName'] = df['PlaceDCID'].map(lambda dcid: names_dict.get(dcid, [None])[0] if names_dict.get(dcid) else None)

    return df[['PlaceDCID', 'PlaceName', 'Target', target_variable_dcid]]

def get_inarcs_for_scope_paginated(scope, api_key, page_token=None):
    """
    Fetch in-arcs for a given scope using Google Data Commons API, with optional pagination.

    Parameters:
    - scope (str): The scope for which to fetch in-arcs (e.g., zip code, county, state).
    - api_key (str): The API key for authenticating with the Google Data Commons API.
    - page_token (str, optional): Token for fetching the next page of results, if available.

    Returns:
    - arcs (list): A list of in-arcs representing the 'places' within the specified scope.
    - nextPageToken (str or None): The token for the next page of results, or None if no further pages exist.
    """
    # Base URL for the API request
    base_url = f"https://api.datacommons.org/v2/node?key={api_key}&nodes={scope}&property=<-*"
    
    # Append page token if available
    if page_token:
        encoded_token = urllib.parse.quote(page_token)  # URL-encode the token
        url = f"{base_url}&nextToken={encoded_token}"
    else:
        url = base_url
    
    # Make the API request
    response = requests.get(url)
    data = response.json()
    
    # Extract in-arcs and the nextPageToken
    arcs = data['data'][list(data['data'].keys())[0]]['arcs']['typeOf']['nodes']
    
    if 'nextToken' not in data:
        return arcs, None
    else:
        return arcs, data['nextToken']

def get_all_inarcs(class_name, api_key):
    """
    Fetch all in-arcs for a specified class, iterating through paginated results.

    Parameters:
    - class_name (str): The class name or scope for which to retrieve all in-arcs.
    - api_key (str): The API key for authenticating with the Google Data Commons API.

    Returns:
    - all_in_arcs (list): A comprehensive list of all in-arcs for the specified class.
    """
    all_in_arcs = []
    page_token = None
    
    # Continue fetching data until there's no nextPageToken
    while True:
        in_arcs, page_token = get_inarcs_for_scope_paginated(class_name, api_key, page_token)
        all_in_arcs.extend(in_arcs)
        # Exit the loop if there's no next page
        if not page_token:
            break
    
    return all_in_arcs

def get_zipcodes(api_key):
    all_in_arcs = get_all_inarcs('CensusZipCodeTabulationArea', api_key)
    places = [item['dcid'] for item in all_in_arcs]
    return places 

def get_counties(api_key):
    all_in_arcs = get_all_inarcs('County', api_key)
    places = [item['dcid'] for item in all_in_arcs]
    return places 

def get_states(api_key):
    all_in_arcs = get_all_inarcs('State', api_key)
    places = [item['dcid'] for item in all_in_arcs]
    return places 

def get_countries(api_key):
    all_in_arcs = get_all_inarcs('Country', api_key)
    places = [item['dcid'] for item in all_in_arcs]
    return places 
