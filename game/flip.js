const main = document.getElementById('main')

main.addEventListener('click', (e) => {
    const target = e.target
    if (!e.target.classList.contains('card')) {
        return
    }
    
    target.classList.toggle('flip')
})