
document.getElementById("login").onclick = function(){
    document.getElementById("login").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((myresult) =>  {
        alert ("signed in successfully")
        window.location.href = "home.html";
    }).catch((error)=>{
        var errorMessage = error.message; 
        alert(errorMessage)
    })

    

}