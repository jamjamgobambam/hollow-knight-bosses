function populateBosses(bosses) {
  const mainContent = document.getElementById('main-content')

  for (const boss of bosses) {
    const bossCard = document.createElement('article')

    const bossImage = document.createElement('img')
    const bossName = document.createElement('h3')
    const bossButton = document.createElement('a')
    const bossDescription = document.createElement('p')

    bossName.textContent = boss.name
    bossImage.src = boss.image
    bossButton.textContent = "info"
    bossButton.setAttribute("role", "button")
    bossButton.href = `/boss/${boss.id}`
    bossDescription.textContent = boss.description

    bossCard.appendChild(bossImage)
    bossCard.appendChild(bossName)
    bossCard.appendChild(bossButton)
    bossCard.appendChild(bossDescription)

    mainContent.appendChild(bossCard)
  }
}

fetch('/data/bosses')
.then(res => res.json())
.then((data) => populateBosses(data))