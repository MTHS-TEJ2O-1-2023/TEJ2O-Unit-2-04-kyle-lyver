/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2023
 * This program shows the temperature of a microbit
*/

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

let temperature = input.temperature()

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showNumber(input.temperature())
})
