const main = document.getElementById('main')
const closePopup = document.getElementById('close')
const dialog = document.getElementById('popup')

var firstCard
var secondCard
var counter = 0

const EASY_TABLE = 'easy_table'
const MEDIUM_TABLE = 'medium_table'
const HARD_TABLE = 'hard_table'

function checkEndGame() {
    const hiddenImages = document.querySelectorAll('.front')
    isEnd = true
    hiddenImages.forEach(image => {
        
        if (image.classList.contains('card')) {
            isEnd = false
        }
    })

    return isEnd
}


main.addEventListener('click', (e) => {

    const target = e.target
    const parent = target.parentElement

    if (target.classList.contains('card') && target.getAttribute('clickable') == 'true') {

        counter++
        parent.style.transform = 'rotateY(180deg)'
        target.classList.remove('card')

        if (counter == 1) {
            firstCard = target
        } else if (counter == 2) {
            secondCard = target
            counter = 0
            if (!hasSameSrc(firstCard.parentElement.querySelector('.card.front'), 
                            secondCard.parentElement.querySelector('.card.front'))) {
                rotateParents(firstCard, secondCard)
                firstCard.classList.add('card')
                secondCard.classList.add('card')
            } else {
                removeClassCard(firstCard.parentElement.querySelector('.card.front'),
                 secondCard.parentElement.querySelector('.card.front'))
                if (checkEndGame()) {
                    window.clearInterval(localStorage.getItem('interval'))
                    const score = document.querySelector('#dialog-main > p > span:last-child')
                    const minutes = document.getElementById('minutes')
                    const seconds = document.getElementById('seconds')
                    score.textContent = `${minutes.textContent} : ${seconds.textContent}`
                    
                    saveToTable(score)
                    
                    dialog.showModal()
                }
            }
        }
    }
})

function saveToTable(score) {
    const loggedUserEmail = JSON.parse(window.sessionStorage.getItem('user')) 
    console.log(loggedUserEmail)
    debugger
    if (loggedUserEmail == null) {
        alert('can not save the result')
        return
    }
    
    const level = document.querySelector('.underline')

    if (level.textContent == 'Easy') {
        let results = JSON.parse(window.localStorage.getItem(EASY_TABLE))
        if (results == null) {
            results = []
        }

        results.push({'email': loggedUserEmail['email'], 'result': score.textContent})
        window.localStorage.setItem(EASY_TABLE, JSON.stringify(results))

    } else if (level.textContent == 'Medium') {
        let results = JSON.parse(window.localStorage.getItem(MEDIUM_TABLE))
        if (results == null) {
            results = []
        }

        results.push({'email': loggedUserEmail['email'], 'result': score.textContent})
        window.localStorage.setItem(MEDIUM_TABLE, JSON.stringify(results))

    } else if (level.textContent == 'Hard') {
        let results = JSON.parse(window.localStorage.getItem(HARD_TABLE))
        if (results == null) {
            results = []
        }

        results.push({'email': loggedUserEmail['email'], 'result': score.textContent})
        window.localStorage.setItem(HARD_TABLE, JSON.stringify(results))
    }

}


function removeClassCard(card1, card2) {
    card1.classList.remove('card')
    card2.classList.remove('card')
}

function hasSameSrc(img1, img2) {
    return img1.src == img2.src
}

function rotateParents(element1, element2) {
    setTimeout(() => {
        element1.parentElement.style.transform = 'rotateY(360deg)'
        element2.parentElement.style.transform = 'rotateY(360deg)'
    } ,1000)

}

closePopup.addEventListener('click', () => {
    dialog.close()
})