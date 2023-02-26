function populateBosses(bosses) {
  const section = document.querySelector('section')

  for (const boss of bosses) {
    const myArticle = document.createElement('article')
    const myH2 = document.createElement('h2')
    const myImage = document.createElement('img')
    const myPara1 = document.createElement('p')
    const myPara2 = document.createElement('p')
    const myPara3 = document.createElement('p')
    const myButton = document.createElement('a')

    myH2.textContent = boss.name
    myImage.src = boss.image
    myPara1.textContent = `Health: ${boss.health}`
    myPara2.textContent = `Location: ${boss.location}`
    myPara3.textContent = boss.description
    myButton.textContent = "See More"
    myButton.href = `/boss/${boss.id}`

    myArticle.appendChild(myH2)
    myArticle.appendChild(myImage)
    myArticle.appendChild(myPara1)
    myArticle.appendChild(myPara2)
    myArticle.appendChild(myPara3)
    myArticle.appendChild(myButton)

    section.appendChild(myArticle)
  }
}

fetch('/data/bosses')
.then(res => res.json())
.then((data) => populateBosses(data))