//alert("JavaScript works!");

// William Rivera
// SDI 1301
// Project 2
// Second Story on JavaScript

// My Variables
var satSnack = "Last Saturday, my kid wanted a snack after lunch."; 
    kidName = ["Ethan"],
    food = ["Munchinks", "Happy Meal"],
    myRestaurants = ["Dunkin Doughnuts", "Mcdonald's"],
    amountOfDoughnuts = 6;
    
    console.log(satSnack);
    
// My Procedure
var myProcedure = "I needed to check if I had money.";
    myProcedure = amountOfDoughnuts;
    if (myProcedure > 0) {
        console.log("We can go out to get the snack.");
    } else {
        console.log("We need to eat something at home.");
    };

// My Boolean Function
var myBoolean = function (amountOfDoughnuts) {
    if (amountOfDoughnuts >= 0) {
        console.log("We are eating at " + myRestaurants[0] + " today.");
    } else {
        console.log("We need to go to " + myRestaurants[1] + " for a Happy Meal.");
    }
};
    
// My Number Function
var munchkinPerBox = function(doughnut) {
    
    while (doughnut > 0) {
        
        console.log(kidName + " have " + doughnut + " " + " munchkin " + " doughnuts left.");
        doughnut = doughnut - 1;
        
    }
    console.log(kidName + " ate all the doughnuts.");

}



// My String Function
var myString = function(backHome) {
    console.log("Now, we are going to " + backHome + " to watch Netflix.");
}

//My Array Function
var myMovies = function() {
    var movieNames = ["Mickey Mouse Club House", "Cars 2", "Brave", "Madagascar 3"],
	minutesPerMovie = [30, 60, 120, 180],
	kidNames = ["Ethan", "Gianna", "Daniella"];
            var watchMovie = function(whatMovie) {
            var movieName = movieNames[whatMovie],
                minutesThisMovie = minutesPerMovie[movieNumber];
                console.log(kidNames[0] + " and " + kidNames [1] + " wanted us to see " + movieName + " for " + minutesThisMovie + " minutes.");
                for (var minutes = 0; minutes < minutesThisMovie; minutes += 30) {
                    var minutesRemain = minutesThisMovie - minutes;
                    console.log("We have " + minutesRemain + " minutes left. " + minutes + " minutes have past.");
            }
            console.log("We finished watching " + movieName + ".");
        };
        for (var movieNumber = 0; movieNumber < movieNames.length; movieNumber++) {
            watchMovie(movieNumber); 
    };
};
myBoolean(true);
munchkinPerBox(6);
myString("Siesta Apartment");
myMovies();
console.log("This was a glipse of one of our Saturdays at the Home of the Rivera's Family.")

