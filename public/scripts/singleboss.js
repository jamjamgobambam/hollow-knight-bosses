function populateBoss(bosses) {
  const idToFind = window.location.pathname.split('/')[2]

  const result = bosses.find( ({id}) => id === Number(idToFind) )
  // const main = document.querySelector('main')

  // const myArticle = document.createElement('section')

  const main = document.getElementById('boss-content')
  const myH2 = document.createElement('h2')
  const myImage = document.createElement('img')
  const myPara1 = document.createElement('p')
  const myPara2 = document.createElement('p')
  const myPara3 = document.createElement('p')

  myImage.src = result.image
  myH2.textContent = result.name
  myPara1.innerHTML = `<strong>Health:</strong> ${result.health}`
  myPara2.innerHTML = `<strong>Location:</strong> ${result.location}`
  myPara3.textContent = result.description
  myPara3.className = "boss-info-description"

  main.appendChild(myImage)
  main.appendChild(myH2)
  main.appendChild(myPara1)
  main.appendChild(myPara2)
  main.appendChild(myPara3)

  // main.appendChild(myArticle)
}

fetch('/data/bosses')
.then(res => res.json())
.then((data) => populateBoss(data))