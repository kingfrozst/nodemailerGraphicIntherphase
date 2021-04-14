


const formulario = document.getElementById('formData');   
const button = document.getElementById('submitMail');


formulario.addEventListener("submit", (e)=>{
    e.preventDefault();


    const password = document.getElementById('password').value;
    const service = document.getElementById('service').value;
    const email = document.getElementById('email').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;

    const data = {
        password,
        service,
        email,
        from,
        to,
        subject,
        content
    }
    
const options ={
    method: 'POST',
    headers:  {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}

fetch('/api', options);


   });





