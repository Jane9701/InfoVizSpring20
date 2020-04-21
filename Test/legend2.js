//add legend
const legend = g.append("g")
  .selectAll("g")
  .data([2, 3, 4, 5, 6])
  .join("g")
    .attr("transform", (d, i) => `translate(0, ${i * 2.5 * maxRadius})`);

legend.append("circle")
  .attr("r", d => radius(d))
  .attr("fill", "steelblue");

legend.append("text")
  .attr("font-family", "sans-serif")
  .attr("font-size", 12)
  .attr("dominant-baseline", "middle")
  .attr("x", maxRadius + 15)
  .text(d => d);