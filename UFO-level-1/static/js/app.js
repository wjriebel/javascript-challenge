// from data.js
var tableData = data;

// YOUR CODE HERE!

// Ge a reference to the table body
var tbody = d3.select("tbody")

// Console.log the UFO data from data.js
// console.log(tableData)

// Step 1: Loop through 'data' and console.log each UFO object
// tableData.forEach(function(ufoElement) {
//     console.log(ufoElement);
// });

// Step 2: Use d3 to append one table row `tr` for each UFO object
// Don't worry about adding cells or text yet, just t ry appending the `tr` elements.
// tableData.forEach(function(uofElement) {
//     console.log(uofElement);
//     var row = tbody.append("tr");
// });

// Step 3: Use `Object.entries` to console.log each UFO element value
tableData.forEach(function(uofElement) {
    console.log(uofElement);
    var row = tbody.append("tr");

    Object.entries(uofElement).forEach(function([key, value]) {
        console.log(key, value);
    });
});