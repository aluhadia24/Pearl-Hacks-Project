const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    errors = getLoginFormErrors(username_input.value, password_input.value)

function getLoginFormErrors(username, password){
    let errors = []
    if(username.length == 0){
        errors.push('Username is required')
       username_input.parentElement.classList.add('incorrect') 
    }
       if(password.length == 0){
        errors.push('Password is required')
       password_input.parentElement.classList.add('incorrect') 
       }   
       return errors;
}


})
    

if(errors.length > 0){
    e.preventDefault();
    error_message.InnerText = errors.join(". ")
    
}
