
document.getElementById("register").onclick = function(){
    document.getElementById("register").style.display = "none";
    document.getElementById("btn1").style.display = "block";
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((myresult) =>  {
        alert ("user has been created successfully")
        window.location.href = "home.html";
    }).catch((error)=>{
        var errorMessage = error.message; 
        alert(errorMessage)
    })

    

}