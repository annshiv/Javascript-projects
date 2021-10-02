import * as d3 from "d3";
import React, { useRef, useEffect, useState } from "react";

function BarChart1({ width, height, data, data1 }) {
  const ref = useRef();

  const [showResults, setShowResults] = useState(true);
  const [top, setTop] = useState(true);

  var yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, height - 100]);

  const text_color = showResults ? "green" : "red";
  const func = () => {
    top ? draw() : draw1();
  };
  // const height = top ? height - yScale(d) - 5

  const change = () => {
    setShowResults(!showResults);
  };

  function position() {
    setTop(!top);
  }

  useEffect(() => {
    // var selection = svg.selectAll("rect").data(data);

    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black")
      .attr("fill", `${showResults ? "green" : "red"}`);
    //   .attr("y", (d) => height - yScale(d) - 5);

    // selection
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 45)
    //   .attr("y", (d) => height)
    //   .attr("width", 40)
    //   .attr("height", 0)
    //   .attr("fill", "orange")
    //   .attr("height", (d) => yScale(d))
    //   .attr("y", (d) => height - yScale(d));

    // selection
    //   .data(data1)
    //   .enter()
    //   .append("rect")
    //   .attr("class", "bar1")
    //   .attr("x", (d, i) => i * 45)
    //   .attr("y", (d) => height)
    //   .attr("width", 40)
    //   .attr("height", 0)
    //   .attr("height", (d) => yScale(d))
    //   .attr("y", (d) => height - yScale(d));

    // svg
    //   .selectAll("text")
    //   .data(data)
    //   .enter()
    //   .append("text")
    //   .text((d) => d)
    //   .attr("x", (d, i) => i * 45)
    //   .attr("y", (d) => height - yScale(d) - 5);

    func();
    //   .style("font-size", 64)
    //   .attr("name", "asdf");
  }, [showResults, top]);

  //   const a = d3
  //     .selectAll("text")
  //     .data(data1)
  //     .enter()
  //     .append("text")
  //     .text((d) => d)
  //     .attr("x", (d, i) => i * 45)
  //     .attr("y", (d) => height - yScale(d) - 5);

  //   useEffect(() => {
  //     draw();
  //   }, [data, data1, text_color]);

  const draw = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("fill", "orange")
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .data(data1)
      .enter()
      .append("rect")
      .attr("class", "bar1")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height - yScale(d) - 5);
  };

  const draw1 = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("fill", "orange")
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .data(data1)
      .enter()
      .append("rect")
      .attr("class", "bar1")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height - 10);
  };

  //   const draw = () => {
  // selection
  //   .data(data1)
  //   .enter()
  //   .append("text")
  //   .text((d) => d)
  //   .attr("x", (d, i) => i * 45)
  //   .attr("y", (d) => height - 5)
  //   .attr("fill", "red");
  //   };

  //   console.log(showResults);
  console.log(text_color);
  //   console.log(top);

  return (
    <div className="chart">
      <svg ref={ref}></svg>
      <button onClick={() => change()}>change</button>
    </div>
  );
}

export default BarChart1;
