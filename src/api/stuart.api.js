const API_URL = 'http://localhost:4000'

export const geocode = value => 
    fetch(`${API_URL}/geocode`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({address: value})
    })
    .then(response => response.json())
    
export const postJob = (pickup, dropoff) => 
    fetch(`${API_URL}/jobs`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({pickup, dropoff})
    })
    .then(response => response.json())
    