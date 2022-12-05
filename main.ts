let Hungeriness = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        Hungeriness = Hungeriness + 17
        basic.showNumber(Hungeriness)
    } else if (input.buttonIsPressed(Button.B)) {
        Hungeriness = 0
        basic.showNumber(Hungeriness)
    }
    
})
