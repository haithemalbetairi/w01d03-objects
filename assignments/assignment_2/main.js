//////////////////////////////////////////////////////
// Look at the object below. Its very large! With lots
// of sub arrays and objects!

var hogwarts = {
  location: 'Scotland',
  houses: [
    {
      name: 'Griffindor',
      values: [
        'courage',
        'bravery',
        'nerve',
        'chivalry'
      ],
      mascot: 'lion',
      colors: [
        'scarlet',
        'gold'
      ],
      founder: 'Godric Gryffindor',
      students: [
        'Harry Potter',
        'Hermione Granger',
        'Ron Weasley'
      ]
    },
    {
      name: 'Hufflepuff',
      values: [
        'hardwork',
        'patience',
        'justice',
        'loyalty'
      ],
      mascot: 'badger',
      colors: [
        'canary yellow',
        'black'
      ],
      founder: 'Helga Hufflepuff',
      students: [
        'Cedric Diggory',
        'Susan Bones',
        'Nymphadora Tonks'
      ]
    },
    {
      name: 'Ravenclaw',
      values: [
        'intelligence',
        'creativity',
        'learning',
        'wit'
      ],
      mascot: 'eagle',
      colors: [
        'blue',
        'bronze'
      ],
      founder: 'Rowena Ravenclaw',
      students: [
        'Luna Lovegood',
        'Cho Chang',
        'Padma Patil'
      ]
    },
    {
      name: 'Slytherin',
      values: [
        'ambition',
        'cunning',
        'leadership',
        'resourcefulness'
      ],
      mascot: 'serpent',
      colors: [
        'green',
        'silver'
      ],
      founder: 'Salazar Slytherin',
      students: [
        'Draco Malfoy',
        'Pansy Parkinson',
        'Tom Riddle'
      ]
    }
  ]
}

// log the location of hogwarts to the console
console.log(hogwarts.location)

// log the hufflepuff object to the console
console.log(hogwarts.houses[1])

// log ravenclaw's founder to the console 
console.log(hogwarts.houses[2].founder)

// log griffindor's second color to the console
console.log(hogwarts.houses[0].colors[1])

// log ravenclaw's 3rd value to the console
console.log(hogwarts.houses[2].values[2])

// remove Tom Riddle from slytherin's students
hogwarts.houses[3].students.pop()
console.log(hogwarts.houses[3])

// add yourself to one of the houses!
hogwarts.houses[2].students.push('Haithem Albetairi')
console.log(hogwarts.houses[2])


///////////////////////////////////////////////////////
// Use the hogwarts object and loops for the following:

// log each of the house names to the console 
for(var i = 0; i < hogwarts.houses.length; i++) {
  console.log(hogwarts.houses[i].name)
}



// log each of the houses colors to the console separated by "and"
// => "scarlet and gold"
// => "canary yellow and black"
// => "blue and bronze" 
// => "green and silver"
for(var i = 0; i < hogwarts.houses.length; i++) {
  console.log(hogwarts.houses[i].colors.join(' and '))
}


// log each of the house's values to the console one by one
for(var i = 0; i < hogwarts.houses.length; i++) {
  for(var j = 0; j < hogwarts.houses[i].values.length; j++) {
    console.log(hogwarts.houses[i].values[j])
  }
}



// log each house's name and mascot to the console 
// => Griffindor's mascot is the lion
// => Hufflepuff's mascot is the badger 
// => Ravenclaw's mascot is the eagle 
// => Slytherin's mascot is the serpent

for(var i = 0; i < hogwarts.houses.length; i++) {
  console.log(hogwarts.houses[i].name + "'s mascot is the " + hogwarts.houses[i].mascot)
}


// loop through each of the students in each of the houses, and add them to the array below 
var allStudents = [];

for(var i = 0; i < hogwarts.houses.length; i++) {
  for(var j = 0; j < hogwarts.houses[i].students.length; j++) {
    allStudents.push(hogwarts.houses[i].students[j]) 
  }
}


