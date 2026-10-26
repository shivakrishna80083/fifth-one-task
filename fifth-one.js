
// 1. AN ARRAY OF DATE OBJECTS

console.log("=== 1. ORIGINAL DATES ARRAY ===");

let dateList = [
  new Date(2026, 0, 15),  
  new Date(2026, 4, 20),  
  new Date(2026, 11, 25), 
  new Date(2026, 2, 8)    
];

console.log(dateList);

// 2. READ PARTS OF EACH DATE USING A LOOP

console.log("\n=== 2. EXTRACT DATE PARTS (GET METHODS) ===");

for (let i = 0; i < dateList.length; i++) {
  let d = dateList[i];
  
  let day = d.getDate();
  let month = d.getMonth() + 1; 
  let year = d.getFullYear();
  let dayOfWeek = d.getDay();   

  console.log("Item " + i + ": " + day + "/" + month + "/" + year + " (Day index: " + dayOfWeek + ")");
}

// 3. MODIFY DATES IN AN ARRAY (SET METHODS)

console.log("\n=== 3. MODIFYING DATES (SET METHODS) ===");

// Example: Change the first date to the 1st of the month, Year 2030
dateList[0].setDate(1);
dateList[0].setFullYear(2030);

console.log("Updated first date:");
console.log(dateList[0]);

// 4. FIND THE EARLIEST AND LATEST DATE

console.log("\n=== 4. FIND MIN AND MAX DATES ===");

let earliest = dateList[0];
let latest = dateList[0];

for (let i = 1; i < dateList.length; i++) {
  // getTime() gives time in milliseconds since Jan 1, 1970
  if (dateList[i].getTime() < earliest.getTime()) {
    earliest = dateList[i];
  }
  if (dateList[i].getTime() > latest.getTime()) {
    latest = dateList[i];
  }
}

console.log("Earliest Date:", earliest);
console.log("Latest Date:", latest);

// 5. SIMPLE FILTER (Dates in or after May)

console.log("\n=== 5. FILTER DATES (MAY OR LATER) ===");

let afterMay = [];

for (let i = 0; i < dateList.length; i++) {
  // May is month index 4 (January = 0)
  if (dateList[i].getMonth() >= 4) {
    afterMay.push(dateList[i]);
  }
}

console.log("Dates in or after May:", afterMay);

// 6. GENERATE NEXT 7 DAYS INTO AN ARRAY

console.log("\n=== 6. CREATE NEXT 7 DAYS ARRAY ===");

let week = [];
let today = new Date();

for (let i = 0; i < 7; i++) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i); 
  week.push(nextDay);
}

for (let i = 0; i < week.length; i++) {
  let d = week[i];
  console.log("Day " + (i + 1) + ": " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
}