// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
// Use `Object.entries` to console.log each UFO Sighting value
  Object.entries(ufoSightings).forEach(function([key, value]) {
// Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var filterbutton = d3.select("#filter-btn");
var form = d3.select("form");

form.on("submit", runFilter);
fitlerbutton.on("click",runFilter);

function userFilters() {
  // clear existing table
  d3.select("tbody").html("");
  // prevent default
  d3.event.preventDefault();

  var inputValue = d3.select("#input").property("value");
  console.log(inputValue);

  // Create filters
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
      sighting.city === inputValue || sighting.state === inputValue ||
      sighting.country === inputValue ||
      sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);


  filteredData.forEach((ufoSightings) => {
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSightings).forEach(([key, value]) =>{
    // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
  });
}