// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data))
// }

function getUserData(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then (data => useDataOfUser(data))
}

function useDataOfUser(data){
  const ul = document.getElementById('users');
  for(user of data){
    console.log(user)
    const li = document.createElement('li');
    ul.appendChild(li)
    li.innerText = `Player : ${user.name}
    Email : ${user.email}
    Id no : ${user.id}
    User Name : ${user.username}
    address : ${user.address.city}, ${user.address.street}

    `
  }
}

