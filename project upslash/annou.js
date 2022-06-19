import {nav,fooot,logo} from "./navbarpro.js"

let n = document.getElementById("navbar")
n.innerHTML=nav();
let f = document.getElementById("footer")
f.innerHTML=fooot();
let l = document.getElementById("logos");
l.innerHTML=logo();