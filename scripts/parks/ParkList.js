let intineraryPark = {}

const generateParksList = (parks) => {
    for (const currentParksObject of parksDatabase) {
        const parkListEntry = convertParkObject(currentParksObject)
        const parkSelectElement = document.querySelector(".parkList")
        parkSelectElement.innerHTML += parkListEntry
    }
}

const parkDropdown = document.querySelector(".parkList")

const clearFishList = () => fishArticleElement.innerHTML = ""

// parkDropdown.addEventListener("change", clickEvent => {
//     // Get the value of the option chosen by the user
//     const userChoice = clickEvent.target.value
//     let objectIndex = parksDatabase.indexOf(parksDatabase[parksDatabase.findIndex(parkObject => parkObject.id === userChoice)])

//     const parkSelection = addParkToItinerary(userChoice)
//     document.querySelector(".park").innerHTML += parkSelection
// }
