let cardNumber = 0;
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", getWeather);
const apiKey = 'ed05038056684d08bea0b541f324f9ab';

async function getWeather() {
    if (cardNumber == 3) {
        alert("Can only display up to 3 cities");
        return;
    }
    const city = document.getElementById("search-city").value;
    
    try {
        const response = await axios.get('http://api.weatherbit.io/v2.0/current', {
            params: {
                city: city,
                key: apiKey,
            }
        });
        card = document.createElement('div');
        card.className = "card";
        card.innerHTML = 
        '<button id="refresh-btn" onclick="refresh(this)"><i class="fa fa-refresh"></i></button>\n' +
        '<button id="remove-btn" onclick="remove(this)"><i class="fa fa-trash" ></i></button>\n' +
        '<br>\n';
        const cityObj = response.data.data[0];
        console.log(cityObj);
        card.innerHTML += `<h2>${cityObj['city_name']}</h2>` +
                        `<h3>${cityObj.weather.description}<br>\n` +
                        `<span>Datetime ${cityObj['ob_time']} </span><br>\n` +
                        `<span>Wind ${cityObj['wind_spd'].toFixed(2)}km/h <span class="dot">•</span> Humidity ${cityObj.rh}%</span><br>\n` +
                        `<span>Sunrise ${cityObj.sunrise} <span>•</span> Sunset ${cityObj.sunset} </span>\n` +
                        `</h3>\n` +
                        `<h1>${cityObj.temp.toFixed(1)}°</h1>\n` +
                        `</div>\n` +
                        `<div class="icon">` +
                        `<img id="image" src="icons/${cityObj.weather.icon}.png" alt="icon" class="icon"/>
                        </div>`;
    document.body.appendChild(card);
    cardNumber++;
    } catch (error) {
        alert(error);
    }
}

function remove(element) {
    element.parentElement.remove();
    cardNumber--;
}

async function refresh(element) {
    console.log(element);
    try {
        const response = await axios.get('http://api.weatherbit.io/v2.0/current', {
            params: {
                city: element.parentElement.querySelector('h2').innerHTML,
                key: apiKey,
            }
        });
        card = element.parentElement;
        card.innerHTML =
        '<button id="refresh-btn" onclick="refresh(this)"><i class="fa fa-refresh"></i></button>\n' +
        '<button id="remove-btn" onclick="remove(this)"><i class="fa fa-trash"></i></button>\n' +
        '<br>\n';
        const cityObj = response.data.data[0];
        card.innerHTML += `<h2>${cityObj['city_name']}</h2>` +
                        `<h3>${cityObj.weather.description}<br>\n` +
                        `<span>Datetime ${cityObj['ob_time']} </span><br>\n` +
                        `<span>Wind ${cityObj['wind_spd'].toFixed(2)}km/h <span class="dot">•</span> Humidity ${cityObj.rh}%</span><br>\n` +
                        `<span>Sunrise ${cityObj.sunrise} <span>•</span> Sunset ${cityObj.sunset} </span>\n` +
                        `</h3>\n` +
                        `<h1>${cityObj.temp.toFixed(1)}°</h1>\n` +
                        `</div>\n` +
                        `<div class="icon">` +
                        `<img id="image" src="icons/${cityObj.weather.icon}.png" alt="icon" class="icon"/>
                        </div>`;
    } catch (error) {
        alert(error);
    }
}