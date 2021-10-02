var dataset = [80, 100, 56, 120, 100, 30, 40, 120, 160];
var dataset1 = [160, 100, 54, 123, 105, 50, 70, 30, 20];

// var svgWidth = 500,
//   svgHeight = 300,
//   barPadding = 5;
// var barWidth = svgWidth / dataset.length;

// var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

// var barChart = svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("class", "bar1")
//   .attr("y", function (d) {
//     return svgHeight - d;
//   })
//   .attr("height", function (d) {
//     return d;
//   })
//   .attr("width", barWidth - barPadding)
//   .attr("transform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate(" + translate + ")";
//   })
//   .data(dataset1)
//   .enter()
//   .append("rect")
//   .attr("class", "bar2")
//   .attr("y", function (d) {
//     return svgHeight - d;
//   })
//   .attr("height", function (d) {
//     return d;
//   })
//   .attr("width", barWidth - barPadding)
//   .attr("transform", function (d, i) {
//     var translate = [barWidth * i, 0];
//     return "translate(" + translate + ")";
//   });

// var line = svg
//   .selectAll("line")
//   .data(dataset1)
//   .enter()
//   .append("line")
//   .attr("x1", function (d, i) {
//     return barWidth * i;
//   })
//   .attr("y1", function (d, i) {
//     return svgHeight - d - 2;
//   })
//   .attr("x2", function (d, i) {
//     return barWidth * i + barWidth - barPadding;
//   })
//   .attr("y2", function (d, i) {
//     return svgHeight - d - 2;
//   })
//   .attr("stroke", "#ffffff");

// var circle = svg
//   .selectAll("circle")
//   .data(dataset1)
//   .enter()
//   .append("circle")
//   .attr("r", "10")
//   .attr("cy", function (d, i) {
//     return svgHeight - d;
//   })
//   .attr("cx", function (d, i) {
//     return barWidth * i + barWidth / 2;
//   })
//   .attr("fill", "#ffffff");

// var text = svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(function (d) {
//     return d;
//   })
//   .attr("y", function (d, i) {
//     return svgHeight - d - 2;
//   })
//   .attr("x", function (d, i) {
//     return barWidth * i;
//   })
//   .attr("fill", "orange")
//   .style("background", "#000000");

var g = svg.selectAll(".bars").enter().append("g");

// place the first bar
g.data(dataset)
  .append("rect")
  .attr("class", "bar1")
  .attr("x", function (d) {
    return x(d.letter) + 10; // center it
  })
  .attr("width", x.rangeBand() - 20) // make it slimmer
  .attr("y", function (d) {
    return y(d.col1);
  })
  .attr("height", function (d) {
    return height - y(d.col1);
  });

// place the second bar on top of it
g.data(dataset1)
  .append("rect")
  .attr("class", "bar2")
  .attr("x", function (d) {
    return x(d.letter);
  })
  .attr("width", x.rangeBand())
  .attr("y", function (d) {
    return y(d.col2);
  })
  .attr("height", function (d) {
    return height - y(d.col2);
  });
