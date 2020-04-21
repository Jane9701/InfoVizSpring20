function vis2(geoJSON, div) {
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const visWidth = 700 - margin.left - margin.right;
  const visHeight = 400 - margin.top - margin.bottom;

  const svg = div.append('svg')
      .attr('width', visWidth + margin.left + margin.right)
      .attr('height', visHeight + margin.top + margin.bottom);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const projection =  d3.geoEqualEarth()
      .fitSize([visWidth, visHeight], geoJSON);

  const path = d3.geoPath().projection(projection);

  g.selectAll('.border')
    .data(geoJSON.features)
    .join('path')
      .attr('class', 'border')
      .attr('d', path)
      .attr('fill', '#dcdcdc')
      .attr('stroke', 'white');
  
  const mapOutline = d3.geoGraticule().outline();
  
  g.append('path')
    .datum(mapOutline)
    .attr('d', path)
    .attr('stroke', '#dcdcdc')
    .attr('fill', 'none');
}

d3.csv("data/result.csv", function(error, data) {
  if (error) throw error;
  console.log(data);

const donateToGeo = Object.fromEntries(new Map(result.map(d => [d.Country, d.Net])))

//create scale
const maxRadius = 10;

const radius = d3.scaleSqrt()
    .domain([0, d3.max(data, d => d.Net)])
    .range([0, maxRadius]);
// draw circles
g.selectAll(".dot")
.join("circle")
  .attr("class", "dot")
  .attr("fill", "steelblue")
  .attr("cx", d => {
  
    const [x, y] = path.centroid(donateToGeo[d.Country]);
    return x;
  })
  .attr("cy", d => {
    const [x, y] = path.centroid(donateToGeo[d.Country]);
    return y;
  })
  .attr("r", d => radius(d.Net)
