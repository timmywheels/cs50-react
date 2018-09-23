const url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'"

fetch(url)
    .then(function(res) {
        // handle error
        return res.json()
    })
    .then(function(json) {
        return ({
            importantData: json.importantData
        })
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        // handle error
    })
