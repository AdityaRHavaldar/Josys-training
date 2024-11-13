let arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log("Initial Array : ", arr1);

arr1.push(8);
console.log("8 Added in the last(pushed) : ", arr1);

arr1.pop();
console.log("last index removed(popped) : ", arr1);

arr1.shift();
console.log("First element removed : ", arr1);

arr1.unshift(0, 1);
console.log("2 elements added to the starting index of the array : ", arr1);

console.log("Length of the array is : ", arr1.length);

console.log(arr1.indexOf(5));

console.log(
  "Iterating over the array using Map : ",
  arr1.map((i) => i * 2)
);

console.log("printing Only even numbers using Filter : ");
console.log(arr1.filter((i) => i % 2 === 0));

console.log(
  "Using Reduse to return the sum of all the elements of the array : ",
  arr1.reduce((acc, curr) => acc + curr, 0)
);
arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Demonstration of Splice : ", arr1.splice(1, 2, 9, 10));
console.log("After Splice : ", arr1);

arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Demonstration of Slice : ", arr1.slice(1, 3));

console.log("Using ForEach loop : ");
arr1.forEach((i) => console.log(i));

console.log(
  "found ? true : false => ",
  arr1.find((element) => element > 4)
);

console.log(
  "found at the index : ",
  arr1.findIndex((element) => element > 4)
);

console.log(arr1.includes(6));

function processInput(input: string | number | boolean | number[]) {
  if (typeof input === "string") {
    return `String length: ${input.length}`;
  } else if (typeof input === "number") {
    return `Rounded number: ${Math.round(input)}`;
  } else if (typeof input === "boolean") {
    return input ? "Boolean is true" : "Boolean is false";
  } else if (Array.isArray(input)) {
    const sum = input.reduce((acc, num) => acc + num, 0);
    return `Sum of array: ${sum}`;
  } else {
    return "else block";
  }
}

console.log(processInput("Hello TypeScript"));
console.log(processInput(42.89));
console.log(processInput(true));
console.log(processInput([1, 2, 3, 4]));
