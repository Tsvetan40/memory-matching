const main = document.getElementById('main')

main.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('card')) {
       const parent =  target.parentElement
       parent.classList.toggle('flip')
    }
})