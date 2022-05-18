let randomNumber = Math.floor(Math.random() * 100000);
console.log(randomNumber);

// need to make sure that our number is always 5 digits long

// user must fill in a row with five numbers
// user must only use positive numbers (0 - 9)

// if there are less than five numbers filled in user has to be reminded
// user cannot start next row until previous row has been completed

// if individual number in field is in correct place change the background colour of box to green

// if all five places are green then user has won

// if number is not used at all, leave background colour of box white

// if number is correct but not in right place mark it as grey

// if user has reached sixth row without all green, user lost
