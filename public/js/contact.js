const form = document.querySelector('.formContact');
const submitButton = document.querySelector('.submitForm')

form.addEventListener('submit', async (e) => { 
    e.preventDefault();

    const nameForm = document.getElementById('name').value;
    const emailForm = document.getElementById('email').value;

    const dados = {
        name: nameForm,
        email: emailForm
    }

    // POST request using fetch()
await fetch("http://localhost:3000/contact", {
    
    // Adding method type
    method: "POST",
    
    // Adding body or contents to send
    body: JSON.stringify(dados),
    
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

// Converting to JSON
.then(response => response.json())

// Displaying results to console
.then(json => console.log(json));
})