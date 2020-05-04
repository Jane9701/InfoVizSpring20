

// select the svg area
var svg = d3.select("#legend2")

// Handmade legend
svg.append("circle").attr("cx",50).attr("cy",20).attr("r", 6).style("fill", "#F28E2B")
svg.append("circle").attr("cx",50).attr("cy",50).attr("r", 6).style("fill", "#4e79a6")
svg.append("text").attr("x", 80).attr("y", 20).text("Receive More").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 80).attr("y", 50).text("Donate More").style("font-size", "15px").attr("alignment-baseline","middle")
