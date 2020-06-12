const eateryList = () => {
    /* Creates a select option at the top of the options. This is a placeholder that will be used
         instead of using a restourant. */
         document.querySelector(".eateryList").innerHTML = `<option disabled selected value>Select a Eatery</option`
    for (const eateryObject of eateryCollection) {
     
        const eateryHTMLRepresentation = eateryConverter(eateryObject)

        const eaterySelectionElement = document.querySelector(".eateryList")
        eaterySelectionElement.innerHTML += eateryHTMLRepresentation
    }
}

// Object to be used to hold the current selection of the section options.
let eateryObject = {}

// Create a document selector for our addVentListener.
const eaterySelection = document.querySelector(".eateryList")


// Event listener for clicks on the eatery options
eaterySelection.addEventListener("change", (clickEvent) => {
    // Setting a variable to a clickEvent that target the value of the select value.
    tripItinerary.eatery = parseInt(clickEvent.target.value)
    // Using find to find the id. Found out that the id 
    eateryObject = eateryCollection.find(eatery => eatery.id === tripItinerary.eatery)

    const selectHTMLEatery = eateryitineraryHTML(eateryObject)
    document.querySelector(".eatery").innerHTML = selectHTMLEatery


    /* Building out the Modal */ 
    const eateryModal = document.querySelector("#eateryModal");
    const eateryBtn = document.querySelector("#eateryBtn");
    const eaterySpan = document.getElementsByClassName("eateryClose")[0];

    // Opens Modal
    eateryBtn.onclick = () => eateryModal.style.display = "block";
    
    // When clicking on the x it will close
    eaterySpan.onclick = () => eateryModal.style.display = "none";

    // When you click anywhere outside the modal it will close
    window.onclick = (event) => {
        if (event.target === eateryModal) {
            eateryModal.style.display = "none";
        }
    }

    
    // Check for full itinerary
    checkItineraryFullness()
})
