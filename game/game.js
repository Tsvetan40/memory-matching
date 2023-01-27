import { ImageSelector } from "./image-selector.js"

const EASY_NUMBER = 16
const MEDIUM_NUMBER = 32
const HARD_NUMBER = 64


const start = document.getElementById('start')
const ul = document.getElementById('ul-container')
const main = document.getElementById('main')


function styleMain(levelNumber) {
    const imageSelector = new ImageSelector(levelNumber / 2)
    const imgArr = Array.from( imageSelector.getImages())
    
    imgArr.forEach(image => {
        
        const div = document.createElement('div')
        div.classList.add('grid-inner')
        const img = document.createElement('img')

        img.src = image
        div.appendChild(img)
        main.appendChild(div)
    })

    imgArr.forEach(image => {
        
        const div = document.createElement('div')
        div.classList.add('grid-inner')
        const img = document.createElement('img')

        img.src = image
        div.appendChild(img)
        main.appendChild(div)
    })

    if (levelNumber == EASY_NUMBER) {
        main.classList.add('easy-main')
    } else if (levelNumber == MEDIUM_NUMBER) {
        main.classList.add('medium-main')
    } else {
        main.classList.add('hard-main')
    }
}

ul.addEventListener('click', (e) => {
    const level = e.target
    if (level.classList.contains('easy')) {
        level.classList.toggle('underline')
        main.classList.toggle('easy')
        //to do remove from other underlines!
    } else if (level.classList.contains('medium')) {
        level.classList.toggle('underline')
    } else if (level.classList.contains('hard')) {
        level.classList.toggle('underline')
    }
})

start.addEventListener('click', () => {

    const li = document.getElementsByClassName('nav-item')
    const liArr = Array.from(li)
    let hasLevel = false
    
    debugger
    liArr.forEach(item => {
        
        if(item.firstChild.classList.contains('underline')) {
            hasLevel = true
            if (item.firstChild.classList.contains('easy')) {
                debugger
                styleMain(EASY_NUMBER)
            
            } else if (item.firstChild.classList.contains('medium')) {
                debugger
                styleMain(MEDIUM_NUMBER)
            
            } else {
                debugger
                styleMain(HARD_NUMBER)
            }
        }
        
    })



    if (hasLevel == false) {
        alert('No level selected! Please select level!')
        return
    }
})