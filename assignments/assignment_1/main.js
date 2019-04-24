/////////////////////////////////////////
// Declaring Objects 

// Create a new object called puppy. Give it a name of "Rosco", an age of 
// 6 and a list of favoriteToys including: "orange ball" and "bone"

var puppy = {
  name: 'Rosco',
  age: 6,
  favoriteToys: [ 'orange ball', 'bone' ]
}



/////////////////////////////////////////
// Hello and welcome to Jurassic Park! You have been brought on to manage 
// the dig sites for Dr. John Hammond. No expense has been spared, and 
// the data on each mine is currently stored in the javascript objects below.

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}

// Create a variable called guestOfHonor and assign it's value to the name 
// of the paleontologist at Snakewater, Montana.

var guestOfHonor = snakewaterMontana.paleontologist;



// Access the value of the specimen found in Snakewater, Montana, and store 
// it in a variable called cleverGirl. 

cleverGirl = snakewaterMontana.specimen;



var nicaragua = {
  depth: "200 meters",
  annualBudget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}

// Make a variable called favoriteSpecimen and assign it's value to your favorite 
// dinosaur within nicaraguanSpecimens.

var favoriteSpecimen = nicaragua.specimens[1];


// Add 250000 to the annual budget of this site.

nicaragua.annualBudget += 250000;



var hammondsMines = {
  buenosAires: {
    depth: "400 meters",
    annualBudget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annualBudget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}

// Insert nicaragua into hammondsMines

hammondsMines.nicaragua = nicaragua;

// Access the depth of John Hammond's mine in Mexico.

var mexicoDepth = hammondsMines.mexico.depth;


// create a varable called totalBudget and store the calculated total budget of all of the mines

// var totalBudget = hammondsMines.mexico.annualBudget + hammondsMines.buenosAires.annualBudget + hammondsMines.nicaragua.annualBudget;

var totalBudget;

var hammondKeys = Object.keys(hammondsMines);


for(hammondKeys in hammondsMines) {
  totalBudget += hammondKeys.annualBudget;
}

console.log(totalBudget);