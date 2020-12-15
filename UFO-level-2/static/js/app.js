// from data.js
var tableData = data;
// YOUR CODE HERE!

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through each UFO`data` and console.log each ufo - sighting object
// Creating the empty rows for tableData
tableData.forEach((ufoSightings) => {
    console.log(ufoSightings);
    // Using d3 to append one table row `tr` for each ufo-sighting object
    var row = tbody.append("tr");
    // Using the `Object.entries` to console.log each UFO Sighting object
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Button to return to full table
var fullTable = d3.select("full-btn");
// Select the Full table return
fullTable.on("click", function () {
    filteredData(tableData);
});

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Selecting the input elements and getting the raw HTML node for all filters
    var inputElement = d3.selectAll(".form-control");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Getting the value property for all input elements
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var inputValueCity = inputCity.property("value");
    console.log(inputValueCity);
    var inputValueState = inputState.property("value");
    console.log(inputValueState);
    var inputValueCountry = inputCountry.property("value");
    console.log(inputValueCountry);
    var inputValueShape = inputShape.property("value");
    console.log(inputValueShape);

    // Assigning filteredData to tableData
    var filteredData = tableData;
    console.log(filteredData);

    // Use the form input to filter the data by datetime, city, state, country & shape
    if (inputValue != "") {
        filteredData = filteredData.filter((sighting) => sighting.datetime === inputValue);
    };
    if (inputValueCity != "") {
        filteredData = filteredData.filter((sighting) => sighting.city === inputValueCity);
    };
    if (inputValueState != "") {
        filteredData = filteredData.filter((sighting) => sighting.state === inputValueState);
    };
    if (inputValueCountry != "") {
        filteredData = filteredData.filter((sighting) => sighting.country === inputValueCountry);
    };
    if (inputValueShape != "") {
        filteredData = filteredData.filter((sighting) => sighting.shape === inputValueShape);
    };

    //  Get a reference to the table body
    var tbody = d3.select("tbody");

    // Clear out current contents in the table
    tbody.html("");

    // If results have no match
    if (filteredData.length === 0) {
        tbody.text(`No matches for your search.`);
    }
    // For Matching results
    else {
        filteredData.forEach((ufoSightings) => {
            var row = tbody.append("tr");
            Object.entries(ufoSightings).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
};