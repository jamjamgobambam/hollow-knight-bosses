function populateBoss(bosses) {
  const idToFind = window.location.pathname.split('/')[2]
  const result = bosses.find( ({id}) => id === Number(idToFind) )

  const bossContent = document.getElementById('boss-content')

  const bossImage = document.createElement('img')
  const bossName = document.createElement('h2')
  const bossHealth = document.createElement('p')
  const bossLocation = document.createElement('p')
  const bossDescription = document.createElement('p')

  bossImage.src = result.image
  bossName.textContent = result.name
  bossHealth.innerHTML = `<strong>Health:</strong> ${result.health}`
  bossLocation.innerHTML = `<strong>Location:</strong> ${result.location}`
  bossDescription.textContent = result.description
  bossDescription.className = "boss-info-description"

  bossContent.appendChild(bossImage)
  bossContent.appendChild(bossName)
  bossContent.appendChild(bossHealth)
  bossContent.appendChild(bossLocation)
  bossContent.appendChild(bossDescription)
}

fetch('/data/bosses')
.then(res => res.json())
.then((data) => populateBoss(data))