// from data.js
var tableData = data;

//reference to table body
var tbody =d3.select("tbody")

//data.js log to console
console.log(data)


//loop through the data.js 
data.forEach(function(ufoSightings) {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key,value)
    var cell = row.append("td");
    //update each cell data object value with d3
    cell.text(value);
  });
});
  
  // Select the filter button
  var filterButton = d3.select("#filter-btn");
 
  // Select the form
  var form = d3.select("#sighting-date");
  

  // Create event handlers
  filterButton.on("click", runEnter);
  form.on("submit", runEnter);
  
  // Complete the event handler function for the form
  function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //clear table
  tbody.html("");
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");
  
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);

  //use input on form to filter data by datetime in data.js file
  var filteredData = tableData.filter((ufoSightings) => ufoSightings.datetime === inputValue);
  
  console.log(filteredData);
    
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