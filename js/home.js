document.getElementById("sign").onclick = function(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("btn3").style.display = "block";
    // var email = document.getElementById("mail").value;
    // var password = document.getElementById("pass").value;

    firebase.auth().signOut().then((myresult) =>  {
        alert ("sign out successfull")
        document.getElementById("btn3").style.display = "none";
        document.getElementById("sign").style.display = "block";
        window.location.href= "login.html"
    }).catch((error)=>{
        var errorMessage = error.message; 
        alert(errorMessage)
    })

    

}