/**
 * This button creates a new row with a new category in the table
 */
( () => {
    document.querySelector("#addCategoryButton").addEventListener("click", event => {
        const table = document.querySelector("#table");
        const row = table.rows.length;

        const newRow = table.insertRow(row);

        const nameCell = newRow.insertCell(0);
        const nameInput = createNameInput();
        nameCell.appendChild( nameInput );

        const percentageCell = newRow.insertCell(1);
        percentageCell.appendChild( createPercentageInput() );

        const resultCell = newRow.insertCell(2);
        resultCell.appendChild( createResultOutput() );

        const deleteCell = newRow.insertCell(3);
        deleteCell.classList.add("text-end");
        deleteCell.appendChild(createDeleteButton(row)); 

        nameInput.focus();
    });
})();


/**
 * Calculate percentages 
 */
( () => {
    document.querySelector("#form").addEventListener("submit", event => {
        event.preventDefault();
        event.stopPropagation();

        const totalInbound = parseFloat(document.querySelector("#totalInbound").value) || 0;
        const percentages = document.querySelectorAll(".percentage");
        
        if(100.0 < calcutePercentagesSum(percentages)){
            alert("La suma de todos los porcentajes no debe ser mayor a 100");
            return;
        }

        const results = document.querySelectorAll(".result");

        for(let row = 0 ; row < percentages.length ; ++row)
            results[row].value = totalInbound * parseFloat(percentages[row].value) / 100;
    } );
})();


function createNameInput(row){
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("form-control", "text-center");
    nameInput.addEventListener("focusout", event => {
        if(nameInput.value == "") return;
        const label = document.createElement("label");
        label.classList.add("form-label", "text-center");
        label.textContent = nameInput.value;
        nameInput.replaceWith(label);
        enableButton();
    });
    nameInput.focus();
    return nameInput;
}


function createPercentageInput(){
    const percentageInput = document.createElement("input");
    percentageInput.type = "number";
    percentageInput.value = 0;
    percentageInput.min = 0;
    percentageInput.max = 100;
    percentageInput.classList.add("form-control", "percentage");
    return percentageInput;
}


function createResultOutput(){
    const resultOutput = document.createElement("input");
    resultOutput.type = "text";
    resultOutput.readOnly = true;
    resultOutput.classList.add("form-control-plaintext", "text-center","result");
    resultOutput.value = "-";
    return resultOutput;
}


function createDeleteButton(row){
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-close");
    deleteButton.addEventListener("click", () => {
        table.deleteRow(row)
        if(document.querySelector("#table").length == 0)
            disableButton();
    });
    return deleteButton;
}
function disableButton(disable = true){
    document.querySelector("#calculate").disabled = disable;
}

function enableButton(){
    disableButton(false);
}

function calcutePercentagesSum(percentages){
    let sum = 0;
    for(percentage of percentages)
        sum += parseFloat(percentage.value) || 0;
    return sum;
}