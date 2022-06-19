
var logindata=JSON.parse(localStorage.getItem("userlogindata"));
var user=document.querySelector("#header");
import{navbar} from "../components/navbar.js"
if(logindata!==null)
{
let nav=document.getElementById("header")
nav.innerHTML=navbar();
}





