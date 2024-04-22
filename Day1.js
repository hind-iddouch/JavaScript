//Challenge Day1
//The Basics:
//Task 1 :Warm up 
/*
let firstName = "Hind";
let lastname = "iddouch";
const PI = 3.14;
let radius = 5;
let favoriteSuperhero = "batman";
let favoriteQuote = "Difficult roads often leads to beautiful destinations";

//Task 2 :  Speed run
//Tell Your name
const fullName = firstName +" "+lastname;

//Maths 
const area = PI * radius * radius;
const perimeter = 2 * PI * radius;

//Motivation
const motivation = `A wise man named ${favoriteSuperhero} : "${favoriteQuote}"`;*/

/* Output the results
console.log("Full Name:", fullName);
console.log("Area of the circle:", area);
console.log("Perimeter of the circle:", perimeter);
console.log("Motivation:", motivation);*/

/*
//Task 3 :  Variable swap
let a = 3; 
let b = 10;
let temp = a;
a = b;
b = temp;
console.log("After swapping: a= ", a, "and b=", b) 
*/

//Conditional Statements
/*
//Task 1 : Event or Odd

let number = 10;
if(number % 2 == 0){
    console.log(number + " is Even")
}else{
    console.log(number + " is Odd")
}*/

/*
//Task 2 :  Days of the week
var day= 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: 
         console.log("Saturday");
        break; 
    case 7: 
         console.log("Sunday");
        break;        
}

*/
/*
//Task 3 : Maximum 
let a = -15;
let b = 6;
let c = 2.6;
switch(true){
    case a>= b && a >=c :
        console.log(a);
        break;
     case b>= a && b >=c :
        console.log(b);
        break;
    case c>= b && c >=a :
        console.log(c);
        break;

}*/
/*
//Task 4 : The Teacher
let score = 83;
if(score > 85){
    console.log("grade is A")
}else if(score<= 85 && score> 70){
    console.log("grade is B")
}else if(score<= 70 && score> 55){
    console.log("grade is c")
}else if(score<= 55 && score> 40){
    console.log("grade is D")
}else if(score<= 40 && score> 15){
    console.log("grade is E")
}else{
    console.log("grade is D")
}
*/


//Sort & Search
/*
// Bubble Sort
function bubbleSort(arr){
 const n = arr.length;
  for(i=0; i< n-1; i++){
    for(j=0; j< n-i-1; j++ ){
        if(arr[j] >arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
  }
  return arr;

}
let numbers = [5, 2, 7, 3, 9, 1, 6, 4, 8];
console.log("Original Array:", numbers);

console.log("Bubble Sort:", bubbleSort([...numbers]));
*/


//Selection Sort
/*
function selectionSort(arr){
    const n = arr.length;
    for(let i=0; i<n-1; i++ ){
        let minIndex = i;
        for(let j=i+1; j<n;j++){
            if(arr[j]<arr[minIndex]){
               minIndex = j;
            }
            
          }
          let temp= arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
    }
    return arr;
}

let numbers = [4, 5, 1,2,3];
console.log("Original Array:", numbers);

console.log("Selection Sort:", selectionSort([...numbers]));
*/

/*
//Insertion Sort
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
let numbers = [4, 5, 1,2,3,10];
console.log("Original Array:", numbers);

console.log("Insertion Sort:", insertionSort([...numbers]));
*/

//Merge Sort
/*
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
let numbers = [4, 5, 1,2,3];
console.log("Original Array:", numbers);

console.log("Merge Sort:", mergeSort([...numbers]));
*/

//Linear Search
/*
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Element found, return index
        }
    }
    return null; // Element not found
}
let numbers = [5, 2, 7, 3, 9, 1, 6, 4, 8];
console.log("Original Array:", numbers);
console.log("Linear Search (Element 6):", linearSearch([...numbers], 2));
*/

// Binary Search
/*
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; // Element found, return index
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null; // Element not found
}

// Testing the implementations
let numbers = [5, 2, 7, 3, 9, 1, 6, 4, 8];
console.log("Original Array:", numbers);
console.log("Binary Search (Element 6):", binarySearch([...numbers].sort((a, b) => a - b), 6));
*/