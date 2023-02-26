function populateBoss(bosses) {
  const idToFind = window.location.pathname.split('/')[2]

  const result = bosses.find( ({id}) => id === Number(idToFind) )
  const main = document.querySelector('main')

  const myArticle = document.createElement('article')
  const myH2 = document.createElement('h2')
  const myImage = document.createElement('img')
  const myPara1 = document.createElement('p')
  const myPara2 = document.createElement('p')
  const myPara3 = document.createElement('p')

  myH2.textContent = result.name
  myImage.src = result.image
  myPara1.textContent = `Health: ${result.health}`
  myPara2.textContent = `Location: ${result.location}`
  myPara3.textContent = `Description: ${result.description}`

  myArticle.appendChild(myH2)
  myArticle.appendChild(myImage)
  myArticle.appendChild(myPara1)
  myArticle.appendChild(myPara2)
  myArticle.appendChild(myPara3)

  main.appendChild(myArticle)
}

fetch('/data/bosses')
.then(res => res.json())
.then((data) => populateBoss(data))