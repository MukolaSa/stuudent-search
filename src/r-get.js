const BASE_URL = 'http://localhost:3000'
function getStudents() {
    fetch(`${BASE_URL}/students`)
    .then(response => response.json())
    .then(console.log)
}

function getStudentsById(studed) {
    fetch(`http://localhost:3000/movies${studed}`)
    .then(response => response.json())
    .then(console.log)
}
