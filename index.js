// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost/dogs", configObj);



function submitData(name, email) { // makes a POST request to /user with a name and email

    return fetch('http://localhost:3000/users', { // destinationURL
        method: "POST", // make a post request
        headers: {
          "Content-Type": "application/json", // Used to indicate what format the data being sent is in
          "Accept": "application/json" // good practice to tell the server what data format we accept in return
        },
        body: JSON.stringify({ // everything assigned to the body must be a string and JSON.stringify() converts objects into strings
            name,
            email
        })
        // the object above is returned as {"name", "email"} thanks to JSON.stringify()
      })
      .then(function(response){ // takes in a response object as an argument
        return response.json() // .json() is a built in method that converts the body of the response from JSON to a plain old JS object
      })
      .then(function(object){ // JS object
        document.body.innerHTML = object["id"]
      })
      .catch(function (error){
        document.body.innerHTML = error.message // handles a failed POST request using catch, appends the error message to the DOM
      })
}