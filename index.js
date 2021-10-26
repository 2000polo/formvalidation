const form = document.getElementById('sec-form');
const phone = document.getElementById('phonenumber');
const email = document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkFormValHandler();
})

const checkFormValHandler = () =>{
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if(phoneValue === ''){
        setErrorfor(phoneValue, 'phone number must provid')
    }
    else if(phoneValue.length < 10 || phoneValue.length > 10){
        setErrorfor(phoneValue, ' invalid phone number')
    }
    else{
        // setCorrectFor(phoneValue, "Valid value")
    }

    if (emailValue === ''){
        setErrorfor(emailValue, 'Email id must provid');
    }else if(!reg.test(emailValue)){
        setErrorfor(emailValue, 'Enter a valid email')
    }
}

const setErrorfor = (input, message) => {
    window.alert(message);
}

