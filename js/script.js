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

//
var design = document.getElementById('design');
var color = document.getElementById('color');
color.disabled = true;

design.addEventListener('change', (e) => {
    const selectDesign = design.value
    color.disabled = true;
    designValue = e.target.value
    option = document.getAttribute('option')
    console.log(designValue)
    // for (){}
});