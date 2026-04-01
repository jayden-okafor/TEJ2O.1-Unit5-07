/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Mar 2026
 * This program moves the stepper motor back and forth
*/

// variable
let distanceToObject: number = 0

// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when the "A" button is clicked
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
    while (true) {

// get the distance using the sonar
        distanceToObject = sonar.ping(
            DigitalPin.P1, // trigger
            DigitalPin.P2, // echo
            PingUnit.Centimeters,
        )

// turns the sonar 180 degress. but since this is in a while loop, this runs forever. until the if block below is true
        robotbit.StpCarMove(1, 48)

// if distance is below 10 cm
        if (distanceToObject > 0 && distanceToObject <= 10) {
            basic.clearScreen()
            basic.showString(distanceToObject.toString() + ' cm')
            robotbit.StpCarMove(0, 48)
            basic.pause(1000)
            robotbit.StpCarMove(-10, 48)
            basic.pause(1000)
            robotbit.StpCarTurn(90, 48, 125)

            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
        }
    }
})