let score = 0
input.onButtonPressed(Button.A, function () {
    score = score + 1
})
input.onButtonPressed(Button.B, function () {
    score = 0
})
basic.forever(function () {
    basic.showNumber(score)
})
