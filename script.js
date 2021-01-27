const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function(){
    const value =  document.getElementById("minusValue").value;
    const currentValue = value - 1;
    document.getElementById("minusValue").value = currentValue;

})
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function(){
    const value = document.getElementById("minusValue").value;

    const currentValue =parseFloat(value) + 1;
    document.getElementById("minusValue").value = currentValue;
})