window.addEventListener("load", () => {
  let city = "kitengela"; // my city


  const getWeatherData = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById("location").textContent = `Location: ${location}`;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${temperature}°C`;
        document.getElementById(
          "description"
        ).textContent = `Description: ${description}`;
      })
      .catch((error) => console.log("Error fetching weather data:", error));
  };
  getWeatherData();
  const inputField = document.getElementById("city");
  inputField.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.target.value) {
      city = e.target.value;
      // inputField.value = "";
      console.log({ city });
      getWeatherData();
    }
    // console.log(e.key)
  });
});
