//constructer function which can take in a series of values and object..
//..with the same properties contained inside
function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HP = HP;

    //method which print all the stats for a character in the terminal
    this.printStats = function () {
        console.log("Name:" + this.name + "\nProfession:" + this.profession +
            "\nGender" + this.gender + "\nAge" + this.age + "\nStrength:" +
            this.strength + "\nHP" + this.HP);
    };

    //method determines whether or not a characts HP are less than zero
    //if its less than 0 the charcter dies
    this.isAlive = function () {
        if (this.HP > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n---------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false
    }

    //method which takes in a second object and decreases their HP by the characters strength
    this.attack = function (character2) {
        character2.hitpoints -= this.strength;
    }

    //method that increases characters stats/level
    this.levelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.HP += 25;

    }
};

//create new characters using the "Character" construction from above
var Necromancer = new Character ("Darrel", "Necromancer", "Male", 900, 30, 100120);
var ComicRelief = new Character ("Weewee", "Useless Sidekick", "Male", 10, 5, 200);

//prints the stats in the terminal from the printStats function we created before
Necromancer.printStats();
ComicRelief.printStats();
