// const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

// filterOutOdds(1,2,3,4,5,6);

// const findMin = (...nums) => Math.min(...nums);

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1



// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// const mergeObjects = (item1,item2) => ({...item1,...item2});

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}



// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// const doubleAndReturnArgs = (list,...item)=> [...list,...item.map(x=>x*2)]

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]



/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let random = Math.round(Math.random()*items.length);
//     return [...items.slice(0,random),...items.slice(random+1)];
// }

// removeRandom([1,2,3,4,5])



/** Return a new array with every item in array1 and array2. */

// const extend = (array1, array2) => [...array1,...array2]


/** Return a new object with all the keys and values
from obj and a new key/value pair */

// let addKeyVal = (obj, key, val) => {
//     return {...obj,[key]:val}
// }

// addKeyVal({1:'hi'},2,)

/** Return a new object with a key removed. */

// let removeKey = (obj, key) => {
//     let output= {...obj}
//     delete output[key]
//     return output;
// }

// removeKey({a:'hi',b:'yo'},'b')


/** Combine two objects and return a new object. */

// let combine = (obj1, obj2) =>{
//     return {...obj1,...obj2}
// }


/** Return a new object with a modified key and value. */

let update = (obj, key, val) => {
    let output = {...obj};
    output[key]=val
    return output;
}

update({a:'hi',b:'yo'},1,'hello')