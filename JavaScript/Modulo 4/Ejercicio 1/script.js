
( ()=> {
    document.getElementById("form").addEventListener("submit", event => {
        event.preventDefault();
        event.stopPropagation();
        const INBOUNDS = document.getElementsByClassName("inbound");
        const OUTBOUNDS = document.getElementsByClassName("outbound");

        let totalInbound = 0;
        for(inbound of INBOUNDS)
            totalInbound += toNumber(inbound.value);

        let totalOutbound = 0;
        for(outbound of OUTBOUNDS)
            totalOutbound += toNumber(outbound.value);

        const delta = totalInbound - totalOutbound;
        let result;

        if(delta > 0) result = "1";
        else if(delta == 0) result = "0";
        else result = "-1";
        
        document.getElementById("result").textContent = "Resultado: " + result;
    });
})();

function toNumber(value){ return parseFloat(value) || 0; }