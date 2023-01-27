import {User} from "../User.js"

const form = document.getElementById('form')
const register = document.getElementById('registration')
const email = document.getElementById('email')
const password = document.getElementById('password')


password.addEventListener('keydown', () => {
    if (email.checkValidity() == false) {
        register.style.cursor = 'not-allowed'
        register.disabled = true
    } else {
        register.style.cursor = 'pointer'
        register.disabled = false

    }
})

email.addEventListener('keydown', () => {
    if (email.checkValidity() == false) {
        register.style.cursor = 'not-allowed'
        register.disabled = true
    } else {
        register.style.cursor = 'pointer'
        register.disabled = false

    }
})

form.addEventListener('submit', (e) => {
    
    debugger
    if (email.value == "" || password.value == "") {
        e.preventDefault()
    }

    const divError = document.getElementsByClassName('error-hidden')[0]
    
    if (localStorage.getItem(email.value) != null) {
        divError.classList.add('error')

        e.preventDefault()
    
    } else {
        if (divError.classList.contains('error')) {
            divError.classList.remove('error')
        }
    }
    

    window.localStorage.setItem(email.value, new User(email.value, password.value))
    return true
})