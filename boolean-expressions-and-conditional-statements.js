/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasMap = false;
let hasSword = true;
let hasCompass = true;


console.log("You see two paths: one leads to the mountains, the other to the village.");
const choiceGame = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

// Mountain Scenario
if (choiceGame === "mountains" && !hasTorch) {
  // Player picks up a torch
  console.log("You take the torch and navigate through the dark mountains.");
  console.log("You come across a cave opening in the mountains.");

  const caveChoice = readline.question("Do you enter the 'cave' or continue up the 'mountain'? ").toLowerCase();

  if (caveChoice === "cave" && hasSword) {
    // Player picks up a sword
    console.log("You enter the cave receive a sword as a reward!");
  } else {
    console.log("You decide to avoid the cave and continue up the mountain with your torch.");
  }
} 
// Village Scenario
else if (choiceGame === "village" && !hasMap){
// Player picks up a map
  console.log("You take the map and find your way to the village.");
  console.log("Once in the village, you can either rest or purchase a compass to continue your journey.");

  const villageChoice = readline.question("Do you 'rest' in the village or buy a 'compass' to continue? ").toLowerCase();

  if (villageChoice === "compass" || villageChoice === "rest") {
    hasCompass = true; // Player buys a compass
    console.log("You purchase a compass and continue on through the village with your map.");
  } else {
    console.log("You decided to stop and rest in the village.");
  }
} 

// **If player enters an invalid choice**
else {
  console.log("You may exit the game.");
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.
*/