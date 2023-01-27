import {User} from "../User.js"

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

register.addEventListener('click', () => {
    
    if (email.value == null || password.value == null) {
        return
    }

})