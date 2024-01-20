/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Subash Dhital      Student ID: sdhital1 (123345233)        Date: Jan 19, 2024
*
********************************************************************************/ 
// Step 3
// Defining arrays for server verbs, paths, and responses
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "logout"]
var serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Subash Dhital", "Student Name: Subash Dhital Student Email: sdhital1@myseneca.ca", "User logged In", "Main Panel", "Logout Complete"]

// Step 4
// Define a function to handle HTTP requests
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        // Check if the provided HTTP verb and path match predefined arrays
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            // Return the corresponding response with a 200 status code
            return `200: ${serverResponses[i]}`;
        }
    }
    // If no match is found, return a 404 error
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Step 5
// Manual tests for the httpRequest function
console.log(httpRequest("GET", "/")); // output "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // output "200: This Assignment was prepared by Student Name"
console.log(httpRequest("GET", "/panel")); // output "200: Main Panel"
console.log(httpRequest("POST", "/logout")); // output "200: Logout Complete"

// Test non-matching combinations to simulate 404 errors
console.log(httpRequest("PUT", "/")); // output "404: Unable to process PUT request for /"
console.log(httpRequest("POST", "/testPath2")); // output "404: Unable to process POST request for /testPath2"

// Step 6
// Automating the Tests by creating an "automateTests" Function
// Define a utility function to get a random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// Output some test cases for getRandomInt function
console.log(getRandomInt(3)); // Expected output: 0, 1, or 2
console.log(getRandomInt(1)); // Expected output: 0
console.log(Math.random()); // Expected output: a number from 0 to <1


// Define arrays for test verbs and paths
const testVerbs = ["GET", "POST"];
const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

console.log(httpRequest(testVerbs[1], testPaths[4]));


// Define a function to automate tests using setInterval
function automateTests() {
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)];
        const randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath));
    }

// Use setInterval to execute randomRequest every 1 second 
    setInterval(randomRequest, 1000);
}

// Step 7: execute the "automateTests" function
automateTests();
