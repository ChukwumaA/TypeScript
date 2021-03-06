function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Mice');

numberArray.push('This is not a number');
stringArray.push(30);

console.log(numberArray);
console.log(stringArray);


//What if you want to determine the type of the values that the 
//array will contain when you call the function and then have 
//TypeScript do the work of type checking the values that you 
//pass to it to ensure they are of that type? 
//This is where generics come into play.

function getArray2<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray2 = getArray2<number>([5, 10, 15, 20]);
numberArray2.push(25);
numberArray2.push('This is not a number');

let stringArrray2 = getArray2<string>(['Cats', 'Dogs', 'Birds']);
stringArrray2.push('Rabbits');
stringArrray2.push(30);

console.log(numberArray2);

console.log(stringArrray2);