function callMe(){

    var newTemp , temp , iconCode , iconUrl;

    var name = document.getElementById("input").value;
    var temperature = document.getElementById("temperature");
    var des = document.getElementById("description"); 
    let icon = document.querySelector('.Icon');
    temperature.innerHTML = "";
    des.innerHTML = "";
    icon.src = "";

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&APPID=3e76584426d7fe508b093b033b84adfd";

    fetch(url)
    .then((response) => {
        return response.json();
    })

    .then((data) => {
        temp = data.main.temp;
        const a = data.weather;
        return a;
    })

    .then((w) => {
        newTemp = temp-273.15;
        const p = document.createTextNode(newTemp.toFixed(0) + " \u00B0" + "C");
        temperature.appendChild(p);
        
        const d = document.createTextNode(w[0].main);
        des.appendChild(d);

        iconCode = w[0].icon;
        iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        icon.src = iconUrl;
    })

    .catch((resolve) => {
        console.log(resolve);
        des.textContent = "City not Found!";
    });

    var flag = 0;
    temperature.addEventListener("click", () => {
    
        if(flag == 0){
            temperature.textContent = temp.toFixed(0) + " \u00B0" + "F";
            flag = 1;
        }
        else{
            temperature.textContent = newTemp.toFixed(0) + " \u00B0" + "C";
            flag = 0;
        }
            
    });
    

}

const button = document.querySelector("button");

button.addEventListener("click" , () => {
    callMe();
});

