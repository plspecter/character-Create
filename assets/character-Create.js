//call inquirer
var inquirer = require("inquirer");

//questions that will be asked
inquirer.prompt([{

    type: "input",
    name: "name",
    message: "Whats your name? ",

}, {

    type: "list",
    name: "pokemonChoice",
    message: "Choose your starter pokemon: ",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],

},{

    type: "input",
    name: "rival",
    message: "What is your rival's name? "

}, {

    type: "checkbox",
    name: "carryingWhat",
    message: "Choose what you are carrying: ",
    choices: ["Pokeball", "Pokedex", "Oran Berry" , "A small professor Oak"]

}, {

    type: "confirm",
    name: "goExplore",
    message: "Leave the poke center?"
}

]).then(function(user) {

    console.log("===========================");
    console.log("Your name is " + user.name);
    console.log("You chose " + user.pokemonChoice + "!");
    console.log("Your rivals name is " + user.rival);
    console.log("Your holding " + user.carryingWhat);
    console.log("===========================");

});