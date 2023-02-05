import { User } from "../user.js"

const form = document.getElementById('form')
const submit = document.getElementById('login')
const email = document.getElementById('email')
const password = document.getElementById('password')


email.addEventListener('change', () => {
    if (email.checkValidity() == false) {
        submit.disabled = true
        submit.style.cursor = 'not-allowed'
    } else {
        submit.disabled = false
        submit.style.cursor = 'pointer'
    }
})

password.addEventListener('change', () => {
    if (password.checkValidity() == false) {
        submit.disabled = true
        submit.style.cursor = 'not-allowed'
    } else {
        submit.disabled = false
        submit.style.cursor = 'pointer'
    }
})

function clearInputs(email, password) {
    email.value = ''
    password.value = ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    debugger
    const user = new User(email.value, password.value)
    const storageUser = JSON.parse(window.localStorage.getItem(email.value))
    debugger
    console.log(storageUser)
    if (storageUser == null) {
        const errorDiv = document.getElementsByClassName('not-found-hidden')[0]
        errorDiv.classList.remove('not-found-hidden')
        errorDiv.classList.add('not-found')
        return
    }

    if (user.equals(storageUser) == false) {
        const errorDiv = document.getElementsByClassName('not-found-hidden')[0]
        errorDiv.classList.remove('not-found-hidden')
        errorDiv.classList.add('not-found')
        return
    }


    window.sessionStorage.setItem('user', JSON.stringify(user))
    clearInputs(email, password)
    window.location.href = '/game/game.html'

})