
const search_btn = document.getElementById("search_btn");


search_btn.addEventListener("click", () => {
    const search = document.getElementById("search").value;

    const wrapper = document.getElementById("wrapper");
    const output_box = document.getElementById("output_box");

    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const temp_max = document.getElementById("temp_max");
    const temp_min = document.getElementById("temp_min");
    const icon = document.getElementById("icon");
    const state = document.getElementById("state");
    const humi = document.getElementById("humi");
    const speed = document.getElementById("speed");


    wrapper.style.height = "530px"
    output_box.style.visibility = "visible"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eda1ef54ac6b95c3b2e8d2ef681e6569`).then((response) => response.json()).then((data) => {
        console.log(data);

        city.innerHTML = `${data.name}, ${data.sys.country}`;

        temp.innerHTML = `${data.main.temp}°C`;

        temp_max.innerHTML = `<i class="fa-solid fa-temperature-arrow-up"></i> ${data.main.temp_max}°C`;

        temp_min.innerHTML = `<i class="fa-solid fa-temperature-arrow-down"></i> ${data.main.temp_min}°C`

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        state.innerHTML = `${data.weather[0].main}`

        humi.innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity} %`;

        speed.innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed} Km/h`;

        search.value = "";
    });


    

})

