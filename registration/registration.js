import {User} from "../User.js"

const form = document.getElementById('form')
const register = document.getElementById('registration')
const email = document.getElementById('email')
const password = document.getElementById('password')


password.addEventListener('keydown', () => {
    if (password.checkValidity() == false) {
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
    e.preventDefault()    
    if (email.value == "" || password.value == "") {
        return
    }

    const divError = document.getElementsByClassName('error-hidden')[0]
    
    if (localStorage.getItem(email.value) != null) {
        divError.classList.add('error')
        return

    } else {
        if (divError.classList.contains('error')) {
            divError.classList.remove('error')
        }
    }
    
    window.sessionStorage.setItem('user', JSON.stringify(new User(email.value, password.value)))
    window.localStorage.setItem(email.value, JSON.stringify (new User(email.value, password.value)))
    
    email.value = ''
    password.value = ''
    window.location.href = '/game/game.html'
})