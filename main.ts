/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Mar 2026
 * This program moves the stepper motor back and forth
*/

// show happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// make sure the car is stopped before initilization
robotbit.StpCarMove(0, 48)

// when the "A" button is clicked
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)

    // repeats over and over again
    while (true) {

        // get the distance using the sonar
        const distance = sonar.ping(
            DigitalPin.P1, // trigger
            DigitalPin.P2, // echo
            PingUnit.Centimeters,
        )

        // if distance is below 10 cm
        if (distance > 0 && distance <= 10) {
            basic.clearScreen()
            basic.showString(distance.toString() + ' cm')
            basic.showIcon(IconNames.Yes)
            robotbit.StpCarMove(0, 48) // stop the car
            basic.pause(1000)
            robotbit.StpCarMove(-10, 48) // reverse 10 cm
            basic.pause(1000)
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4) // turn 90 degrees
        } else {
            robotbit.StpCarMove(1, 48)
        }
    }
})
