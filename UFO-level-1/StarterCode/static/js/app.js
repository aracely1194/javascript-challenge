// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console log data to take a look 
data.forEach(function (ufoReport) {
    console.log(ufoReport);
})

//Function that will display th filtered data on the HTML table
function displayData(data) {
    tbody.text("");
    data.forEach(function (sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function ([key, value]) {
            row.append("td").text(value);
        })
    })
};


// displayData(tableData);


// Use user's input and the filter button
var dateInput = d3.select("#datetime")
var button = d3.select("#filter-btn")

// Filter data with user's input
function clickSelect(){
    //Prevent the page from refreshing
    d3.event.preventDefault();
    //Console log the user's input
    console.log(dateInput.property("value"));
    //Create a new table that only shows filtered data
    var filterData = tableData.filter(sighting => sighting.datetime===dateInput.property("value"))
    //Display the new table
    displayData(filterData);
}

//Event listener to handle change and click
dateInput.on("change", clickSelect)
