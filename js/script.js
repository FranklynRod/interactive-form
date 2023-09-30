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
color.disabled = true;

design.addEventListener('change', (e) => {
    color.disabled = false;
    //loop through color options to set selected to seen by user and unselected to be hidden
    
    for (let i = 0; i < colorOptions.length; i++){
        if (design.value === colorOptions[i].getAttribute("data-theme")){
            colorOptions[i].hidden = false;
            colorOptions[i].selected = true;
        }else{
            colorOptions[i].hidden = true;
            colorOptions[i].selected = false;
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
paymentSelect.children[1].setAttribute("selected", true);

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
var emailAddress = document.getElementById("email");
var cardNumber = document.getElementById("cc-num");
var zipCode =  document.getElementById("zip");
var cvv =  document.getElementById("cvv");
var form = document.querySelector("form");
var paymentSelection = document.getElementById("payment")
var checkBoxOptions = document.querySelectorAll('input[type= "checkbox"]')


const isNameValid = (nameId) => {
    return /^[\S\s]+[\S]+$/i.test(nameId);
 }

const isEmailValid = (emailAddress) => {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress);
 }

const isCardNumberValid = (cardNumber) => {
    if(paymentSelection.value === "credit-card"){
        return /^[0-9]{13,16}$/.test(cardNumber);
    }
};

const isCVVValid = (cvv) => {
    if(paymentSelection.value === "credit-card"){
        return /^[0-9]{3}$/.test(cvv);
    }
};

const isZipCodeValid = (zipCode) => {
    if(paymentSelection.value === "credit-card"){
        return  /^[0-9]{5}$/.test(zipCode);
    }
};
const isActivityValid = (totalCost) => {
    return totalCost > 0 ;
};

form.addEventListener("submit", (e) => {
    
    const validator = (inputElement, validationFunction) => {
        const inputValue = inputElement.value;
        if (!validationFunction(inputValue)) {
            e.preventDefault();
            inputElement.parentElement.classList.remove("valid");
            inputElement.parentElement.classList.add("error-border", "not-valid");
            inputElement.nextElementSibling.style.display = "block";  
        } else {
            inputElement.parentElement.classList.add("valid");
            inputElement.parentElement.classList.remove("error-border", "not-valid");
            inputElement.nextElementSibling.style.display = "none";  
        }
    };
        validator(nameId, isNameValid);
        validator(emailAddress, isEmailValid);
        validator(cardNumber, isCardNumberValid);
        validator(zipCode, isZipCodeValid);
        validator(cvv, isCVVValid);
        validator(activitiesCost, isActivityValid);
});

// when user enters invalid information they are given accessible user feedback
var checkBoxInputs = document.querySelectorAll('input[type= "checkbox"]')

for (let i=0;i< checkBoxInputs.length;i++){
    checkBoxInputs[i].addEventListener("focus",(e) =>  {
        parent = checkBoxInputs[i].parentElement;
        parent.classList.add("focus")
    });
    checkBoxInputs[i].addEventListener('blur',(e) => {
        parent = checkBoxInputs[i].parentElement;
        parent.classList.remove("focus")
    });
}
