
document.addEventListener('DOMContentLoaded', () => {
  loadYachts();
})

function getYachtsDb () {
  const url = '/database/yates.json';
  return fetch(url)
    .then(response => response.json())
    .then(response => {
      const yachts = response;
      return yachts
    }).catch(error => console.log(error))
}

async function loadYachts() {

  const yachtsList = await getYachtsDb ()
  let html = '';
  let yachtsIcons;
  let yachtsIconsInfo;

  yachtsList.forEach(yacht => {
    html += `
      <div class="yachts-card">
        <a href="yachts/aiconfly.html">  
        <div class="yachts-card__img">
          <img src="${yacht.principalImage}" alt="Alquiler de yate Aicon Fly 56">
      </div>
        <div class="yachts-card__body">
          <h3 class="yachts-card__title">Yacht charter ${yacht.name}</h3>
          <div class="yachts-card__icons">
          
            <div class="yachs-card__icon">
              <img src="${yacht.icons.iconUrl}" alt="boat icon">
              <p>${yacht.icons.iconName}</p>
            </div>
            <div class="yachs-card__icon">
              <img src="${yacht.icons.iconUrl}"  alt="people icon">
              <p>${yacht.icons.iconUrl}</p>
            </div>
            <div class="yachs-card__icon">
              <img src="${yacht.icons.iconUrl}" alt="measure icon">
              <p>${yacht.icons.iconName}</p>
            </div>
            <div class="yachs-card__icon">
              <img src="${yacht.icons.iconUrl}" alt="bed icon">
              <p>2</p>
            </div>
          </div>
            <button class="button-yacht__btn">Rent Now</button>
          </a>
      </div>
    `
  })  
  document.getElementById('yachts_container').innerHTML = html;
}
