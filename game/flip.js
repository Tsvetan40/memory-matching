const main = document.getElementById('main')
const closePopup = document.getElementById('close')
const dialog = document.getElementById('popup')

var firstCard
var secondCard
var counter = 0

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
                    dialog.showModal()
                }
            }
        }
    }
})

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