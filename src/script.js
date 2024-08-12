let emailInput = document.querySelector('#Email')
let button = document.querySelector('button')
let checkBox =document.querySelector('#checkBox')
let para =document.querySelector('#pra') 
let main =document.querySelector('#main') 
let heading = document.querySelector('h2')
let ThemeToggler = document.querySelector('.fa-solid')


let theme = false;

ThemeToggler.addEventListener('click',()=>{
    if(theme){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = '#222'
        theme = false
    }else{
        document.body.style.backgroundColor = '#222'
        document.body.style.color = 'white'
        theme = true
    }
})


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }



button.addEventListener('click',(e)=>{
    e.preventDefault()
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      e.preventDefault(); 
      alert('Please enter a valid email address')
    } else {
     heading.innerText="Thanks for Subscribing"
     heading.style.textAlign='center'
     heading.style.marginTop='20%'
     emailInput.value =''
     checkBox.checked = false
     para.style.display = 'none'
     main.style.display = 'none'
     button.style.display = 'none'
     document.body.style.backgroundColor = '#222'
     document.body.style.color = 'white'

     setTimeout(()=>{
       heading.innerText='Redirecting...'
     },3000)
     setTimeout(()=>{
        location.reload()
     },4000)
    }

})
 

