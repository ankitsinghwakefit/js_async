/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

// "Partnah"
// "Howdy"

/* CHALLENGE 2 */

function delayedGreet() {
  
 setTimeout(()=> console.log("welcome"),3000);
  // ADD CODE HERE
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("hello riight away");
  setTimeout(()=> console.log("bye"),2);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

var myVar = setInterval(brokenRecord, 1000);
function brokenRecord() {
  // ADD CODE HERE
   console.log("hii again");
}


// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */


var loop = 0;
function limitedRepeat() {
  var myTime = setInterval(()=>{
    loop++;
    console.log("hii")
    if(loop>4){
      clearInterval(myTime);
    }
  }, 1000);
}
limitedRepeat();

// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
