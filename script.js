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
//  2nd part

const CaseMinus = document.getElementById('CaseMinus');
CaseMinus.addEventListener('click', function(){
    handleProductChange(false);
})
const casePlus = document.getElementById('CasePlus');
casePlus.addEventListener('click', function(){
    handleProductChange(true);
})

function handleProductChange(isIncrease){
    const caseInput = document.getElementById('changeOfValue');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true ){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
}