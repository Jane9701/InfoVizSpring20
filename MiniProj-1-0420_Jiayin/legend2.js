


// select the svg area
var svg = d3.select("#legend2")

// Handmade legend
svg.append("circle").attr("cx",200).attr("cy",50).attr("r", 5).style("fill", "grey")
svg.append("circle").attr("cx",200).attr("cy",120).attr("r", 10).style("fill", "grey")
svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 15).style("fill", "grey")
svg.append("circle").attr("cx",200).attr("cy",260).attr("r", 20).style("fill", "grey")
svg.append("circle").attr("cx",200).attr("cy",330).attr("r", 25).style("fill", "grey")
svg.append("text").attr("x", 230).attr("y", 50).text("Less than 10B").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 230).attr("y", 120).text("10B - 100B").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 230).attr("y", 190).text("100B - 300B").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 230).attr("y", 260).text("300B - 500B").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 230).attr("y", 330).text("Greater than 500B").style("font-size", "15px").attr("alignment-baseline","middle")


svg.append("circle").attr("cx",500).attr("cy",50).attr("r", 30).style("fill", "rgba(52,46,173, 0.7)")
svg.append("circle").attr("cx",500).attr("cy",270).attr("r", 30).style("fill", "rgba(234,98,39, 0.7)")
svg.append("text").attr("x", 550).attr("y", 50).text("Donate More").style("font-size", "20px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 550).attr("y", 270).text("Receive More").style("font-size", "20px").attr("alignment-baseline","middle")

