let numero = 0
input.onGesture(Gesture.Shake, function () {
    numero = randint(1, 2)
    if (numero == 1) {
        basic.showString("1")
    }
    if (numero == 2) {
        basic.showString("2")
    }
})
