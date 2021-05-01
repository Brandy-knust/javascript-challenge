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
  var inputField2 = d3.select("#city");
  var inputField3 = d3.select("#state");
  var inputField4 = d3.select("#country");
  var inputField5 = d3.select("#shape");
  var inputField6 = d3.select("#duration");


  var inputValue1 = inputField1.property("value");
  var inputValue2 = inputField2.property("value");
  var inputValue3 = inputField3.property("value");
  var inputValue4 = inputField4.property("value");
  var inputValue5 = inputField5.property("value");
  var inputValue6 = inputField6.property("value");

  console.log(inputValue1, inputValue2, inputValue3, inputValue4, inputValue5, inputValue6);
  // console.log(inputValue1);
  if (inputField1) {
    data = data.filter(obj => obj.datetime == inputValue1);
    console.log(data);
  }
  if (inputField2) {
    data = data.filter(obj => obj.city == inputValue2);
    console.log(data);
  }
  if (inputField3) {
    data = data.filter(obj => obj.state == inputValue3);
    console.log(data);
  }
  if (inputField4) {
    data = data.filter(obj => obj.country == inputValue4);
    console.log(data);
  }
  if (inputField5) {
    data = data.filter(obj => obj.shape == inputValue5);
    console.log(data);
    if (inputField6) {
      data = data.filter(obj => obj.durationMinutes == inputValue6);
      console.log(data);
    }


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
}