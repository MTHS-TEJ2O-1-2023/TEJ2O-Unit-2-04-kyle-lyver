/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Sep 2023
 * This program shows the temperature of a microbit
*/

basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

//variable
let temperature : number

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showNumber(input.temperature())
})
