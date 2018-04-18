// After creating two .JSON files with data;

const fs = require("fs");
const completeFile = "peopleComplete.txt";


// Function that will read both .JSON files and write them into one .txt file;

function combineTheTwo(groupOne, groupTwo) {
var groupOne;
var groupTwo;
var combination;
var combination2;
var combination3;

fs.readFile(groupOne, "utf-8", function(err, dataOne) {
  if(err) throw err;
  groupOne2 = JSON.parse(dataOne);


fs.readFile(groupTwo, "utf-8", function(err, dataTwo) {
  if(err) throw err;
  groupTwo2 = JSON.parse(dataTwo);
  combination = groupOne2.concat(groupTwo2);
  combination2 = combination.sort();
  console.log(combination2);

  combination3 = JSON.stringify(combination2);

fs.writeFile(completeFile, combination3, (err)=>{
  console.log("peopleComplete.txt file created")
    
    })
  
  })

})

}

// Call function to combine both .JSON files into one text file;

combineTheTwo("./peopleOne.json", "./peopleTwo.json");
