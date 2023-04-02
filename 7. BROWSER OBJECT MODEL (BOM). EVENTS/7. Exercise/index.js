// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.

const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#cities');
const result = document.querySelector('#result');

const cities = {
  ger: ['Dresden', 'Hamburg', 'Bremen'],
  usa: ['Boston', 'Miami', 'Atlanta'],
  ukr: ['Kyiv', 'Lviv', 'Lutsk']
};

function selectedCities(country) {
  citySelect.innerHTML = '';
  const countryCities = cities[country];
  for (let i = 0; i < countryCities.length; i++) {
    const city = countryCities[i];
    const option = document.createElement('option');
    option.text = city;
    option.value = city;
    citySelect.add(option);
  }
}

countrySelect.addEventListener('change', function() {
  const selectedCountry = countrySelect.value;
  selectedCities(selectedCountry);
  result.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, Selected city: `;
});

citySelect.addEventListener('change', function() {
  const selectedCity = citySelect.value;
  result.innerHTML = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, Selected city: ${selectedCity}`;
});
