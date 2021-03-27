// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get reference to the table body
var tbody = d3.select("tbody")

// Console.log UFO data from data.js
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
// tableData.forEach(function(uofElement) {
//     console.log(uofElement);
//     var row = tbody.append("tr");

//     Object.entries(uofElement).forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

// Step 4: Use d3 to append 1 cell per ufo report value (datetime, city, state, country, shape, durationMinutes, comments,)
tableData.forEach(function(uofElement) {
    console.log(uofElement);
    var row = tbody.append("tr");

    Object.entries(uofElement).forEach(function([key, value]) {
        console.log(key,value);
        // Append a cell to the row for each value
        //in the ufo report object
        var cell = row.append("td");
    })
});

// Step 5: Use d3 to update eaach cell's text width
// ufo element values (datetime, city, state, country, shape, durationMinutes, comments)

