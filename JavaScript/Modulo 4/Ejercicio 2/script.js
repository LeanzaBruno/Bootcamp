( () => {
    const CAPITALS = document.getElementsByClassName("capital");
    const TERMS = document.getElementsByClassName("term");
    const RATES = document.getElementsByClassName("rate");
    const INTERESTS = document.getElementsByClassName("interest");

    for(let index = 0 ; index < CAPITALS.length ; ++index){
        CAPITALS[index].addEventListener("change", event => {
            let capital = parseFloat(CAPITALS[index].value);
            let term = parseFloat(TERMS[index].dataset.term);
            let rate = parseFloat(RATES[index].dataset.rate);

            INTERESTS[index].textContent = calculateInterest([capital, term, rate])[3];
        });
    }
})();

function calculateInterest(array){
    const capital = array[0];
    const term = array[1];
    const rate = array[2];
    array.push( capital * term * rate / 100);
    return array;
}