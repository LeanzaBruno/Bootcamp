( () => {
    document.getElementById("login-form").addEventListener("submit", event => {
        const form = event.target;

        if(form.checkValidity()){
            const user = document.getElementById("user").value;
            const password = document.getElementById("password").value;
            if( user == "admin" && password == "1234")
                alert("Bienvenido/a! \nTe llevaremos a la página principal");
            else{
                document.getElementById("login-error").classList.add("show");
                event.preventDefault();
            }
        }else{
            form.classList.add("was-validated");
            event.preventDefault();
        }
        event.stopPropagation();
    });
})();