let Hungeriness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Hungeriness = Hungeriness + 1
        basic.showNumber(Hungeriness)
    } else if (input.buttonIsPressed(Button.B)) {
        Hungeriness = 0
        basic.showNumber(Hungeriness)
    }
})
