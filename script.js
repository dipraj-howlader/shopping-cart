const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function(){
    const value =  document.getElementById("minusValue").value;
    const currentValue = parseFloat(value) - 1;
    document.getElementById("minusValue").value = currentValue;
    const iphonePrice = document.getElementById("iphonePrice").innerText;
    const totalResolved = parseInt(iphonePrice) - 1219;
    document.getElementById('iphonePrice').innerText = totalResolved;

})
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function(){
    const value = document.getElementById("minusValue").value;
    const currentValue =parseFloat(value) + 1;
    document.getElementById("minusValue").value = currentValue;

    const iphonePrice = document.getElementById("iphonePrice").innerText;
    const total = 1219 * currentValue;
    document.getElementById('iphonePrice').innerText = total;

})
