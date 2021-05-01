// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



var button = d3.select("#filter-btn");



// function dayPlease(data) {
//     return data.datetime
// };

button.on("click", runEnter);
// form.on("sumbit", runEnter);

function runEnter() {
  d3.event.preventDefault();

  var data = tableData;

  var inputField1 = d3.select("#datetime");
  


  var inputValue1 = inputField1.property("value");
  

  
  console.log(inputValue1);
  
    data = data.filter(obj => obj.datetime == inputValue1);
  

    console.log(data);

    var table = d3.select("tbody");

    table.html("");

    data.forEach((data) => {
      var row = table.append("tr");
      Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

