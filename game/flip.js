const main = document.getElementById('main')


var firstCard
var secondCard
var counter = 0
main.addEventListener('click', (e) => {
    const target = e.target
    target.classList.remove('card')
    const parent = target.parentElement

    if (target.classList.contains('card') && target.getAttribute('clickable') == 'true') {

        counter++
        parent.style.transform = 'rotateY(180deg)'

        if (counter == 1) {
            firstCard = target
        } else if (counter == 2) {
            secondCard = target
            counter = 0
            if (!hasSameSrc(firstCard.parentElement.querySelector('.card.front'), 
                            secondCard.parentElement.querySelector('.card.front'))) {
                rotateParents(firstCard, secondCard)
            } else {
                firstCard.classList.add('card')
                secondCard.classList.add('card')
            }
        }
    }
})

function hasSameSrc(img1, img2) {
    return img1.src == img2.src
}

function rotateParents(element1, element2) {
    setTimeout(() => {
        element1.parentElement.style.transform = 'rotateY(360deg)'
        element2.parentElement.style.transform = 'rotateY(360deg)'
    } ,1000)

}

// console.log(target)
// console.log('clickable=' + target.getAttribute('clickable'))