input.onButtonPressed(Button.A, function () {
    Zaman += 100
})
input.onButtonPressed(Button.B, function () {
    Zaman += -100
})
let Zaman = 300
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(Zaman)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.pause(Zaman)
})
