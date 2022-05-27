import { selectedSingleTags, compareResults } from "./selectedTags.js"
const value = selectedSingleTags('form')

function fetchDataPOST() {

  const data = new URLSearchParams();
  for (const pair of new FormData(value)) {
    data.append(pair[0], pair[1])
  }

  fetch('http://localhost:5001/',
  {
    method: 'POST',
    body: data,
  })
  .then(resp => resp.json())
  .then(json => {
    compareResults(json)
  })
  .catch(e => console.log(e))
}

function errorMessage(msg) {
  const video = selectedSingleTags('.video')
  video.innerHTML = `
    <div class="neonText2-background">
      <h1 class="neonText2">${msg}</h1>    
    </div> `
}

export {
  fetchDataPOST, errorMessage
}

