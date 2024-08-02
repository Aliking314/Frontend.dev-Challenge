let emailInput = document.querySelector('#Email')
let button = document.querySelector('button')
let checkBox =document.querySelector('#checkBox')
let para =document.querySelector('#pra') 
let main =document.querySelector('#main') 
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

  function validateCheckbox() {
    checkBox.value.checked = true;
  }

button.addEventListener('click',(e)=>{
    e.preventDefault()
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      e.preventDefault(); 
      alert('Please enter a valid email address')
    } else {
     alert('Thank you for subscribing')
     location.reload()
    }
    validateCheckbox()
})


