

// select the svg area
var SVG = d3.select("#legend1")

// create a list of keys
var keys = ["1.United States","2.Japan", "3.Germany","4.United Kingdom","5.France","6.Netherlands","7.Canada","8.Sweden","9.Norway","10.Italy","11.Denmark","12.Switzerland","13.Australia","14.Belgium","15.Spain","16.Saudi Arabia","17.Kuwait","18.Korea","19.Austria", "20.Finland"]

// Usually you have a color scale in your chart already
var color = d3.scaleOrdinal()
  .domain(keys)
  .range(d3.schemeCategory20);

// Add one dot in the legend for each name.
var size = 10
SVG.selectAll("mydots")
  .data(keys)
  .enter()
  .append("rect")
    .attr("x", 20)
    .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size)
    .attr("height", size)
    .style("fill", function(d){ return color(d)})

// Add one dot in the legend for each name.
SVG.selectAll("mylabels")
  .data(keys)
  .enter()
  .append("text")
    .attr("x", 20 + size*1.2)
    .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")


    // select the svg area
var SVG2 = d3.select("#legend2")

// create a list of keys
var keys2 = ["1.India","2.Thailand","3.Brazil","4.Colombia","5.Korea","6.Poland","7.South Africa","8.Kuwait","9.Chile","10.Saudi Arabia"]

// Usually you have a color scale in your chart already
var color2 = d3.scaleOrdinal()
  .domain(keys2)
  .range(["#E41A1B","#377EB8","#4DAF49","#984EA3","#FF7F00","#FEFF34","#A65628","#F781BF","#999999","#65C2A5"]);

// Add one dot in the legend for each name.
var size2 = 10
SVG2.selectAll("mydots2")
  .data(keys2)
  .enter()
  .append("rect")
    .attr("x", 20)
    .attr("y", function(d,i){ return 100 + i*(size+5)}) // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", size2)
    .attr("height", size2)
    .style("fill", function(d){ return color2(d)})

// Add one dot in the legend for each name.
SVG2.selectAll("mylabels2")
  .data(keys2)
  .enter()
  .append("text")
    .attr("x", 20 + size2*1.2)
    .attr("y", function(d,i){ return 100 + i*(size+5) + (size/2)}) // 100 is where the first dot appears. 25 is the distance between dots
    .style("fill", function(d){ return color2(d)})
    .text(function(d){ return d})
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")