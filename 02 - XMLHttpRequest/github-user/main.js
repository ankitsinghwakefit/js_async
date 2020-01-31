var btn = document.querySelector("button");
var imgbox = document.querySelector(".img");
var form = document.querySelector(".form");
var img = document.querySelector(".img");

function takeValue(event){
    event.preventDefault();
    var input = document.querySelector(".input");
    var user = input.value;
    console.dir(user);
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.github.com/users/"+user);
    xhr.responseType = "json";
    
    var para = document.createElement("p");
    var para1 = document.createElement("p");
    var para2 = document.createElement("p");
    var para3 = document.createElement("p");
    var para4 = document.createElement("p");
    xhr.onload = function(){
        var image = document.createElement("img");
        var data = xhr.response;
        console.log(data);
        image.src = data.avatar_url;
        para.innerHTML = "Name : "+data.login;
        para1.innerHTML = "Bio : "+data.bio;
        para2.innerHTML = "Blog : "+data.blog;
        para3.innerHTML = "followers : "+data.followers;
        para4.innerHTML = "following : "+data.following;
        img.append(image,para,para1,para2,para3,para4);
        var repoUrl = data.repos_url;
        var repo = new XMLHttpRequest();
        repo.open("GET",repoUrl);
        repo.responseType = "json";
        repo.onload = function() {
            // var div = document.createElement("div");
            // var h = document.createElement("h2");
            // var p = document.createElement("p");
            var repository = repo.response;
            console.log(repository);
            for(let x=0; x<repository.length; x++){
                var div = document.createElement("div");
                div.classList = "newdiv";
                var h = document.createElement("h2");
                var p = document.createElement("p");
                var p1 = document.createElement("p");
                h.innerHTML = repository[x].name;
                p.innerHTML = repository[x].description;
                p1.innerHTML = "🛠 "+repository[x].language;
                p1.classList = "p1";
                img.append(div);
                div.append(h,p,p1);
            }
            // h.innerHTML = repository[0].name;
            // img.append(div);
            // div.append(h,p);
        }
        repo.send();
    }
    xhr.send();
}
btn.addEventListener("click",takeValue);




// function takeValue(event){
//     event.preventDefault();
//     var input = document.querySelector(".input");
//     var user = input.value;
//     fetch("https://api.github.com/users/"+user).then(res =>{
//        res.json;
//     }).then(resp => console.log(resp));
//     console.log(user);
    
// }
// btn.addEventListener("click",takeValue);

// var btn = document.querySelector("button");
// var imgbox = document.querySelector(".img");
// var form = document.querySelector(".form");
// var img = document.querySelector(".img");

// function takeValue(event){
//     event.preventDefault();
//     var input = document.querySelector(".input");
//     var user = input.value;
//     console.dir(user);
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET","https://api.github.com/users/"+user);
//     xhr.responseType = "json";
    
//     var para = document.createElement("p");
//     var para1 = document.createElement("p");
//     var para2 = document.createElement("p");
//     var para3 = document.createElement("p");
//     var para4 = document.createElement("p");
//     xhr.onload = function(){
//        var image = document.createElement("img");
//         var data = xhr.response;
//         console.log(data);
//         image.src = data.avatar_url;
//         para.innerHTML = "Name : "+data.login;
//         para1.innerHTML = "Bio : "+data.bio;
//         para2.innerHTML = "Blog : "+data.blog;
//         para3.innerHTML = "followers : "+data.followers;
//         para4.innerHTML = "following : "+data.following;
//         img.append(image,para,para1,para2,para3,para4);
//     }
//     xhr.send();
// }
// btn.addEventListener("click",takeValue);