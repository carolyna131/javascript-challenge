// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


data.forEach(function (ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the filter button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function () {
  
    var date = document.getElementById('datetime').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var shape = document.getElementById('shape').value;
    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);

//use input on form to filter data by datetime in data.js file
var userInput = tableData.filter(item => item.datetime.includes(date) && item.city.includes(city) && item.state.includes(state) && item.country.includes(country) && item.shape.includes(shape));
    console.log(userInput);
  

  
//filtered data is used to populate the tabel   
filteredData.forEach(function(userInput) {
  var row = tbody.append("tr");
  Object.entries(userInput).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});
};

// resets form
buttonClear.on("click", function () {
showData(tableData)
});