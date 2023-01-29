export class Shuffle {
    constructor(cardsContainer) {
        this.cardsContainer = cardsContainer
        const length = cardsContainer.length

        debugger
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor( Math.random() * length)
            let firstImage = this.cardsContainer[i].lastChild
            let secondImage = this.cardsContainer[randomNumber].lastChild
            const bufferSrc = firstImage.src

            firstImage.src = secondImage.src
            secondImage.src = bufferSrc
        }

    }

    getCardsContainer() {
        return this.cardsContainer
    }
}