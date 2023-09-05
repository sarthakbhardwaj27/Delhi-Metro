// const myForm = document.getElementById("myForm");
//       const csvFile = document.getElementById("csvFile");
//       myForm.addEventListener("submit", function (e) {
//          e.preventDefault();
//          const input = csvFile.files[0];
//          const reader = new FileReader();
//          reader.onload = function (e) {
//             const text = e.target.result;
//             document.write(text);
//          };
//          console.log(reader.readAsText(input));
//       });

console.log("hello")
const fs = require('fs');
const csv = require('csvtojson');
const {Parser} = require('json2csv');

(async ()=>{
   const data = await csv().fromFile("DELHI_METRO_DATA.csv");
   console.log(data[0].Station);
})();