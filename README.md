# nyc government payroll

July 2018 I was looking at making infographics using info from [nyc open data payroll data](https://data.cityofnewyork.us/City-Government/Citywide-Payroll-Data-Fiscal-Year-/k397-673e). I downloaded the data, and grouped by fiscal year and first name, as long as the first name had at least 1000 instances of that name. I made sure to only get data for people with annual salaries. I then just took an average of the salaries, and this is the result, which is not really surprising. I will work to recreate the full data file to back into my work. I'm not a data scientist so accuracy of this is not guaranteed!!

To see the graphic locally, clone this repository, cd into the file, and run:

```
python -m http.server
```

To look at how I got the data, install jupyter notebook and initialize it in this repo with `jupyter notebook`

![Government](https://firebasestorage.googleapis.com/v0/b/selfies-22b79.appspot.com/o/salarygraph.gif?alt=media&token=3cd98959-da91-48e5-9c4e-d8eadc65f89a)
