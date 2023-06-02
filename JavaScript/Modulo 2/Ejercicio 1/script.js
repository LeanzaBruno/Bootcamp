const CURRENT_DATE = new Date();

// Dejo como globales a los inputs porque los uso repetidamente, aunque no estoy seguro de si es la mejor práctica 
const dayInput = document.getElementById("day");            
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

function setMaxDay(){
    day.max = new Date(yearInput.value, monthInput.selectedIndex + 1, 0).getDate();
}

// Setear años
( () => {
    for(let year = 1900 ; year <= CURRENT_DATE.getFullYear() ; ++year){
        let option = document.createElement("option");
        option.text = year;
        yearInput.add(option);
    }
})();

//Setear eventos
( () => {
    monthInput.addEventListener("change", setMaxDay );
    yearInput.addEventListener("change", setMaxDay );

    document.getElementById("date-form").addEventListener("submit", event => {
        const form = event.target;
        const day = dayInput.value;
        const month = monthInput.value;
        const year = yearInput.value;

        if(!form.checkValidity()){
            const day = dayInput.value;
            const dayTooltip = document.getElementById("day-tooltip");
            if(!day)
                dayTooltip.innerHTML = "Tenés que ingresar un valor numérico!";
            else
                dayTooltip.innerHTML = "La fecha no es válida!";

            event.stopPropagation();
        }
        else{
            const UNIX_EPOCH = new Date(0);     //Thursday 1 January 1970 00:00:00 UTC
            const birthday = new Date(year, month, day);
            const mSecondsDifference = CURRENT_DATE.getTime() - birthday.getTime();
            const age = new Date(mSecondsDifference).getFullYear() - UNIX_EPOCH.getUTCFullYear();

            if(age < 18 )
                alert("Tenés " + age + " años y tenés que ser mayor de 18");
            else{
                form.hidden = true;
                document.getElementById("welcome-message").hidden = false;
            }
        }

        event.preventDefault();     //Evita q se reinicie la página luego del submit 
        form.classList.add("was-validated");
    });
}
)();

// Setear valores iniciales
( () => {
    dayInput.value = CURRENT_DATE.getDate();
    monthInput.selectedIndex = CURRENT_DATE.getMonth();
    yearInput.selectedIndex = yearInput.length - 1;
    setMaxDay();
})();