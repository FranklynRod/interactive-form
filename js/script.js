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
    //check name validation
    if (!validName || validName === ""){
        e.preventDefault();
        validName.parentElement.classList.add("error-border", "not-valid");
        validName.querySelector('.name-hint').style.display = 'block';
    } else {
        validName.parentElement.classList.remove("error-border", "not-valid");
        validName.parentElement.querySelector('.name-hint').style.display = 'none';
  }
    //check activity validation
    if (!validActivity){
        e.preventDefault();
        validActivity.parentElement.classList.add("error-border", "not-valid");
        validActivity.querySelector('.activities-hint').style.display = 'block';
    } else {
        validActivity.parentElement.classList.remove("error-border", "not-valid");
        validActivity.parentElement.querySelector('.activities-hint').style.display = 'none';
  };
    //check email validation
    if (!validEmail){
        e.preventDefault();
        validEmail.parentElement.classList.add("error-border", "not-valid");
        validEmail.querySelector('.email-hint').style.display = 'block';
    } else {
        validEmail.parentElement.classList.remove("error-border", "not-valid");
        validEmail.parentElement.querySelector('.email-hint').style.display = 'none';
  };
    //check card validation
    if (!validCard){
        e.preventDefault();
        validCard.parentElement.classList.add("error-border", "not-valid");
        validCard.querySelector('.cc-hint').style.display = 'block';
    } else {
        validCard.parentElement.classList.remove("error-border", "not-valid");
        validCard.parentElement.querySelector('.cc-hint').style.display = 'none';
  }
});

// when user enters invalid information they are given accessible user feedback

var checkBoxInput = registerActivities.querySelectorAll('input[type= "checkbox"]')

for (let i=0;i< checkBoxInput.length;i++){
    checkBoxInput[i].addEventListener('focus',(e) =>  {
        parent = e.target.parentElement;
        parent.classList.add('focused')
    });
    checkBoxInput[i].addEventListener('blur',(e) => {
        parent = e.target.parentElement;
        parent.classList.remove('focused')
    });
}