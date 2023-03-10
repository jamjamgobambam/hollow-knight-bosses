fetch('/bosses/data')
    .then(res => res.json())
    .then((data) => populateBoss(data))

function populateBoss(bosses) {
    const currentBossId = window.location.href.split("/").pop()
    const result = bosses.find( ({id}) => id === currentBossId )

    document.getElementById('boss-image').src = result.image
    document.getElementById('boss-name').textContent = result.name
    document.getElementById('boss-health').innerHTML = `<strong><span class="fa-solid fa-heart info-icon"></span> Health:</strong> ${result.health}`
    document.getElementById('boss-location').innerHTML = `<strong><span class="fa-solid fa-map-location-dot info-icon"></span> Location:</strong> ${result.location}`
    document.getElementById('boss-description').textContent = result.description

    document.title = `Hollow Knight - ${result.name}`
}