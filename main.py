Hungeriness = 0

def on_forever():
    global Hungeriness
    if input.button_is_pressed(Button.A):
        Hungeriness = Hungeriness + 17
        basic.show_number(Hungeriness)
    elif input.button_is_pressed(Button.B):
        Hungeriness = 0
        basic.show_number(Hungeriness)
basic.forever(on_forever)
