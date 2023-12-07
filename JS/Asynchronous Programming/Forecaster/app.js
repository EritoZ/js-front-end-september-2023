function attachEvents() {
    const inputGetWeather = document.getElementById('submit');
    const inputLocation = inputGetWeather.previousElementSibling;
    const divForecast = document.getElementById('forecast');
    const divCurrentForecast = divForecast.firstElementChild;
    const divUpcomingForecast = divForecast.lastElementChild;

    inputGetWeather.addEventListener('click', getWeather);

    function getWeather(e) {
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => response.json())
            .then(findLocation)
            .catch(showError);

        function findLocation(data) {
            const location = inputLocation.value;

            for (const object of data) {
                if (object.name === location) {
                    setCurrentForecast(object.code);
                    setUpcomingForecast(object.code);
                }
            }
        }

        function setCurrentForecast(code) {
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                .then(response => response.json())
                .then(setCurrentForecastHTML)
                .catch(showError);

            divForecast.style.display = 'block';

            function setCurrentForecastHTML(data) {
                const forecastData = data.forecast;


                if (divCurrentForecast.childElementCount !== 1) {
                    divCurrentForecast.removeChild(divCurrentForecast.lastElementChild);
                }

                const divForecasts = document.createElement('div');
                divForecasts.className = 'forecasts';

                const spanConditionSymbol = document.createElement('span');
                spanConditionSymbol.className = 'condition symbol';
                spanConditionSymbol.textContent = getWeatherSymbol(forecastData.condition);
                divForecasts.appendChild(spanConditionSymbol);

                const spanCondition = document.createElement('span');
                spanCondition.className = 'condition';
                divForecasts.appendChild(spanCondition);

                const spanForecastData1 = document.createElement('span');
                spanForecastData1.className = 'forecast-data';
                const spanForecastData2 = spanForecastData1.cloneNode();
                const spanForecastData3 = spanForecastData1.cloneNode();
                spanForecastData1.textContent = data.name;
                spanForecastData2.textContent = `${forecastData.low}\u00B0/${forecastData.high}\u00B0`;
                spanForecastData3.textContent = forecastData.condition;
                spanCondition.appendChild(spanForecastData1);
                spanCondition.appendChild(spanForecastData2);
                spanCondition.appendChild(spanForecastData3);

                divCurrentForecast.appendChild(divForecasts);
            }
        }

        function setUpcomingForecast(code) {
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                .then(response => response.json())
                .then(setUpcomingForecastHTML)
                .catch(showError);

            function setUpcomingForecastHTML(data) {
                const forecastData = data.forecast;


                if (divUpcomingForecast.childElementCount !== 1) {
                    divUpcomingForecast.removeChild(divUpcomingForecast.lastElementChild);
                }

                const divForecastInfo = document.createElement('div');
                divForecastInfo.className = 'forecast-info';

                for (const dayWeatherInfoObject of forecastData) {
                    const spanUpcoming = document.createElement('span');
                    spanUpcoming.className = 'upcoming';

                    const spanSymbol = document.createElement('span');
                    spanSymbol.className = 'symbol';
                    spanSymbol.textContent = getWeatherSymbol(dayWeatherInfoObject.condition);
                    spanUpcoming.appendChild(spanSymbol);

                    const spanForecastData1 = document.createElement('span');
                    spanForecastData1.className = 'forecast-data';
                    const spanForecastData2 = spanForecastData1.cloneNode();
                    spanForecastData1.textContent = `${dayWeatherInfoObject.low}\u00B0/${dayWeatherInfoObject.high}\u00B0`;
                    spanForecastData2.textContent = dayWeatherInfoObject.condition;
                    spanUpcoming.appendChild(spanForecastData1);
                    spanUpcoming.appendChild(spanForecastData2);

                    divForecastInfo.appendChild(spanUpcoming);
                }

                divUpcomingForecast.appendChild(divForecastInfo);
            }
        }


        function getWeatherSymbol(weatherString) {
            const objectWeatherSymbolCodes = {
                'Sunny': '\u2600',
                'Partly sunny': '\u26C5',
                'Overcast': '\u2601',
                'Rain': '\u2614',
            };

            return objectWeatherSymbolCodes[weatherString];
        }

        function showError() {
            divForecast.style.display = 'block';
            divCurrentForecast.style.display = 'none';
            divUpcomingForecast.style.display = 'none';
            divForecast.textContent = 'Error';
        }
    }
}

attachEvents();