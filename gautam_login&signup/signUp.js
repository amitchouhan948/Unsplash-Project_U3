
document.querySelector("form").addEventListener("submit" ,signUPfunction);

var array=JSON.parse(localStorage.getItem("userData"))||[];

function signUPfunction()
{
    event.preventDefault();
    var user_Fname=document.querySelector(".user_fname").value;
    var user_Lname=document.querySelector(".user_lname").value;
    var useremail=document.querySelector(".email").value;
    var userUsername=document.querySelector(".username").value;
    var userPassword=document.querySelector(".password").value;

    var userobj={
        Fname:user_Fname,
        Lname:user_Lname,
        email:useremail,
        username:userUsername,
        userpassword:userPassword,
    }

    array.push(userobj)
    console.log(array)

 
   localStorage.setItem("userData",JSON.stringify(array))

   window.location.href="login.html"
}