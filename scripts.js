window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", displayInput);
}

function displayInput(event) {
    event.preventDefault();
    let inputValue = document.getElementById("email").value;
    alert("Input value: " + inputValue);
}