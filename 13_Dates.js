const now = new Date; // get current date
console.log(now.valueOf()); // data in milliseconds since 1 Jan 1970

// Example 1
// input as arguments
// Date(year, month, day, hour, minute, second, millisecond)
// Note: the month is 0-indexed (I have no idea why this is)
new Date(2020, 12, 23, 17, 30, 10, 100);

//Example 2
//Input as various strings
//This works pretty much anything you can think of
new Date("Dec 23 2020");
new Date("December 23 2020");
new Date("Dec-23-2020");
new Date("Dec 23 2020 23:17:30");

//Example 3
//Input as numbers (in milliseconds)
new Date(1608741010100); // 2020 December 23 17:30:10:100

//Example 4
//Input as ISO 8601
new Date("2020-12-23T00:00Z");

//Example 5
//Input with time zone specification
new Date("Dec 23 2020 17:30:10 -10:00")
new Date("Dec 23 2020 17:30:10 -1000")
new Date("Dec 23 2020 17:30:10 (EDT)")

//Example 6
//The current moment, specified in the user's local timezone
new Date(Date.now())