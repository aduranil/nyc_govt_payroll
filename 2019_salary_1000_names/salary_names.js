const margin = { left: 100, right: 30, top: 50, bottom: 75 };
const svg = d3.select("svg");
const width = svg.attr("width");
const height = svg.attr("height");
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const tip = d3
  .tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function(d) {
    var html =
      "<div>" +
      "<h3>" +
      d.first_name +
      "</h3>" +
      "<h3>" +
      "name count: " +
      parseInt(d.count) +
      "</h3>" +
      "<h3>" +
      "salary: " +
      "$" +
      d.salary.slice(0, 2) +
      "," +
      d.salary.slice(2, 5) +
      "</h3>" +
      "</div>";
    return html;
  });
svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 0 + margin.top / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "18px")
  .attr("font-weight", "bold")
  .text("2019 Base Salary for Salaried Workers");

svg
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 5)
  .attr("x", 0 - 600 / 2)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-size", "16px")
  .attr("font-weight", "bold")
  .text("NAME");

svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", 0 + (margin.top + 35) / 2)
  .attr("text-anchor", "middle")
  .style("font-size", "16px")
  .text("for names shared by +500 employees");

// svg
//   .append("text")
//   .attr("x", width / 2)
//   .attr("y", innerHeight + margin.bottom + 15)
//   .attr("text-anchor", "middle")
//   .style("font-size", "16px")
//   .text("SALARY");

let data = [];
d3.csv("salaried_employees_500.csv", datum => {
  datum.forEach(item => {
    data.push({
      first_name: item["first_name"],
      salary: item["base_salary"].slice(0, 5),
      gender: item["gender"],
      count: item["name_count"]
    }); // lowercased

    // data = data.slice(0, 50);
  });

  const xAxisB = d3
    .select("#xaxis")
    .append("svg")
    .attr("width", 1000);
  const xAxisG = xAxisB
    .attr("transform", `translate(${margin.left},0)`)
    // .append("text")
    // .attr("x", width / 2)
    // .attr("y", innerHeight + margin.bottom + 15)
    // .attr("text-anchor", "middle")
    // .style("font-size", "16px")
    // .text("SALARY")

    .append("g");
  // .attr("transform", `translate(${margin.left},0`);

  xAxisB
    .append("g")
    .append("text")
    .attr("x", (innerWidth - 65) / 2)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .attr("font-weight", "bold")
    .text("SALARY");

  const yAxisG = g.append("g");
  const xValue = d => d.salary;
  const yValue = d => d.first_name;
  const xScale = d3
    .scaleLinear()
    .domain([0, 90000])
    .range([0, innerWidth]);
  const yScale = d3
    .scaleBand()
    .paddingInner(0.2)
    // .paddingOuter(0.2)
    .domain(data.map(yValue).reverse())
    .range([innerHeight + 75, 0]);
  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickFormat(d3.format(".2s"));
  const yAxis = d3
    .axisLeft()
    .scale(yScale)
    .tickPadding(5)
    .tickSize(-innerWidth);
  // yScale.domain(data.map(yValue).reverse()).range([innerHeight, 0]);
  // xScale.domain([0, 90000]).range([0, innerWidth]);

  const colorLegendG = xAxisB;
  // .append("g")
  // .attr("transform", `translate(${(innerWidth - 125) / 2}, 70)`);
  const colorScale = d3
    .scaleOrdinal()
    .domain(["MALE", "FEMALE"])
    .range(["#0dc3ff", "#DCF763"]);
  const colorLegend = d3
    .legendColor()
    .scale(colorScale)
    .shape("rect");

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
      return d.gender == "female" ? "#DCF763" : "#0dc3ff";
    });

  xAxisG.call(xAxis);
  yAxisG.call(yAxis);

  colorLegendG
    .call(colorLegend)
    .selectAll(".cell text")
    .attr("dy", "0.1em");
  yAxisG.selectAll(".tick line").remove();
  xAxisG.selectAll("text").style("font-size", "15px");
  // xAxisG.selectAll("line").remove();
});
