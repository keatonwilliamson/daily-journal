import API from "./dataManager.js"

let journalInputs = document.querySelectorAll(".journalInput")
let inputsArray = []
const pushInputsArray = () => {
    for (let i = 0; i < journalInputs.length; i++) {
        inputsArray.push(journalInputs[i].value)
    };
};

const journalEntry = (thing) => {
    let newEntry = {
        date: thing[0],
        concept: thing[1],
        content: thing[2],
        mood: thing[3]
    }
    return newEntry
}

const journalBuilder = (entry) => {
    let colorchanger = ["red", "goldenrod", "blue", "green"]
    let time = 500
    let values = Object.values(entry)
    let keys = Object.keys(entry)
    for (let k = 0; k < keys.length; k++) {
        let funString = values[k].toString();
        let funArray = [...funString.split('')]
        for (let i = 0; i < funString.length / colorchanger.length; i++) {
            for (let c = 0; c < colorchanger.length; c++) {
                setTimeout(function () {
                    document.querySelector(".button").style.color = colorchanger[c];
                    if (funArray[((i * colorchanger.length) + c)] !== undefined) {
                        document.querySelector(`#${keys[k]}-container-${entry.id}`).innerHTML += `<span style="color:${colorchanger[c]};">${funArray[((i * colorchanger.length) + c)]}</span>`
                    }
                }, (time * i) + ((time/colorchanger.length) * c))
            }

        }
    }
}

const josh = (entry) => {
    document.querySelector("#entries--container").innerHTML += `
    <div class="journal-entry" id="journal-entry-${entry.id}">
        <section id="id-container-${entry.id}"></section>
        <section id="date-container-${entry.id}"></section>
        <section id="concept-container-${entry.id}"></section>
        <section id="content-container-${entry.id}"></section>
        <section id="mood-container-${entry.id}"></section>
    </div>   
   `
}

document.querySelector(".button").addEventListener("click", event => {
    inputsArray = []
    pushInputsArray();
    // console.log(journalEntry(inputsArray));
    API.postToJSON(journalEntry(inputsArray))

        .then(API.getFromJSON).then(entries => {
            // console.log(entries)
            document.querySelector("#entries--container").innerHTML = ""
            forEachEntry(entries);
        })
})

const forEachEntry = (entries) => {
    const allEntries = [...entries]
    allEntries.forEach(entry => {
        josh(entry)
        journalBuilder(entry);
    })
}

