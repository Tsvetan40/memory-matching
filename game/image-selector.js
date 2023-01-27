export class ImageSelector {
    constructor(number) {
        this.images = ['./../static/pictures/ant.png', 
        './../static/pictures/bat.png',
        './../static/pictures/cactus.png',
        './../static/pictures/cat.png',
        './../static/pictures/coral.png',
        './../static/pictures/crocodile.png',
        './../static/pictures/deer.png',
        './../static/pictures/dog.png',
        './../static/pictures/dolphin.png',
        './../static/pictures/eagle.png',
        './../static/pictures/elephant.png',
        './../static/pictures/four-leaf.png',
        './../static/pictures/GOAT.png',
        './../static/pictures/hamster.png',
        './../static/pictures/kangaroo.png',
        './../static/pictures/lion.jpg',
        './../static/pictures/lizard.png',
        './../static/pictures/octopus.png',
        './../static/pictures/palm.png',
        './../static/pictures/parrot.png',
        './../static/pictures/penguin.png',
        './../static/pictures/polar-bear.png',
        './../static/pictures/rhino.png',
        './../static/pictures/scorpio.png',
        './../static/pictures/shamrock.png',
        './../static/pictures/shark.png',
        './../static/pictures/shell.png',
        './../static/pictures/snail.png',
        './../static/pictures/T-rex.png',
        './../static/pictures/whale.png',
        './../static/pictures/wolf.png',
        './../static/pictures/zebra.png',
        ]
        
        //all pictures included
        if (number == 32) {
            return
        }

        let totalSize = 32;
        let numberRemovals = 32 - number
        const count = 1
        while(numberRemovals != 0) {
            const index = Math.random() * totalSize
            this.images.splice(index, 1)
            totalSize--
            numberRemovals--
        }

    }

    getImages() {
        return this.images
    }
}