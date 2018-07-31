const http = new HTTP

const ul = document.createElement('ul')

http.get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
        for (const user of users) {
            const li = document.createElement('li')
            li.textContent = user.name
            ul.appendChild(li)
        }
    })
    .catch(err => console.log(err))

document.body.appendChild(ul)

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))