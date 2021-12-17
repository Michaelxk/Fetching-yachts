document.addEventListener('DOMContentLoaded', () => placeYachtsInDom())

function getYachtsDb() {
  const url = '/database/yates.json'
  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(error => console.log(error))
}

function createIconsHtml(icon) {
  return `
    <div class="yachts-card__icons">
      <div class="yachs-card__icon">
        <img src="${icon.iconUrl}">
        <p>${icon.iconName}</p>
      </div>
    </div>
  `
}

function createHeaderHtml(principalImage) {
  return `
    <a href="yachts/aiconfly.html">  
    <div class="yachts-card__img">
      <img src="${principalImage}" alt="Alquiler de yate Aicon Fly 56">
    </div>
  `
}

function createHtml(yachtsList) {
  let html = ''
  yachtsList.forEach(yacht => {
    let iconsHtml = ''
    yacht.icons.forEach(icon => (iconsHtml += createIconsHtml(icon)))
    const headerHtml = createHeaderHtml(yacht.principalImage)

    html += `
      <div class="yachts-card">
        ${headerHtml}
        <div class="yachts-card__body">
          <h3 class="yachts-card__title">Yacht charter ${yacht.name}</h3>
            ${iconsHtml}
            <button class="button-yacht__btn">Rent Now</button>
          </a>
        </div>
      </div>
    `
  })
  return html
}

async function placeYachtsInDom() {
  const yachtsList = await getYachtsDb()
  const html = createHtml(yachtsList)

  document.getElementById('yachts_container').innerHTML = html
}
