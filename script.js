function calculateTip() {
    var billAmount = parseFloat(document.getElementById("bill-amount").value);
    var tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    document.getElementById("tip-amount").textContent = "R$ " + tipAmount;
    document.getElementById("total-amount").textContent = "R$ " + totalAmount;

    document.getElementById("result").style.display = "block";
}
