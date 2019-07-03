# nyc government payroll

July 2018 I was looking at making infographics using info from [nyc open data payroll data](https://data.cityofnewyork.us/City-Government/Citywide-Payroll-Data-Fiscal-Year-/k397-673e). Unfortunately I lost some of my jupyter notebook data but have left what is remaining and converted it to a .py file. I downloaded the data, and grouped by fiscal year and first name, as long as the first name had at least 1000 instances of that name. I then just took an average of the salaries, and this is the result, which is not really surprising. I will work to recreate the full data file to back into my work. One caveat is that the data i used was completely unscrubbed, which I tried to balance out by using only names with at least 1000 instances. Another is I'm not a data scientist so accuracy of this is not guaranteed!!

To see the graphic locally, clone this repository, cd into the file, and run:

```
python -m http.server
```

![Government](https://s3.gifyu.com/images/tablenums3.gif)
