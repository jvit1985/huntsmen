const state = document.querySelector('input[name="search-park"]').value;
const apiKey = "btd26H7hQ7f20oVkr4RANrbKwlgH9eyIk20pemcR"

const searchParkHandler = function () {

    const apiUrl = "https://developer.nps.gov/api/v1/parks?stateCode=" + "TX" + "&api_key=" + apiKey;

    fetch(apiUrl)
    .then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                console.log(data);
                var stateParks = [];
                for (let i = 0; i < data.total; i++) {
                    stateParks[i] = data.data[i].fullName;
                    var stateParkName = document.createElement("p");
                    stateParkName.textContent = stateParks[i];
                    stateParkName.appendChild(stateParkName);
                }
            });
        }
    });
}

document.querySelector('.search-park-btn').addEventListener('click', searchParkHandler);