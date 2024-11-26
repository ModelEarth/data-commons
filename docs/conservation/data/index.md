## Forest Coverage Timeline Data

### LandCoverFraction_Forest

	python3 -m venv env && source env/bin/activate
	python LandCoverFraction_Forest.py

Resulting file from GDC API: [LandCoverFraction_Forest.csv](LandCoverFraction_Forest.csv)

This is what one key/value pair in one of the indices in the json looks like: 

    {'geoId/13001': {'geoId/13001': {'LandCoverFraction_Forest': {'sourceSeries': [{'val': {'2015': 57.712213157748906, '2019': 56.10225251926496, '2017': 57.329201724571796, '2016': 57.08418588188137, '2018': 58.540199494228055}, 'measurementMethod': 'GoogleEarthEngine_MeanReduction', 'importName': 'Copernicus_GlobalLandCoverLayers', 'provenanceDomain': 'copernicus.eu', 'scalingFactor': '100', 'unit': 'Percent', 'isDcAggregate': True, 'provenanceUrl': 'https://land.copernicus.eu/global/lcviewer'}]}}}

Python:

    import datacommons
    data = datacommons.get_stat_all(["geoId/27","geoId/55"], ["LandCoverFraction_Forest"])

    for geo_id, stats in data.items():
        print(f"Data for location: {geo_id}")
        for stat_name, stat_info in stats.items():
            print(f"Stat name: {stat_name}")
            for series in stat_info['sourceSeries']:
                print(f"Source series:")
                for year, count in series['val'].items():
                    print(f"Year: {year}, Count: {count}")
                print(f"Measurement method: {series['measurementMethod']}")
                print(f"Import name: {series['importName']}")
                print(f"Provenance domain: {series['provenanceDomain']}")
                print(f"Provenance URL: {series['provenanceUrl']}")
                print()
