// Maps and Sets Exercise

// Quick Question 1
// {1,2,3,4}


// Quick Question 2
// 'ref'

// Quick Question 3
//
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // will not override because reference is not the same


/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/



// hasDuplicate
// const hasDuplicate = (array)=>{
//     return new Set(array).size!==array.length;
// }

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false


//vowelCount
function vowelCount(string){
    const output =  new Map();
    let vowels = 'aeiou';
        for(let char of string){
            if(vowels.includes(char)){
                if(output.has(char)){
                    output.set(char,output.get(char)+1);
                } else{
                    output.set(char,1)
                }
            };
        }

    return output;
};


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

