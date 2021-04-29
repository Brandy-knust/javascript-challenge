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



// function dayPlease(match) {
//     return match.datetime
// };

button.on("click", runEnter);
// form.on("sumbit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    
    var inputField1 = d3.select("#datetime");
    // var inputField2 = d3.select("#city");
    // var inputField3= d3.select("#state");
    // var inputField4 = d3.select("#country");
    // var inputField5 = d3.select("#shape");
    // var inputField6 = d3.select("#duration");
    // var inputField7 = d3.select("#comments");
    
    var inputValue1 = inputField1.property("value");
    // var inputValue2 = inputField2.property("value");
    // var inputValue3 = inputField3.property("value");
    // var inputValue4 = inputField4.property("value");
    // var inputValue5 = inputField5.property("value");
    // var inputValue6 = inputField6.property("value");
    // var inputValue7 = inputField7.property("value");

    // console.log([inputValue1, inputValue2, inputValue3, inputValue4, inputValue5, inputValue6, inputValue7]);
    console.log(inputValue1);
    
    var match = tableData.filter(tableData=>tableData.datetime==inputValue1);
    // var match = tableData.filter(tableData=>tableData.city==inputValue2);
    // var match = tableData.filter(tableData=>tableData.state==inputValue3);
    // var match = tableData.filter(tableData=>tableData.country==inputValue4);
    // var match = tableData.filter(tableData=>tableData.shape==inputValue5);
    // var match = tableData.filter(tableData=>tableData.duration==inputValue6);
    // var match = tableData.filter(tableData=>tableData.comments==inputValue7);

    console.log(match);
    var filteredData = match.map(tableData=>match.tableData);

    var table = d3.select("tbody");
    
    table.html("");

    match.forEach((match) => {
      var row = table.append("tr");
      Object.entries(match).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

