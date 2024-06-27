const username =document.querySelector(".name");
// console.log(username,value);
// const value =username.value
// console.log(value);
const uname = document.querySelector("input")
// console.log(uname);
const Btn =document.querySelector(".button")
// console.log(Btn);
Btn.addEventListener("Click", () =>{
    const  value = uname.value;
    console.log(value);
    localStorage.setItem("name", value)
});

window.addEventListener("load", () =>{
    const value =localStorage.getItem('name')
    username.innerText =value
})