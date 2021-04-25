// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("filter-btn");



// function dayPlease(match) {
//     return match.datetime
// };

button.on("click", runEnter);
// form.on("sumbit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    
    var inputField = d3.select("datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);
    console.log(sighting);

    var match = tableData.filter(sighting=>sighting.datetime==inputValue);

    console.log(match);
}

