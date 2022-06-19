import { nav,fooot,logo } from "./navbarpro.js";
let d = document.getElementById("navbar");
d.innerHTML = nav();
let f = document.getElementById("footer");
f.innerHTML=fooot();
let l = document.getElementById("logos");
l.innerHTML=logo();
let get = JSON.parse(localStorage.getItem("get"));
let imgpro = document.getElementById("imgpro");
let pro = document.getElementById("profile");
let qa1 = document.querySelector("#QA1");
let qa2 = document.querySelector("#QA2");
let qa3 = document.querySelector("#QA3");
let qa4 = document.querySelector("#QA4");
let qa5 = document.querySelector("#QA5");
let qa6 = document.querySelector("#QA6");
let qa7 = document.querySelector("#QA7");
let k = (get) => {
  // console.log(get)
  let ti = document.getElementById("ti");
  ti.innerText = get.title;
  let l = document.getElementById("l");
  l.innerText = get.l;
  let na = document.querySelector("#nam");
  na.innerText = get.name;
  let main = document.getElementById("data");
  let i = document.createElement("img");
  i.src = get.img;
  pro.append(i);
  let pr = document.createElement("img");
  pr.src = get.profile_pick;
  imgpro.append(pr);
  let dis = document.createElement("p");
  // dis.innerText=get.dis1;
  dis.innerText = get.dis2;
  let q1 = document.createElement("h2");
  q1.innerHTML = get.q1;
  let as1 = document.createElement("p");
  as1.innerText = get.a1;
  as1.setAttribute("class","pp")
  qa1.append(q1);
 
  qa1.append(as1);
  let pic1 = document.getElementById("pic1");
  let img1 = document.createElement("img");
  img1.src = get.img1;
  let img2 = document.createElement("img");
  img2.src = get.img2;
  pic1.append(img1);
  pic1.append(img2);
  let q2 = document.createElement("h2");
  q2.innerHTML = get.q2;
  let as2 = document.createElement("p");
  as2.innerText = get.a2;
  as2.setAttribute("class","pp")
  qa1.append(q2);
  qa1.append(as2);
  let q3 = document.createElement("h2");
  q3.innerHTML = get.q3;
  let as3 = document.createElement("p");
  as3.innerText = get.a3;
  as3.setAttribute("class","pp")
  qa2.append(q3);
  qa2.append(as3);
  let pic2 = document.getElementById("pic2");
  let img3 = document.createElement("img");
  img3.src = get.img3;
  let img4 = document.createElement("img");
  img4.src = get.img4;

  pic2.append(img3);
  pic2.append(img4);

  let q4 = document.createElement("h2");
  q4.innerHTML = get.q4;
  let as4 = document.createElement("p");
  as4.innerText = get.a4;
  as4.setAttribute("class","pp")
  qa2.append(q4);
  qa2.append(as4);
  let q5 = document.createElement("h2");
  q5.innerHTML = get.q5;
  let as5 = document.createElement("p");
  as5.innerText = get.a5;
  as5.setAttribute("class","pp")
  qa3.append(q5);
  qa3.append(as5);
  let pic3 = document.getElementById("pic3");
  let img5 = document.createElement("img");
  img5.src = get.img5;
  let img6 = document.createElement("img");
  img6.src = get.img6;

  pic3.append(img5);
  pic3.append(img6);
  let q7 = document.createElement("h2");
  q7.innerHTML = get.q7;

  let as7 = document.createElement("p");
  as7.innerText = get.a7;
  as7.setAttribute("class","pp")
  qa4.append(q7);
  qa4.append(as7);
  var a = document.getElementById('twitter');
    a.href = get.twitter;
    var b = document.getElementById('facebook');
    a.href = get.facebook;
    var c = document.getElementById("linkedin")
    c.href=get.linkedin
};
k(get);
