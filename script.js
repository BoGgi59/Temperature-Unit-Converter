//Calculating Kelvin degrees to Celcius and Fahrenheit
let kelvin = prompt("Enter a Kelvin value please", "");
//writing formulas
let celcius = 273 - kelvin;
let fahrenheit = celcius * (9 / 5) + 32;

//giving function to integers.
celcius = celcius.toFixed(3);
fahrenheit = fahrenheit.toFixed(3);

//the answer to user
confirm(
  `You entered ${kelvin} in Kelvin degree which is equals to ${celcius} Celcius degree and ${fahrenheit} Fahrenheit degree.`
);

//Calculating Celcius degree in Kelvin and Fahrenheit
let celcius1 = parseInt(prompt("Enter a Celcius value please", ""));

//writing formulas
let fahrenheit1 = celcius1 * (9 / 5) + 32;
let kelvin1 = (273 + celcius1).toFixed(3);

fahrenheit1 = fahrenheit1.toFixed(3); //this function didnt work. why? need to find answer //the calculated answer to user
/* kelvin1 = kelvin1.toFixed(3);*/ confirm(
  `You entered ${celcius1} in Celcius degree which is equals to ${kelvin1} Kelvin degree and ${fahrenheit1} Fahrenheit degree.`
);

//Calculating Fahrenheit degrees in celcius and kelvin degree
let fahrenheit2 = prompt("Enter a Fahrenheit value please", "");

//writing formulas
let celcius2 = (fahrenheit2 - 32) * (9 / 5);
let kelvin2 = 273 + celcius2;

//giving functions
celcius2 = celcius2.toFixed(3);
kelvin2 = kelvin2.toFixed(3);

//the answer to user
confirm(
  `You entered ${fahrenheit2} in Fahrenheit degree which is equals to ${celcius2} celcius degree and ${kelvin2} Kelvin degree`
);

alert("Thank you for choosing our Temperature Calculator. :)");
