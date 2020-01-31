// Using XMLHttpRequest and Promise write your own implementation of browesrs fetch method.
// 1. It takes two parameter 'url' and type of request (GET | POST)
// 2. Returns a promise
// 3. Resolve the promise when data is fetched (onload)
// 4. Reject the promise when error occured (onerror)

function fetchData(url, method) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.responseType = "json";
  xhr.onload = function(){
    console.log(xhr.response);
  }
  xhr.onerror = function(){
    console.log("err");
  }
  xhr.send();
  return new Promise(function(Resolve,Reject){
    Resolve(xhr.onload);
    Reject(xhr.onerror);
  })
}
fetchData("https://api.github.com/users/nnnkit", "GET");
// fetchData("https://www.reddit.com/api/v1/me", "GET");
