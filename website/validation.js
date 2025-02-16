const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const password_input = document.getElementById('password-input')


function getLoginFormErrors(username, password){
    let errors = []
}
if(username == '' || username == null){
    errors.push('Username is required')
   firstname_input.parentElement.classList.add('incorrect') 
}
if(password == '' || password == null){
    errors.push('Password is required')
   password_input.parentElement.classList.add('incorrect') 
}

return errors;