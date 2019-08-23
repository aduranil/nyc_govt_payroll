const xValue = d => d.salary;
const yValue = d => d.first_name;
const margin = { left: 80, right: 30, top: 50, bottom: 75 };
const svg = d3.select("svg");
const width = svg.attr("width");
const height = svg.attr("height");
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);
const xAxisG = g.append("g").attr("transform", `translate(0, ${innerHeight})`);
const yAxisG = g.append("g");
const xScale = d3.scaleLinear();
const yScale = d3
  .scaleBand()
  .paddingInner(0.2)
  .paddingOuter(0.0);
const tip = d3
  .tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    var html =
      "<h1>" +
      d.first_name +
      "</h1>" +
      "<h1>" +
      "$" +
      d.salary.slice(0, 2) +
      "," +
      d.salary.slice(2, 5) +
      "</h1>";
    return html;
  });
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 0 + margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .attr("font-weight", "bold")
  .text("NYC Government Salaries - Men Make More Than Women");

svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0)
  .attr("x", 0 - height / 2)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("NAME");

svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 0 + (margin.top + 30) / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "12px")
  .text("for names shared by +1000 employees");

svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", innerHeight + margin.bottom + 15)
  .attr("text-anchor", "middle")
  .text("SALARY");

const xAxis = d3
  .axisBottom()
  .scale(xScale)
  .tickFormat(d3.format(".2s"));
const yAxis = d3
  .axisLeft()
  .scale(yScale)
  .tickPadding(5)
  .tickSize(-innerWidth);
const colorLegendG = g
  .append("g")
  .attr("transform", `translate(${innerWidth - 60}, 300)`);
colorLegendG
  .append("text")
  .attr("class", "legend-label")
  .attr("x", -2)
  .attr("y", -18);
const colorScale = d3
  .scaleOrdinal()
  .domain(["MALE", "FEMALE"])
  .range(["#0dc3ff", "#a861ff"]);
const colorLegend = d3
  .legendColor()
  .scale(colorScale)
  .shape("rect");
let data = [];
d3.csv("names2.csv", datum => {
  datum.forEach(item => {
    item = item["headers"].split("	");
    // item["JOHN 80926.594391 M"]
    item = item[0].split(" ");
    data.push({
      first_name: item[0],
      salary: item[1].slice(0, 5),
      gender: item[2]
    }); // lowercase
  });
  data = data.slice(0, 50);
  yScale.domain(data.map(yValue).reverse()).range([innerHeight, 0]);
  xScale.domain([0, 85000]).range([0, innerWidth]);

  svg.call(tip);
  const bars = g
    .selectAll("g.bar")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "bar")
    .attr("transform", function(d) {
      return "translate(0," + yScale(yValue(d)) + ")";
    })
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  bars
    .append("rect")
    .attr("class", "inner-bar")
    .attr("width", d => xScale(xValue(d)))
    .attr("height", d => yScale.bandwidth())
    .attr("fill", d => {
      return d.gender == "F" ? "#a861ff" : "#0dc3ff";
    });

  xAxisG.call(xAxis);
  yAxisG.call(yAxis);

  colorLegendG
    .call(colorLegend)
    .selectAll(".cell text")
    .attr("dy", "0.1em");
  yAxisG.selectAll(".tick line").remove();
});
