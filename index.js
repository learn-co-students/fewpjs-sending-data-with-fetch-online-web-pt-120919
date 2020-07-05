// Add your code here

  function submitData(userName, userEmail) {
    let userData = {
      name: userName,
      email: userEmail
    };

    let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      alert("You made a mistake!");
      console.log(error.message);
      document.body.innerHTML = error.message;
    });

  }
