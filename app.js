document.getElementById('getText').addEventListener('click', getText)
document.getElementById('getUsers').addEventListener('click', getUsers)
document.getElementById('getPosts').addEventListener('click', getPosts)
document.getElementById('addPost').addEventListener('submit', addPost)
function getText(){
    // fetch('sample.txt')
    // .then((res)=> {
    //     return res.text()
    // })
    // .then((data)=> {
    //     console.log(data)
    // })


    fetch('sample.txt')
    .then((res)=> res.text())
    .then((data)=> {
        document.getElementById('outPut').innerHTML = data
    })
    .catch((err)=> {
        console.log(err)
    })
}

function getUsers(){
    fetch('users.json')
    .then((res)=> res.json())
    .then((data)=> {
        let outPut = '<h2>Users</h2>'
        data.forEach((user)=> {
           outPut += `
             <ul>
               <li>ID: ${user.id}</li>
               <li>Name: ${user.name}</li>
               <li>Email: ${user.email}</li>
             </ul>
           `;
        })
        document.getElementById('outPut').innerHTML = outPut
    })
    .catch((err)=> {
        console.log(err)
    })
}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> {
        return res.json();
        console.log(res.json())
    })
    .then((data)=> {
       let result = "<h2>Posts</h2>";

       data.forEach((post)=> {
        result += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
       })
       document.getElementById('outPut').innerHTML = result
    })
}

function addPost(e){
    e.preventDefault()

    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res)=> {
        return res.json()
    })
    .then((data)=> {
         console.log(data)
    })
}