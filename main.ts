input.onButtonPressed(Button.A, function () {
    état_actuel = 0
    basic.clearScreen()
})
let état_actuel = 0
état_actuel = 0
let état_passé = 0
basic.forever(function () {
    état_passé = pins.digitalReadPin(DigitalPin.P2)
    if (état_actuel != état_passé) {
        if (état_actuel == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
    }
    état_passé = état_actuel
})
