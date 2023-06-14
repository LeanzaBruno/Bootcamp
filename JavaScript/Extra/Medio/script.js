// Set change event for total inbound input
( () => {
    const inboundInput = document.querySelector("#total-inbound");
    inboundInput.addEventListener("input", event => {
        if(!isValid(inboundInput)){
            setWarningColor(inboundInput);
            disableButton();
        }
        else{
            removeWarningColor(inboundInput);
            enableButton();
        }
    });
})();


// Set change event for percentages inputs
( () => {
    const percetages = document.querySelectorAll(".percentage");
    percetages.forEach( input => {
        input.addEventListener("input", event => {
            event.preventDefault();
            event.stopPropagation();
            let sum = 0;
            for(percentage of percetages) sum += parseFloat(percentage.value) || 0; // Si no pudo castear, suma 0

            const percentageSum = document.querySelector("#percentage-sum");
            percentageSum.value = sum;

            if(100.0 < percentageSum.value){
                setWarningColor(percentageSum);
                disableButton();
            }
            else{
                removeWarningColor(percentageSum);
                enableButton();
            }
        });
    })
})();

// Set submit event
( () => {
    document.querySelector("#medium-form").addEventListener("submit", event => {
        event.preventDefault(); event.stopPropagation();

        const totalInbound = parseFloat(document.querySelector("#total-inbound").value);
        const percentageSum = parseFloat(document.querySelector("#percentage-sum"));

        const necesssaryExpenses = parseFloat(document.querySelector("#necessary-expenses-percentage").value);
        const optionalExpenses = parseFloat(document.querySelector("#optional-expenses-percentage").value);
        const savingsAndInvestment = parseFloat(document.querySelector("#saving-investment-percentage").value);

        document.querySelector("#necessary-expenses-result").textContent = totalInbound * necesssaryExpenses / 100;
        document.querySelector("#optional-expenses-result").textContent = totalInbound * optionalExpenses / 100;
        document.querySelector("#saving-investment-result").textContent = totalInbound * savingsAndInvestment / 100;
    } );
})();

function disableButton(disable = true){
    document.querySelector("#calculate-percentages").disabled = disable;
}

function enableButton(){
    disableButton(false);
}

function setWarningColor(input){
   input.classList.add("is-invalid"); 
   input.classList.add("text-danger"); 
}

function removeWarningColor(input){
   input.classList.remove("is-invalid"); 
   input.classList.remove("text-danger"); 
}

function isValid(input){
    const value = input.value;
    return !(value == "" || value == null || value == undefined || isNaN(value));
}