const xValue = d => d.salary;
const xLabel = 'Score';
const yValue = d => d.first_name;
const yLabel = 'School';
const margin = { left: 350, right: 30, top: 20, bottom: 75 };
const svg = d3.select('svg');
const width = svg.attr('width');
const height = svg.attr('height');
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg.append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);
const xAxisG = g.append('g')
  .attr('transform', `translate(0, ${innerHeight})`);
const yAxisG = g.append('g');

// xAxisG.append('text')
//     .attr('class', 'axis-label')
//     .attr('x', innerWidth / 2)
//     .attr('y', 55)
//     .text(xLabel);

const xScale = d3.scaleLinear();
const yScale = d3.scaleBand()
  .paddingInner(0.3)
  .paddingOuter(0);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    var html = "<strong>" + d.salary + "</strong> ";
    return html;
  })
const xTicks = 10;
const xAxis = d3.axisBottom()
  .scale(xScale)
  .tickPadding(5)
  .tickFormat(d3.format('.0s'))
  .tickSize(-innerHeight);

const yAxis = d3.axisLeft()
  .scale(yScale)
  .tickPadding(5)
  .tickSize(-innerWidth);

d3.csv("names", (error, data) => {
  data = d3.csvFormatRows("\t").parse
  data = d3.csvParse(data)
  console.log(data)
  yScale
    .domain(data.map(yValue).reverse())
    .range([innerHeight, 0]);

  xScale
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth])
    .nice(xTicks);

  svg.call(tip);
  var bars = g.selectAll("g.bar")
    .data(data)
    .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(0," + yScale(yValue(d)) + ")"; })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide)

    bars.append('rect')
      // .attr('x', 0)
      // .attr('y', d => yScale(yValue(d)))
      .attr('class', 'inner-bar')
      .attr('width', d => xScale(xValue(d)))
      .attr('height', d => yScale.bandwidth())
      .attr('fill', 'steelblue')

    bars.append("text")
      .attr("class", "value")
      .attr("x", d => xScale(xValue(d)))
      .attr("y", d => yScale.bandwidth()/2)
      // .attr('width', d => xScale(xValue(d)))
      // .attr('height', d => yScale.bandwidth()/3)
      .attr("dx", -3)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text(d => d.salary)

    // xAxisG.call(xAxis);

    yAxisG.call(yAxis);
    yAxisG.selectAll('.tick line').remove();
})
