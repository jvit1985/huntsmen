const state = document.querySelector('input[name="search-park"]').value;
const apiKey = "btd26H7hQ7f20oVkr4RANrbKwlgH9eyIk20pemcR"
const stateName = document.getElementById("parks");
const parkNameEl = document.querySelector(".park-name");

const searchParkHandler = function () {

    const apiUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateName.value + "&api_key=" + apiKey;

    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var stateParks = [];
                var parkWeb = [];
                for (let i = 0; i < data.total; i++) {
                    stateParks[i] = data.data[i].fullName;
                    parkWeb[i] = data.data[i].url;
                    
                    var stateParkName = document.createElement("p");
                    var parkWebSite = document.createElement("a");
                    var linkText = document.createTextNode("State Park Website");
                    parkWebSite.appendChild(linkText);
                    parkWebSite.title = "State Park Website";
                    parkWebSite.target = "_blank"
                    parkWebSite.href = parkWeb[i]
                    stateParkName.textContent = stateParks[i];
                    
                    stateParkName.appendChild(parkWebSite);
                    parkNameEl.appendChild(stateParkName);
                }
            });
        }
    });
}

document.querySelector('.search-park-btn').addEventListener('click', searchParkHandler);