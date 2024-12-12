datalogger.onLogFull(function () {
    log_full = true
    while (log_full == true) {
        basic.showString("Data log is FULL! Press A + B to clear")
        if (input.buttonIsPressed(Button.AB)) {
            datalogger.deleteLog(datalogger.DeleteType.Full)
            log_full = false
            basic.showIcon(IconNames.Yes)
            basic.pause(2000)
        }
    }
})
let log_full = false
log_full = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Blue))
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Blue))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(250)
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Black))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(250)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Yellow))
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Yellow))
            basic.pause(500)
            basic.showIcon(IconNames.No)
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Black))
            basic.clearScreen()
        }
        datalogger.deleteLog(datalogger.DeleteType.Full)
        basic.clearScreen()
    } else {
        datalogger.log(datalogger.createCV("strength", input.acceleration(Dimension.Strength)))
        basic.pause(0.005)
    }
})
