// const URL = "http://localhost:8088";
// let E = "entries"
// //an API object with 4 methods defining different fetch calls
// const API = {
//   getOneJournalEntry: id => {
//     return fetch(`${URL}/${E}/${id}`).then(response => response.json());
//   },
//   getAllJournalEntries: () => {
//     return fetch(`${URL}/${E}`).then(response => response.json());
//   },
  
//   saveJournalEntries: entries => {
//     return fetch(`${URL}/${E}`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json"
//       },
//       body: JSON.stringify(entries)
//     })
//   },
//   deleteJournalEntries: entryId => {
//     return fetch(`${URL}/${E}/${entryId}`, {
//       method: "DELETE"
//     }).then()
//   },
//   updateJournalEntries: (id, entries) => {
//     return fetch(`${URL}/${E}/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(entries)
//     }).then(r => r.json());
//   }
// };

const API = {
  getFromJSON() {
      return fetch("http://localhost:8080/entries")
          .then(entry => entry.json())
  },
  postToJSON(object) {
      return fetch("http://localhost:8080/entries", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(object)
      })
  }
//   releaseAnimal(luckyAnimalId) {
//       return fetch(`http://localhost:8080/entries/${luckyAnimalId}`, {
//           method: "DELETE"
//       })
//           .then(luckyAnimal => luckyAnimal.json())
//   },
//   saveAnAnimal(animalGettinSaved) {
//       return fetch(`http://localhost:8080/entries/${animalGettinSaved.id}`, {
//           method: "PUT",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(animalGettinSaved)
//       })
//           .then(response => response.json())
//   },
//   getSingleAnimalToSave(singleFishyId) {
//       return fetch(`http://localhost:8080/entries/${singleFishyId}`)
//           .then(response => response.json())
//   }
}

export default API;