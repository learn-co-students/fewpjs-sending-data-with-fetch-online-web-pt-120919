// Add your code here

function submitData(name, email) {

  let configUser = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  }

  return fetch('http://localhost:3000/users', configUser)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
      document.body.innerHTML = object["id"]
    })
    .catch(function(error){
      document.body.innerHTML = error.message
    })
  }
