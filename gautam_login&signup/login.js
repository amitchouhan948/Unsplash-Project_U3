
// var data=JSON.parse(localStorage.getItem("usersignupdata"));
function myfunction()
{
    var userE=document.querySelector("#emailid").value;
    var userP=document.querySelector("#userpassword").value;
    
   var serach= JSON.parse(localStorage.getItem("userData"));

   serach.forEach(function(el){

    if(el.email==userE && el.userpassword==userP)
    {
        alert("loggin successfull")
        localStorage.setItem("userlogindata" , JSON.stringify(serach));
        window.location.href="../index.html"
        console.log(serach)
    }
    else{
        alert("email and password are not valid please signUp");
    }

   });

   

  
}