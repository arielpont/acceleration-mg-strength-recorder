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
        basic.pause(500)
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Black))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Yellow))
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Yellow))
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
            sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedB), sb.color(SBColor.Black))
        }
        datalogger.deleteLog(datalogger.DeleteType.Full)
    } else {
        datalogger.log(datalogger.createCV("strength", input.acceleration(Dimension.Strength)))
        basic.pause(0.005)
    }
})