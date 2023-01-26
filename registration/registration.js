const register = document.getElementById('register')

register.addEventListener('click', () => {
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const form = document.getElementById('form')
    
    const emailValue = email.value
    const passwordValue = password.value

    console.log(emailValue, passwordValue)
    console.log(form.valid)

})