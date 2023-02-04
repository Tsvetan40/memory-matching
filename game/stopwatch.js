import { Shuffle } from './shuffle.js'

const start = document.getElementById('start')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const restart = document.getElementById('restart')
var myInterval


async function startStopWatch() {
    let secondsNumber = 0
    let minutesNumber = 0
    
    myInterval = setInterval(() => {
        secondsNumber++;
        if (secondsNumber == 60) {
            secondsNumber = 0
            minutesNumber ++
            if (minutesNumber < 10) {
                minutes.textContent =  `0${minutesNumber}`
            } else {
                minutes.textContent = minutesNumber
            }

        }
        if (secondsNumber < 10) {
            seconds.textContent = `0${secondsNumber}`
        } else {
            seconds.textContent = secondsNumber
        }

    }, 1000)

}

function normaliseCards(shuffledContainers) {
    
    const frontCards = document.querySelectorAll('.front')

    for (let i = 0; i < frontCards.length; i++) {
        
        console.log(frontCards[i], shuffledContainers[i])
        frontCards[i].src = shuffledContainers[i].lastChild.src
        
        if (!frontCards[i].classList.contains('card')) {
            frontCards[i].classList.add('card')
            frontCards[i].parentElement.style.transform = 'rotateY(360deg)'
        }
    }

    const backCards = document.querySelectorAll('.back')
    backCards.forEach(card => {
        if (!card.classList.contains('card')) {
            card.classList.add('card')
        }
    })
}

start.addEventListener('click', startStopWatch)

restart.addEventListener('click', () => {
    seconds.textContent = '00'
    minutes.textContent = '00'
    clearInterval(myInterval)

    const divContainers = document.querySelectorAll('.card-container')
    
    const shuffle = new Shuffle(divContainers)
    const shuffledContainers = shuffle.getCardsContainer()

    normaliseCards(shuffledContainers)
    startStopWatch()
})