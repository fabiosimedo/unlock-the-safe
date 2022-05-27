import { fetchDataPOST, errorMessage } from './fetchData.js'
const value = selectedSingleTags('form')

function selectedSingleTags(tags) {
  const tagsSelected = document.querySelector(tags)
  return tagsSelected;
}

function multipleSelector(button) {
  const btn = document.querySelectorAll(button)    
  btn.forEach((item2, index) => {
    item2.addEventListener('click', e => getButton(e, index))
  })
}

const amountChoices = []

function getButton(item1, index) {
  const span1 = selectedSingleTags('.ps-1'),
        span2 = selectedSingleTags('.ps-2'),
        span3 = selectedSingleTags('.ps-3'),
        span4 = selectedSingleTags('.ps-4'),
        span5 = selectedSingleTags('.ps-5');

  amountChoices.push(index)
  if(amountChoices.length === 1) concatenateResults(span1, item1)
  if(amountChoices.length === 2) concatenateResults(span2, item1) 
  if(amountChoices.length === 3) concatenateResults(span3, item1) 
  if(amountChoices.length === 4) concatenateResults(span4, item1) 
  if(amountChoices.length === 5) concatenateResults(span5, item1) 
}

function concatenateResults(res1, res2) {
  const clientAttempt = selectedSingleTags('#hidden_input')
  clientAttempt.value += res2.target.innerText

  return res1.innerText = res2.target.innerText
}

function compareResults(json) {
  if(json == 'Resposta Correta!') {
    const btn = document.querySelectorAll('button')    
    btn.forEach(item2 => {
      item2.setAttribute('disabled', '')
    })
    return changeVideoToPlay(json)
  }

  if(json === 'Resposta Errada!') {
    const btn = document.querySelectorAll('button')    
    btn.forEach((item2) => {
        item2.setAttribute('disabled', '')
      })
    return errorMessage(json)
  }
}

function changeVideoToPlay(msg) {
  const playVideo = selectedSingleTags('.video')
  playVideo.innerHTML = `
    <video width="400" autoplay>
      <source src="img/myVault.mp4" type="video/mp4">
      <source src="img/movie.ogg" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  `
  setTimeout(() => {
    playVideo.setAttribute('style', 'visibility:none')
    return errorMessage(msg)
  }, 8500);
}

value.addEventListener('submit', (e) => {
  e.preventDefault()
  fetchDataPOST()
})

export {
  selectedSingleTags, multipleSelector, compareResults
}