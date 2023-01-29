const start = document.getElementById('start')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const restart = document.getElementById('restart')
var myInterval

start.addEventListener('click', startStopWatch)

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

restart.addEventListener('click', () => {
    clearInterval(myInterval)
})