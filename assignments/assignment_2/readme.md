# Assignment 2 - More Object Practice

Look at the object below. Its very large! With lots of sub arrays and objects!

```js
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
```

### Accessing 

- log the location of hogwarts to the console 
- log the hufflepuff object to the console
- log ravenclaw's founder to the console 
- log griffindor's second color to the console
- log ravenclaw's 3rd value to the console
- remove Tom Riddle from slytherin's students
- add yourself to one of the houses! 


### Looping
- log each of the house names to the console 
- log each of the houses colors to the console separated by "and"
```js
// => "scarlet and gold"
// => "canary yellow and black"
// => "blue and bronze" 
// => "green and silver"
```
- log each of the house's values to the console one by one
- log each house's name and mascot to the console 
```js
// => Griffindor's mascot is the lion
// => Hufflepuff's mascot is the badger 
// => Ravenclaw's mascot is the eagle 
// => Slytherin's mascot is the serpent
```
- loop through each of the students in each of the houses, and add them to the allStudents array



