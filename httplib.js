class HTTP {

    get(url) {
        return new Promise(((resolve, reject) =>
            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        ))
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(data))
        })
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(data))
        })
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => resolve('Data was deleted'))
                .catch(err => reject(data))
        })
    }
}