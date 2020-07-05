// Add your code here
function submitData(userName, userEmail){
let data = {name: userName,
email: userEmail}

let configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

return fetch("http://localhost:3000/users", configObject)
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
    document.body.innerHTML = object["id"];
  })
  .catch(function(error){
      
      document.body.innerHTML = error.message
    })

}
 