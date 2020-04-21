         
var SVG = d3.select("#legend2")
var linearSize = d3.scaleLinear().domain([0,10]).range([10, 30]);



svg.append("g")
  .attr("class", "legendSize")
  .attr("transform", "translate(20, 40)");

var legendSize = d3.legendSize()
  .scale(linearSize)
  .shape('circle')
  .shapePadding(15)
  .labelOffset(20)
  .orient('horizontal');

svg.select(".legendSize")
  .call(legendSize);