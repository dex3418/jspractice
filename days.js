const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter day number: ", function(d) {
  
  d = Number(d); // convert to number

  if (d == 1) console.log("Monday");
  else if (d == 2) console.log("Tuesday");
  else if (d == 3) console.log("Wednesday");
  else if (d == 4) console.log("Thursday");
  else if (d == 5) console.log("Friday");
  else if (d == 6) console.log("Saturday");
  else if (d == 7) console.log("Sunday");
  else console.log("Invalid day number");

  rl.close();
});
