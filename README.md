# Elevators

## The project can be view here:
https://guycohen85.github.io/Elevators/

## Plan an elevator system according to the following requirements:

- The building has 10 floors (including ground floor) and 5 elevators.
- Near each floor, present a green button to call an elevator

## Calling an elevator

- Change the “call” button to red, and change the text to “waiting”
- Identify the closet elevator to the floor, and send the elevator to that floor
  - There's a chance all the elevators will be occupied at that moment
  - Do not miss any calls (queue?)
- The elevator should move toward the select floor in a smooth movement
- Measure the time it took the elevator to reach the designated floor
- Change the elevator color to red

## Elevator reached the floor

- Make a sound when the elevator reaches the floor
- Change the elevator color to green
- Wait 2 seconds before moving to the next call (If exists)
- Change the button text to “arrived” and the design according to the design below
- After the 2 seconds, change the elevator color back to black, and change the
  button to “call”, with the initial design
