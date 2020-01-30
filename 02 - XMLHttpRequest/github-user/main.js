var btn = document.querySelector("button");
var imgbox = document.querySelector(".img");
var form = document.querySelector(".form");


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












var xhr = new XMLHttpRequest();
    console.dir(xhr);
    xhr.open("GET","https://api.github.com/users/"+user);
    xhr.responseType = "json";
    // var img = document.createElement("img");
    // var para = document.createElement("p");
    // var para1 = document.createElement("p");
    // var para2 = document.createElement("p");
    xhr.onload = function(){
       
        var data = xhr.response;
        console.log(data);
        img.src = data.avatar_url;
        para.innerHTML = data.login;
        para1.innerHTML = data.bio;
        para2.innerHTML = data.blog;
        imgbox.append(img,para);
        // para.appendChild(para1);
        // para1.appendChild(para2);
    }
    xhr.send();
