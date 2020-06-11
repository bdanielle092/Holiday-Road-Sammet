let parksDatabase = []

const getParkData = () => {
        const parksURL = `https://developer.nps.gov/api/v1/parks?&api_key=${apiKeys.npsKey}&stateCode=TN`
        return fetch(parksURL)
            .then(response => response.json())
            .then(rawParkData => parksDatabase = rawParkData.data)
}
