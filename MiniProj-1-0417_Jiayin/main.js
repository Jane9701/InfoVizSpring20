// Load the datasets and call the functions to make the visualizations

Promise.all([
  //d3.csv('data/Aid-data_Donation.csv', d3.autoType),
  d3.csv('data/testdata2.csv', d3.autoType),
 // d3.csv('data/scores.csv', d3.autoType),
  d3.json('data/countries.json'),
]).then(([data, geoJSON]) => {
  vis1(data, d3.select('#vis1'));
  vis2(geoJSON, d3.select('#vis2'));
  vis3(data, d3.select('#vis3'));
});
