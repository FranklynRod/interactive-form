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
// when user selects activity cost is added to total. When activity is deselected cost is removed from total.
var registerActivities = document.getElementById("activities");
var activitiesCost = document.getElementById("activities-cost");
var checkBox = registerActivities.querySelectorAll("input[type='checkbox']")

let totalCost = 0;

registerActivities.addEventListener('change',(e) => {
    var costOption = parseInt(e.target.getAttribute("data-cost"));

    if (e.target.checked){
        totalCost += costOption;
    }else{
        totalCost -= costOption;
    }
    activitiesCost.textContent = `Total: $${totalCost}`;
});

activitiesCost.textContent = `Total: $0`;

// when user must enter data into input fields according valid rules or else they will be unable to submit form

var nameId = document.getElementById("name");
var emailAddress = document.getElementById("email");
var registerActivities = document.getElementById("activities");
var cardNumber = document.getElementById("cc-num");
var zipCode =  document.getElementById("zip");
var cvv =  document.getElementById("cvv");
var form = document.querySelector("form");
var paymentSelection = document.getElementById("payment")
var checkBoxOptions = registerActivities.querySelectorAll('input[type= "checkbox"]')


const isNameValid = (nameId) => {
    return /[A-Za-z]+$/.test(nameId);
 }

 const isEmailValid = (emailAddress) => {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress);
 }
const isCardValid = (cvv, zipCode, cardNumber) => {
    if(paymentSelection.value === "credit-card"){
        const cardNumberValidation = /^[0-9]{13,16}$/.test(cardNumber);
        const cvvValidation = /^[0-9]{3}$/.test(cvv);
        const zipCodeValidation = /^[0-9]{5}$/.test(zipCode);

        return cardNumberValidation && cvvValidation && zipCodeValidation;
    }
    
};

const isActivityValid = (checkBoxOptions) => {
    return checkBoxOptions.some((checkbox) => checkbox.checked)
};

form.addEventListener('submit', (e) => {
    var validName = isNameValid(nameId.value);
    var validEmail = isEmailValid(emailAddress.value);
    var validActivity = isActivityValid(checkBoxOptions);
    var validCard = isCardValid(cvv.value, zipCode.value, cardNumber.value);

    if (!validName || validName === "" || !validActivity || !validEmail || !validCard){
        e.preventDefault();
        alert("Please fill out required fields");
    };

});


