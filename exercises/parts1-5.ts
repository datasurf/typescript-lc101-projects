import { SpaceLocation } from './SpaceLocation'

// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let spacecraftName: string = 'Determination';
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesXKilometer: number = 0.621;
let speedMph2: number = 17500;


// Part 2: Print Days to Mars

let milesToMars: number = (kilometersToMars * milesXKilometer);
let hoursToMars: number = (milesToMars / speedMph2);
let daysToMars: number = (hoursToMars / 24);

// Code an output statement here (use a template literal):

console.log(`The ${spacecraftName} is so fast it can reach Mars in ${daysToMars} days.`);

// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = (kilometersAway * milesXKilometer);
    let hoursToLocation: number = (milesToMars / speedMph2);

    return hoursToLocation / 24
};

console.log(`The ${spacecraftName} is so fast it can reach this location in ${getDaysToLocation(kilometersToMars)} days.`);
console.log(`The ${spacecraftName} is so fast it can reach the Moon in ${getDaysToLocation(kilometersToTheMoon)} days.`);

// Part 4: Create a Spacecraft Class

class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        let milesAway: number = (kilometersAway * this.milesPerKilometer);
        let hoursToLocation: number = (milesToMars / this.speedMph);
        let daysToMars: number = (hoursToLocation / 24);
    
        return hoursToLocation / 24
    };

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`The ${spaceShuttle.name} is so fast it can reach Mars in ${spaceShuttle.getDaysToLocation(kilometersToMars)} days.`);
console.log(`The ${spaceShuttle.name} is so fast it can reach The Moon in ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

