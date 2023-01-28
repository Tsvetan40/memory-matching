import { ImageSelector } from './image-selector.js'

const EASY_NUMBER = 16
const MEDIUM_NUMBER = 32
const HARD_NUMBER = 64

const levels = document.querySelectorAll('.level')
const main = document.getElementById('main')
const start = document.getElementById('start')

function createImage(image) {
    const backImage = document.createElement('img')
    const frontImage = document.createElement('img')

    backImage.classList.add('card')
    backImage.classList.add('back')
    backImage.src = './../static/pictures/back-card.png'

    frontImage.classList.add('card')
    frontImage.classList.add('front')
    frontImage.src = image

    const div = document.createElement('div')
    div.classList.add('card-container')
    div.appendChild(backImage)
    div.appendChild(frontImage)

    main.appendChild(div)
}

function initiolizeMain(number) {
    
    const imageSelector = new ImageSelector(number / 2)
    const imagesSelector = imageSelector.getImages()

    const images = []
    
    imagesSelector.forEach(image => {
        images.push(image)
        images.push(image)
    })


    images.forEach(image => {
        createImage(image)
    })

}

levels.forEach(level => {
    level.addEventListener('click', (e) => {
        const target = e.target
        target.classList.toggle('underline')
    })
})

start.addEventListener('click', () => {
    levels.forEach(level => {
        if (level.firstChild.classList.contains('underline')) {
            if (level.firstChild.classList.contains('easy')) {
                main.classList.add('easy-main')
                initiolizeMain(EASY_NUMBER)
            } else if (level.firstChild.classList.contains('medium')) {
                main.classList.add('medium-main')
                initiolizeMain(MEDIUM_NUMBER)
            } else if (level.firstChild.classList.contains('hard')) {
                main.classList.add('hard-main')
                initiolizeMain(HARD_NUMBER)
            }
        }
    })
})