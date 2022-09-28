let button =document.querySelector ('button')
let mainBody =document.querySelector('body')
let h1=document.querySelector('h1')
button.onclick =function (){
    if(mainBody.classList[0] == 'dark') {
        h1.style.color='black'
        button.innerText=' dark mood '
        mainBody.classList = "";
    } else{
        h1.style.color='white'
        button.innerText=' light mood '
        mainBody.classList = "dark";
    }
   
}