const input = document.querySelector('.input');
const button = document.querySelector('.button');
const invalid = document.querySelector('.red');


button.addEventListener('click', function (e) {
    e.preventDefault();
    const inputVal = input.value;
    // console.log(inputVal);
    if (inputVal === "SUMATHI@0624") {
        location.replace("sumathi.html");
    }
    else {
        invalid.style.display = "block";
        input.value = "";
    }

});