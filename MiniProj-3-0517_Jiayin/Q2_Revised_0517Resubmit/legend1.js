

// select the svg area
var svg = d3.select("#legend3")

// Handmade legend
svg.append("circle").attr("cx",50).attr("cy",20).attr("r", 6).style("fill", "#1F77B4")
svg.append("circle").attr("cx",50).attr("cy",40).attr("r", 6).style("fill", "#AEC7E8")
svg.append("circle").attr("cx",50).attr("cy",60).attr("r", 6).style("fill", "#FF7F0F")
svg.append("circle").attr("cx",50).attr("cy",80).attr("r", 6).style("fill", "#FFBB78")
svg.append("circle").attr("cx",50).attr("cy",100).attr("r", 6).style("fill", "#2CA02C")
svg.append("circle").attr("cx",50).attr("cy",120).attr("r", 6).style("fill", "lightgray")



svg.append("text").attr("x", 70).attr("y", 20).text("Transport").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 70).attr("y", 40).text("Energy").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 70).attr("y", 60).text("Agriculture").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 70).attr("y", 80).text("Industry").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 70).attr("y", 100).text("Debt").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 70).attr("y", 120).text("Others").style("font-size", "15px").attr("alignment-baseline","middle")






//.domain(["Transport", "Energy", "Agriculture", "Industry", "Debt", "Others"])
//.range(["#1F77B4","#AEC7E8","#FF7F0F","#FFBB78","#2CA02C","#98DF8A"])
