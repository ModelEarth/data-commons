---
sql:
  US-2020-17schema: ./data/Flow.parquet
---

[Data Commons](../)

# Local Innovation

[How to pull DuckDB SQL using Observable](https://observablehq.com/framework/sql) and [DuckDB in Observable](https://observablehq.com/framework/lib/duckdb)

[Our data source](https://model.earth/profile/prep/sql/duckdb/) - US-2020-17schema.duckdb  
Converted to .parquet files in [Observable Desktop](https://observablehq.com/d/2898d01446cefef1) by Kelly Yiou Xie


```sql
SELECT * FROM "US-2020-17schema" LIMIT 20
```

<br>

**Notes**  
.duckdb extension is not supported for US-2020-17schema.duckdb  
Error: unknown file type: application/octet-stream (.duckdb)  
<!--
https://github.com/ModelEarth/profile/raw/main/impacts/exiobase/US-source/US-2020-17schema.duckdb
-->

DuckDB is generally faster than Pandas for executing SQL queries on large datasets because DuckDB is an in-memory analytical database designed for speed and efficiency.

Change table names to end with US where XX appears in yaml.

<!-- 
Override
http://localhost:8887/data-commons/dist/_observablehq/theme-air,near-midnight.css
-->
<style>
p {
  max-width: 100% !important;
}
</style>