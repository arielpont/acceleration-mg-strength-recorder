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
let loggin = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && loggin == false) {
        loggin = true
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Green))
        basic.showIcon(IconNames.Yes)
    } else if (input.buttonIsPressed(Button.A) && loggin == true) {
        loggin = false
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Red))
        basic.showIcon(IconNames.Square)
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
    	
    }
})
loops.everyInterval(0.005, function () {
    if (loggin == true) {
        datalogger.log(datalogger.createCV("strength", input.acceleration(Dimension.Strength)))
    }
})
