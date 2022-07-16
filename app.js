//  Chapter 17-20

//  Question 1

// Declare and initialize an empty multidimensional array. (Array of arrays)

document.write("<h1>Question 1</h1>");

var cities = [[1,1],[2,2],[3,3]];


//  Question 2

// Declare and initialize a multidimensional array representing the following matrix:

document.write("<h1>Question 2</h1>");

var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for(var i=0; i<=arr.length-1; i++)
{
    document.write(arr[i] + "<br/>");
}




//  Question 3

// Write a program to print numeric counting from 1 to 10.

document.write("<h1>Question 3</h1>");

for(var i = 1; i <= 10; i++)
{
    document.write(i + "<br>");
}


//  Question 4

// Write a program to print multiplication table of any number using for loop. Table number & length should be
// taken as an input from user.

document.write("<h1>Question 4</h1>");
var tableNo = +prompt("Enter Table Number");
var tableLength = +prompt("Enter Table Length");

for(var i = 1; i <= tableLength; i++)
{
    document.write(tableNo + " x " + i + " = " + tableNo*i + "<br>");
}


//  Question 5

// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

document.write("<h1>Question 5</h1>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i = 0; i < fruits.length; i++)
{
    document.write(fruits[i] + "<br>");

}

for(var i = 0; i < fruits.length; i++)
{
    document.write("<br>" + "Element at Index" + i + " is " + fruits[i] + "<br>");

}



//  Question 6

// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h1>Question 6</h1>");

document.write("<h3>A: Counting</h3>");
for(var a = 1; a <= 15; a++)
{
    document.write(a + ","); 
}


document.write("<h3>B: Reverse Counting</h3>");
for(var r = 10; r >=1; r--)
{
    document.write(r + ",");
}


document.write("<h3>C: Even Numbers</h3>");
for(var e = 0; e <= 20; e++)
{
    if(e % 2 == 0)
    {
        document.write(e + ",");
    }
}


document.write("<h3>D: Odd Numbers</h3>");
for(var e = 0; e <= 20; e++)
{
    if(e % 2 == 1)
    {
        document.write(e + ",");
    }
}


// document.write("<h3>E: Series</h3>");
// for(var e = 2; e <= 20; e++)
// {
//     if(e % 2 == 0)
//     {
//         document.write(e + ",");
//     }
// }


//  Question 7

// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

document.write("<h1>Question 7</h1>");

var bakeryItems = ["cake", "applepie", "cookie", "chips", "patties"];
var order = prompt("Welcome to Danish Bakery. What do you want to Order");



for(var x = 0; x < bakeryItems.length; x++)
{
    if(bakeryItems[x] !== order)
    {
        document.write("We are sorry. " + order + " is not available in our bakery");
    }
    else{
        document.write(order + " is available at index " + x + " in our Bakery");
    }
}


// //  Question 8
// document.write("<h1>Question 8</h1>");

// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

// var numberArray = [24, 53, 78, 91, 12];



// //  Question 9

// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// document.write("<h1>Question 9</h1>");

// var numberArray = [24, 53, 78, 91, 12];




//  Question 10

// Write a program to print multiples of 5 ranging 1 to 100.

document.write("<h1>Question 10</h1>");

for(var mul = 0; mul <=100 ; mul++)
{
    if(mul % 5 == 1)
    {
        document.write(mul);
    }
}