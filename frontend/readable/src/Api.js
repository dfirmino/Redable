const api = "http://localhost:3001"
let token = 'batman'

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const categories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)