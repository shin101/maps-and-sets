// object destructuring 1

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets);  8
// console.log(yearNeptuneDiscovered); 1846

// object destructuring 2

// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// object destructuring 3

//   getUserData({firstName: "Alejandro", favoriteColor: "purple"})
//   // Your name is Alejandro and you like purple
  
//   getUserData({firstName: "Melissa"})
//   // Your name is Melissa and you like green
  
//   getUserData({})
//   // Your name is undefined and you like green

// array destructuring 1

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


// array destructuring 2 



// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // "Raindrops on roses",
//   console.log(whiskers); // "whiskers on kittens"
//   console.log(aFewOfMyFavoriteThings); // "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
  


// array destructuring 3


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]




// ES5 Assigning Variables to Object Properties


const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a, b} = obj.numbers
  


// ES2015 One-Line Array Swap with Destructuring


let arr = [1,2];
[arr[0],arr[1]]=[arr[1],arr[0]]



//raceResults()

const raceResults=([first,second,third,...rest])=>{
    return {first,second,third,rest};
}

// const {array:[]} = first, 

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/