function submitData(name, email) {
  let formData = {
    'name': name,
    'email': email
  };

  let configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const id = object.id;
    const ele = document.createElement('h3');
    ele.innerHTML = id;
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(ele);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    const ele = document.createElement('h3');
    ele.innerHTML = error.message;
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(ele);
  });
}
 