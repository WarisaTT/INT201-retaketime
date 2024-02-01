// 5.

// Instruction:

// -	Create class Elevator with the following specifications:

// Class Elevator: Constructor

// ¥ Constructor(maxFloor, minFloor): This initializes the properties 'maxFloor', 'minFloor' and set 'currentFloor' to 0 

// Properties

// ¥ currentFloor: The floor where the elevator currently is. , type number 

// ¥ maxFloor: The highest floor the elevator can go to. , type number 

// ¥ minFloor: The lowest floor the elevator can go to , type number Methods 

// ¥	goUp(): Increases currentFloor by 1, but not above maxFloor. 

// ¥	goDown(): Decreases currentFloor by 1, but not below minFloor. 

// ¥	goToFloor(floor): Takes a floor number and sets currentFloor to that floor if it's within range. 

// ¥	displayFloor(): Prints the current floor to the console. 

class Elevator {
    constructor(maxFloor, minFloor) {
        // 5.1 Initialize properties 'maxFloor', 'minFloor' and set 'currentFloor' to 0
        this.currentFloor = 0;
        this.maxFloor = maxFloor || 10;
        this.minFloor = minFloor || 0;
    }

    // 5.2 Increase currentFloor by 1, but not above maxFloor.
    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++;
        } else {
            console.log('Cannot go up. Already on the top floor.');
        }
    }

    // 5.3 Decrease currentFloor by 1, but not below minFloor.
    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--;
        } else {
            console.log('Cannot go down. Already on the ground floor.');
        }
    }

    // 5.4 Takes a floor number and sets currentFloor to that floor if it's within range.
    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor;
        } else {
            console.log(`Invalid floor. Please choose a floor between ${this.minFloor} and ${this.maxFloor}.`);
        }
    }

    // 5.5 Prints the current floor to the console.
    displayFloor() {
        console.log(`Current floor: ${this.currentFloor}`);
    }
}

// Example usage:
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
