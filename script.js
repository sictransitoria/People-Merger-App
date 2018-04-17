// After creating two .JSON files with data;

const fs = require("fs");
const groupOne = require("./peopleOne.json");
const groupTwo = require("./peopleTwo.json");
const completeFile = "peopleComplete.txt";


// Function that will read both .JSON files and write them into one .txt file;

function combineTheTwo(groupOne, groupTwo) {

fs.readFile(groupOne, "utf-8", function(err, dataOne) {
  if(err) throw err;
  var groupOne = JSON.parse(dataOne);

fs.readFile(groupTwo, "utf-8", function(err, dataTwo) {
  if(err) throw err;
  var groupTwo = JSON.parse(dataTwo);
  var combination = groupOne.concat(groupTwo);
    console.log(combination.sort());

fs.writeFile("./peopleComplete.txt", combination.sort(), "utf-8", function(err) {
  if(err) 
  throw err;

});

// Call function to combine both .JSON files into one text file;

combineTheTwo("./people1.json", "./people2.json");

});