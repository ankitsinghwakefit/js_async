// Challenge 1

function sayHello() {
   setTimeout(function(){
     console.log("Hello!");
   },1000);
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
function prom(){
  return new promise(function(resolve,reject){
    setTimeout(resolve("resolved"),1000); 
  }).then(res => console.log(res));
}

// Should print out "Resolved!"
// ADD CODE HERE


// Challenge 3

var pre = function(){
  return new Promise(function(resolve, reject) {
  reject("reject");
}).catch(err=>{
  console.log(err);
})
}
pre();

// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4

var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve("Promise has been resolved!");
});
promise.then(err => {
  console.log(err);
})
// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!));
// console.log("I'm not the promise!");

// "I'm not the promise!"
//"Promise has been resolved!"



// Challenge 5
function delay(){
 return new promise(function(resolve, reject){
  resolve(setTimeout(sayHello() {
    console.log("hello");
  }),1000);
   
 })
}




// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
// var secondPromise =
// var firstPromise =


// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  console.log(fakeAPICall(1));
}