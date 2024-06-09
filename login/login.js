let registername =document.getElementById("registername")
let registerpassword= document.getElementById("registerpassword")
let UseruserName =document.getElementById("UseruserName")
let loginPassword= document.getElementById("loginPassword")
let localStorageData;
let butSign = document.getElementById("butSign")
if (window.localStorage.getItem('users' )!== null)
{
    localStorageData = JSON.parse(window.localStorage.getItem('users'));
}
butSign.addEventListener("click" , function () {
    localStorageloopData();
    
})

const localStorageloopData= ()=>{
    for (let i = 0; i < localStorageData.length; i++) {
        console.log(localStorageData[i]);
        if (registername.value === localStorageData[i].UseruserName && registerpassword.value == localStorageData[i].loginPassword) {
            console.log("hello");
            
        }
        else
        {
            alert("hiii")
        }
    }
}

// let linkNavBar = document.getElementById("linkNavBar");
// let icon = document.getElementById("icon");
// icon.addEventListener("click" , function(){
//     linkNavBar.style.fontSize=`20px`

// // document.linkNavBar.style=`    font-size: 20px;`
// })
