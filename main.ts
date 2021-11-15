let nombre = 0
let état_actuel = 0
let état_passé = 0
basic.forever(function () {
    état_passé = pins.digitalReadPin(DigitalPin.P16)
    if (état_actuel != état_passé) {
        if (état_actuel == 1) {
            nombre += 1
        }
    }
    état_passé = état_actuel
    basic.showNumber(nombre)
})
