"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesXKilometer = 0.621;
var speedMph2 = 17500;
// Part 2: Print Days to Mars
var milesToMars = (kilometersToMars * milesXKilometer);
var hoursToMars = (milesToMars / speedMph2);
var daysToMars = (hoursToMars / 24);
// Code an output statement here (use a template literal):
console.log("The " + spacecraftName + " is so fast it can reach Mars in " + daysToMars + " days.");
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
function getDaysToLocation(kilometersAway) {
    var milesAway = (kilometersAway * milesXKilometer);
    var hoursToLocation = (milesToMars / speedMph2);
    return hoursToLocation / 24;
}
;
console.log("The " + spacecraftName + " is so fast it can reach this location in " + getDaysToLocation(kilometersToMars) + " days.");
console.log("The " + spacecraftName + " is so fast it can reach the Moon in " + getDaysToLocation(kilometersToTheMoon) + " days.");
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = (kilometersAway * this.milesPerKilometer);
        var hoursToLocation = (milesToMars / this.speedMph);
        var daysToMars = (hoursToLocation / 24);
        return hoursToLocation / 24;
    };
    ;
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("The " + spaceShuttle.name + " is so fast it can reach Mars in " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days.");
console.log("The " + spaceShuttle.name + " is so fast it can reach The Moon in " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days.");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
