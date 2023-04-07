

const countriesapiURL = 'https://isro.vercel.app/api/customer_satellites';
const countriesresultsContainer = document.getElementById('countriesresultsContainer');
const searchInput = document.getElementById('country-input');

fetch(countriesapiURL)
  .then(response => response.json())
  .then(data => {

    const satellites = data.customer_satellites.map(satellite => ({
      countries: satellite.country,
      countrieslaunchDate: satellite.launch_date,
      countriesmass: satellite.mass,
      countrieslauncher: satellite.launcher
    }));
    

    const updateResults = () => {
      const searchValue = searchInput.value.toLowerCase();
      const filteredSatellites = satellites.filter(satellite => 
        satellite.countries.toLowerCase().includes(searchValue)
      );
      countriesresultsContainer.innerHTML = filteredSatellites.map(satellite => `
        <div class="countries-info">
          <h2>${satellite.countries}</h2>
          <p>Launch Date: ${satellite.countrieslaunchDate}</p>
          <p>Mass: ${satellite.countriesmass} kg</p>
          <p>Launcher: ${satellite.countrieslauncher}</p>
        </div>
      `).join('');
    };
    

    searchInput.addEventListener('input', updateResults);
    

    updateResults();
  })
  .catch(error => console.error(error));



const resultapiURL = 'https://isro.vercel.app/api/centres';
const resultsContainer = document.getElementById('centerresults');

fetch(resultapiURL)
  .then(response => response.json())
  .then(data => {
  
    const centers = data.centres.map(center => ({
      name: center.name,
      place: center.Place,
      state: center.State
    }));
    
    
    resultsContainer.innerHTML = centers.map(center => `
      <div class="center-sec">
        <h2>Center Name:- ${center.name}</h2>
        <p>Center Place:- <b>${center.place}</b>, Center State:-<b>${center.state}</b></p>
      </div>
    `).join('');
  })
  .catch(error => console.error(error));


//  For Spacescraft 

const spaceApiURL = 'https://isro.vercel.app/api/spacecrafts';
const SpaceresultsContainer = document.getElementById('spaceresults');

fetch(spaceApiURL)
  .then(response => response.json())
  .then(data => {
 
    const spacecrafts = data.spacecrafts.map(spacecraft => ({
      name: spacecraft.name,
    }));
    

    SpaceresultsContainer.innerHTML = spacecrafts.map(spacecraft => `
      <div class="spacecraft-sec">
        <h2>${spacecraft.name}</h2>
      </div>
    `).join('');
  })
  .catch(error => console.error(error));



  //  For Launchers 

const launchersApiURL = 'https://isro.vercel.app/api/launchers';
const launchersresultsContainer = document.getElementById('launchersresults');

fetch(launchersApiURL)
  .then(response => response.json())
  .then(data => {
  
    const launchers = data.launchers.map(launcher => ({
      name: launcher.id
    }));
    
 
    launchersresultsContainer.innerHTML = launchers.map(launcher => `
      <div class="launcher-sec">
        <h2>${launcher.name}</h2>
      </div>
    `).join('');
  })
  .catch(error => console.error(error));

