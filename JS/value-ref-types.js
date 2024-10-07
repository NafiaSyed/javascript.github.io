/*------- VALUE TYPES -------*/ 
function ValueTypes() {
    let playerScore = 50; // Initial score
    let opponentScore = playerScore; // Copying the score
    playerScore += 30; // Player scores more points

    console.log(`Value Types: Player Score = ${playerScore}, Opponent Score = ${opponentScore}`); // Updated output
}

ValueTypes();
// Output: Value Types: Player Score = 80, Opponent Score = 50

/*------- REFERENCE TYPES -------*/
function ReferenceTypes() {
    let car1 = { 
        make: "Tesla",
        model: "Model S",
        year: 2022
    };

    let car2 = car1; // car2 references car1's object

    car1.year = 2023; // Changing the year of car1

    console.log(`Reference Types: Car 1 Year = ${car1.year}, Car 2 Year = ${car2.year}`);
}

ReferenceTypes();
// Output: Reference Types: Car 1 Year = 2023, Car 2 Year = 2023

