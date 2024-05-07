window.addEventListener("load", () => {
    const apiKey = "4a25b26e6ab95f10816616b281e3510b"; // api key
    const city = "kajiado"; // my city
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
  
        document.getElementById("location").innerText = `Location: ${location}`;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${temperature}°C`;
        document.getElementById(
          "description"
        ).innerText = `Description: ${description}`;
      })
      .catch((error) => console.log("Error fetching weather data:", error));
  });
  