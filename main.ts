input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("stop")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("P2")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("P1")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("P3")
})
radio.setGroup(1)
basic.forever(function () {
    if (control.deviceSerialNumber() % 2 == 0) {
        radio.setGroup(1)
    } else {
        radio.setGroup(1)
        radio.onReceivedString(function (name) {
            basic.showString(name)
        })
    }
})
