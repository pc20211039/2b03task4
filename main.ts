let x_value = 0
let y_value = 0
input.onButtonPressed(Button.A, function () {
    x_value = 0
    for (let index = 0; index < 5; index++) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    y_value = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y_value)
        basic.pause(1000)
        basic.clearScreen()
        y_value += 1
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(x_value, 0)
        basic.pause(1000)
        x_value += 1
    }
    if (x_value > 4) {
        x_value = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, y_value)
        basic.pause(1000)
        y_value += 1
    }
    if (y_value > 4) {
        y_value = 0
    }
})
