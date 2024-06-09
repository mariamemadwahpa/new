let registername =document.getElementById("registername")
let registerEmail =document.getElementById("registerEmail")
let registerpassword= document.getElementById("registerpassword")
// let loginPassword= document.getElementById("loginPassword")
let registerDate= document.getElementById("registerDate")
let btnSignin =document.getElementById("btnSignin")
let allUserData = []

if(window.localStorage.getItem('users') !== null)
{
    allUserData = JSON.parse(window.localStorage.getItem('users') !== null)
}

btnSignin.addEventListener('click', function(){
    let userData ={
        UName : registername.value,
        UEmail : registerEmail.value,
        UPassword : registerpassword.value,
        UDate : registerDate.value,

    }
    allUserData.push(userData)
    window.localStorage.setItem('users' ,JSON.stringify(allUserData))
    // console.log(allUserData);
})
