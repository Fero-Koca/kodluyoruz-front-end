const names = document.getElementById("myName");
const clock = document.querySelector(".clock");

    let name=prompt("İsminizi giriniz : ")
    names.innerHTML= name
// name

        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day = date.getDay();
        let dayName;
        switch (day) {
            case 1:
                dayName = "Pazartesi";
                break;
            case 2:
                dayName = "Salı";
                break;
            case 3:
                dayName = "Çarşamba";
                break;
            case 4:
                dayName = "Perşembe";
                break;
            case 5:
                dayName = "Cuma";
                break;
            case 6:
                dayName = "Cumartesi";
                break;
            case 7:
                dayName = "Pazar";
                break;

        }
        clock.innerHTML =`${hours} : ${minutes} : ${seconds} - ${dayName}`


