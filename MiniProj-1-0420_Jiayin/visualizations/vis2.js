function vis2(geoJSON, div, data) {
  const margin = {top: 20, right: 20, bottom: 20, left: 20};

  const visWidth = 1000 - margin.left - margin.right;
  const visHeight = 1000 - margin.top - margin.bottom;

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




//countryToGeo = Object.fromEntries(new Map(data.map(d => [d.Country, d.Net])))
countryToGeo = geoJSON.features.reduce((result, d) => {
  result[d.properties.NAME] = d;
  return result;
}, {})

let countryAidData = data.map(d => d.Country)
let geoAidData = geoJSON.features.map(d => d.properties.NAME)
countryAidData.forEach(d => {
  if (!geoAidData.includes(d)){
    console.log(d)
  }
})
//console.log (countryAidData)

//create scale
const maxRadius = 30;

const radius = d3.scaleSqrt()
    .domain([0, d3.max(data, d => Math.abs(d.Net))])
    .range([0, maxRadius]);
// draw circles
g.selectAll(".dot")
.data(data)
.join("circle")
  .attr("class", "dot")
  .attr("fill", 
  d => { if (d.Net>=0)
    {return "rgba(52,46,173, 0.7)";
  }
  else {
    return "rgba(234,98,39, 0.7)"}
  })
  .attr("cx", d => {
  
    const [x, y] = path.centroid(countryToGeo[d.Country]);
    return x;
  })
  .attr("cy", d => {
    const [x, y] = path.centroid(countryToGeo[d.Country]);
    return y;
  })
  .attr("r", d => radius(Math.abs(d.Net)))

  
}