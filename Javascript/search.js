// search.js

async function searchBreweries() {
    const city = document.getElementById('city').value;
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;

  var apiUrl = "San Diego";
  if(city.length!=0) { apiUrl = (`https://api.openbrewerydb.org/breweries/search?query=${city}`);}
  else if(name.length!=0){apiUrl =(`https://api.openbrewerydb.org/breweries/search?query=${name}`);}
  else if(type.length!=0){apiUrl =(`https://api.openbrewerydb.org/breweries/search?query=${type}`);}
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(data) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; 

    if (data.length === 0) {
        resultContainer.innerHTML = '<p>No breweries found.</p>';
        return;
    }

    const limitedData = data.slice(0, 6);

    const row = document.createElement('div');
    row.classList.add('row', 'gx-4');

    limitedData.forEach(brewery => {
        const card = document.createElement('div');
        card.classList.add('col-md-2');

        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${brewery.name}</h5>
                    <p class="card-text">Address: ${brewery.street}, ${brewery.city}, ${brewery.state}</p>
                    <p class="card-text">Phone: ${brewery.phone}</p>
                    <p class="card-text">Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                    <p class="card-text">Rating: ${brewery.rating ? brewery.rating : 'N/A'}</p>
                    <p class="card-text">Location: ${brewery.city}, ${brewery.state}</p>
                    <button onclick="toggleReviewForm()">Write a Review</button>

                    <!-- Add more details as needed -->
                </div>
            </div>
        `;

        row.appendChild(card);
        
    });
     async function fetchBreweryDetails(breweryId) {
            const response = await fetch(`/breweries/${breweryId}`);
            const breweryDetails = await response.json();
            
            console.log(breweryDetails);
     }
    resultContainer.appendChild(row);
}
