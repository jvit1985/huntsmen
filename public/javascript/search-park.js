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
                var stateParks = [];
                for (let i = 0; i < data.total; i++) {
                    stateParks[i] = data.data[i].fullName;
                    var stateParkName = document.createElement("p");
                    stateParkName.textContent = stateParks[i];
                    parkNameEl.appendChild(stateParkName);
                }
            });
        }
    });
}

document.querySelector('.search-park-btn').addEventListener('click', searchParkHandler);