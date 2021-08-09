function onPageLoad(){
    hideRegister();
    hideLogin();
}

function hideRegister(){
    let regForm = document.getElementsByClassName("formContainer");
    regForm[0].style.visibility = "hidden"; 
    
}

function showRegister(){
    let regForm = document.getElementsByClassName("formContainer");
    regForm[0].style.visibility = "visible";            
}
function hideLogin(){
    document.getElementsByClassName("login")[0].style.visibility = "hidden";
}

function showLogin(){
    document.getElementsByClassName("login")[0].style.visibility = "visible";
}

function hideButtons(){
    let buttonDiv = document.getElementsByClassName("signUpLoginButtons");
    //buttonDiv[0].style.visibility = "hidden";
    buttonDiv[0].style.display = "none";
}

function showButtons(){
    let buttonDiv = document.getElementsByClassName("signUpLoginButtons");
    //buttonDiv[0].style.visibility = "visible";
    buttonDiv[0].style.display = "block";
}

function hideImage(){
    let galacticImage = document.getElementById("galactic_image");
    galacticImage.style.visibility = "hidden";
}

function showImage(){
    let galacticImage = document.getElementById("galactic_image");
    galacticImage.style.visibility = "visible";
}

function showError(){
    let errMsg = document.getElementsByClassName("errorMessage");
    errMsg[0].style.visibility = "visible"; 
}

function hideError(){
    let errMsg = document.getElementsByClassName("errorMessage");
    errMsg[0].style.visibility = "hidden";  
}


function signUpFunc(){
    showRegister();
    hideButtons();
    //hideImage();
    document.getElementById("fname").style.border ="solid 1px #6a6d73";
    document.getElementById("errFirstName").innerText = "";
    document.getElementById("lname").style.border ="solid 1px #6a6d73";
    document.getElementById("errLastName").innerText = "";
    document.getElementById("email").style.border ="solid 1px #6a6d73";
    document.getElementById("errEmail").innerText = "";
    document.getElementById("password1").style.border ="solid 1px #6a6d73";
    document.getElementById("errPasswordOne").innerText = "";
    document.getElementById("password2").style.border ="solid 1px #6a6d73";
    document.getElementById("errPasswordTwo").innerText="";


    const myForm = document.getElementById("form_01");
    myForm.reset();    
}

function cancelRegister(){
    showButtons();
    hideRegister();
    //showImage();
}
function loginFunc(){
    hideButtons();
    hideRegister();
    showLogin();
}

function CancelMain(){
    showButtons();
    hideRegister();
    hideLogin();
}

function Register(){
   //Here we shall validate all the fields before saving.
   var errorExists = false;
   //Check for First Name
   let fName = document.getElementById("fname"); 
   let errFName = document.getElementById("errFirstName");
   if(fName.value.trim()===""){
    fName.style.border = "solid 1px red";
    errFName.innerText = "First Name cannot be blank";
    errorExists = true;
   }else{
    fName.style.border = "solid 1px #6a6d73";
    errFName.innerText = "";
    
   }
   //Check for Second Name
   let lName = document.getElementById("lname");
   let errlName = document.getElementById("errLastName");
   if(lName.value.trim()===""){
       lName.style.border = "solid 1px red";
       errlName.innerText = "Last Name cannot be blank";
       errorExists = true;
    }else{
        lName.style.border = "solid 1px #6a6d73";
        errlName.innerText = "";
    }
    //Check for email address
    let email = document.getElementById("email");
    let errEmail = document.getElementById("errEmail");
    var regex = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]{2,10})?$/;
    
    if(regex.test(email.value)){
        email.style.border = "solid 1px #6a6d73";
        errEmail.innerText = "";
    }else{
        email.style.border = "solid 1px red";
        errEmail.innerText = "Invalid Email Address";
        errorExists = true;
    }
    //Check for passwords. At first check for blank password. After that for min length
    let psswd1 = document.getElementById("password1");
    let errPsswdOne = document.getElementById("errPasswordOne");
    if(psswd1.value.trim()===""){
        psswd1.style.border = "solid 1px red";
        errPsswdOne.innerText = "Password cannot be blank";
        errorExists = true;
    }else{
        if(psswd1.value.length<8){
            psswd1.style.border = "solid 1px red";
            errPsswdOne.innerText = "Password must be at least 8 char long.";
            errorExists = true;
        }else{
            psswd1.style.border = "solid 1px #6a6d73"
            errPsswdOne.innerText = "";
        }
    }
    //Check for second password.
    let psswd2 = document.getElementById("password2");
    let errPasswordTwo = document.getElementById("errPasswordTwo");
    if(psswd2.value.trim()===""){
        psswd2.style.border = "solid 1px red";
        errPasswordTwo.innerText = "Password cannot be blank";
        errorExists = true;
    }else{
        if(psswd2.value.length<8){
            psswd2.style.border = "solid 1px red";
            errPasswordTwo.innerText = "Password must be at least 8 char long.";
            errorExists = true;
        }else{
            if(psswd1.value===psswd2.value){
                psswd2.style.border = "solid 1px #6a6d73"
                errPasswordTwo.innerText = "";
            }else{
                psswd2.style.border = "solid 1px red";
                errPasswordTwo.innerText = "Passwords are not matching.";
                errorExists = true;
            }
        }
    }
    //Check password matching.
    


   


   
   //console.log(document.getElementById("email").value);
   //console.log(document.getElementById("password1").value);
   //console.log(document.getElementById("password2").value);






   
   if(!errorExists){
    showButtons();
    hideRegister();
    //hideError();
    //showImage();
   }
    
   
}

document.getElementById("signUp").addEventListener("click", signUpFunc);
document.getElementById("cancelReg").addEventListener("click", cancelRegister);
document.getElementById("register").addEventListener("click", Register);
document.getElementById("logIn").addEventListener("click",loginFunc);
document.getElementById("CancelMain").addEventListener("click",CancelMain);