// const { object } = require("chai-spies");

function submitData(name, email) {
    
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
        return response.json();
        })

        .then(function (object) {
            document.body.innerHTML = object["id"]
        })

        .catch(function (error) {
            alert("Whoop There it is!");
            document.body.innerHTML = error.message
        });
        
}