onmessage = function(e) {
  console.log(e.data);
  // writeToExcel(e.data);
};

console.log("Here");
for (var i = 0; i <= 1000000000; i += 1) {
   var j = i;
}
console.log("Here again");
postMessage(j);


// function writeToExcel(data) {
//   postMessage("Finished processing")
//   // cpu intensive task
// }
