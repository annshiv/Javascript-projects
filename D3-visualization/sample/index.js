const dummy_data = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 11, region: "India" },
  { id: "d3", value: 4, region: "China" },
  { id: "d4", value: 6, region: "Poona" },
];

d3.select("div")
  .selectAll("p")
  .data(dummy_data)
  .enter()
  .append("p")
  .text((d) => d.region);
