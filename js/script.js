//when page loads the focus is on the name element
var nameId = document.getElementById("name");
nameId.focus();

//when user selects job role value of other, the other input field appears
var other = document.getElementById("other-job-role");
other.style.display = 'none';

var jobRole = document.getElementById('title');

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
    other.style.display = 'block';
    }else{
    other.style.display = 'none';
    }
});

//when user selects design color option correlate with relevant design
var design = document.getElementById("design");
var color = document.getElementById("color");
var colorOptions = document.querySelectorAll("option[data-theme]")

for (let i = 0; i < colorOptions.length; i++){
    colorOptions[i].disabled = true;
}

design.addEventListener('change', (e) => {
    
    for (let i = 0; i < colorOptions.length; i++){
        if (design.value === colorOptions[i].getAttribute("data-theme")){
            colorOptions[i].disabled = false;
        }else{
            colorOptions[i].disabled = true;
        }
    }
});

// when user selects certain payment method those related form inputs will appear
var paymentSelect= document.getElementById("payment");
var creditCard= document.getElementById("credit-card");
var payPal = document.getElementById("paypal");
var bitCoin = document.getElementById("bitcoin");

payPal.style.display = "none";
bitCoin.style.display = "none";

paymentSelect.addEventListener('change',(e) => {
    payPal.style.display = "none";
    bitCoin.style.display = "none";
    creditCard.style.display = "none";

    if (e.target.value === 'credit-card') {
        creditCard.style.display = "block";
    } else if (e.target.value === 'paypal'){
            payPal.style.display = "block";
        }else if (e.target.value === 'bitcoin'){ 
            bitCoin.style.display = "block";
        }
});
