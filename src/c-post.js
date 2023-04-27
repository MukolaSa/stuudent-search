const BASE_URL = 'http://localhost:3000'

const options = {
    'method': 'POST',
    headers: {
        'Content-type': 'application/json'
    } 
}

return fetch(`${BASE_URL}/movie`, options)
.then(res=>res.json())
.then(console.log)

addNewMovie({
    title: 'NODEJS',
    // director: 
})