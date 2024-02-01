// 6 Instruction: 

// - Create a 'Elevator' object for 'Practice 5'. Use a constructor and methods in class. Initiate code: 

// // Insert your code here

// Creating an instance of the Elevator class
const myElevator = new Elevator(20, -2);

// Using elevator methods
myElevator.goUp();
myElevator.displayFloor(); // Output: Current floor: 1

myElevator.goDown();
myElevator.displayFloor(); // Output: Current floor: 0

myElevator.goToFloor(15); // Output: Invalid floor. Please choose a floor between -2 and 20.

myElevator.goToFloor(5);
myElevator.displayFloor(); // Output: Current floor: 5
